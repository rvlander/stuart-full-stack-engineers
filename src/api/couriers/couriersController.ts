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

import { ValidateErrorJSON } from "../utils";

@Route("couriers")
export class CouriersController extends Controller {
  @Response<ValidateErrorJSON>(422, "Validation failed")
  @SuccessResponse(201, "Created")
  @SuccessResponse(200, "OK")
  @Put()
  public async createCoursier(@Body() requestBody: Courier): Promise<Courier> {
    this.setStatus(201);
    await new CouriersService().upsert(
      requestBody.id,
      requestBody.max_capacity
    );
    return requestBody;
  }

  @Delete("{id}")
  @SuccessResponse(204)
  public async deleteCoursier(@Path() id: number): Promise<void> {
    this.setStatus(204);
    await new CouriersService().delete(id);
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
