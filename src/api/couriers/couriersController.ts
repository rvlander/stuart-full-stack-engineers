import {
  Body,
  Controller,
  Get,
  Query,
  Path,
  Put,
  Delete,
  Route,
  SuccessResponse,
  Response,
} from "tsoa";

import { Courier } from "./couriers";
import { CouriersService } from "./couriersService";

import { NotFoundError, ValidateErrorJSON } from "../utils";

@Route("couriers")
export class CouriersController extends Controller {
  @Response<ValidateErrorJSON>(422, "Validation failed")
  @Response(201, "Created")
  @Response(200, "OK")
  @Put()
  public async createCoursier(@Body() requestBody: Courier): Promise<Courier> {
    const [courier, operation] = await new CouriersService().upsert(
      requestBody.id,
      requestBody.max_capacity
    );
    if (operation === "created") {
      this.setStatus(201);
    } else if (operation === "updated") {
      this.setStatus(200);
    }
    return courier;
  }

  @Response(404, "Not Found")
  @SuccessResponse(204)
  @Delete("{id}")
  public async deleteCoursier(@Path() id: number): Promise<void> {
    this.setStatus(204);
    try {
      await new CouriersService().delete(id);
    } catch (err) {
      if (err instanceof NotFoundError) {
        this.setStatus(404);
      }
    }
    return undefined;
  }

  @Response<ValidateErrorJSON>(422, "Validation failed")
  @Get("lookup")
  @SuccessResponse(200)
  public async lookup(@Query() required_capacity: number): Promise<Courier[]> {
    this.setStatus(200);
    const couriers = await new CouriersService().lookup(required_capacity);
    return couriers;
  }
}
