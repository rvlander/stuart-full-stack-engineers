import {
    Body,
    Controller,
    Path,
    Post,
    Delete,
    Route,
    SuccessResponse,
    Response
  } from "tsoa";

  import { Courier } from "./couriers";
  import { CouriersService } from "./couriersService";

  import { ValidateErrorJSON } from "../utils";
  
  @Route("couriers")
  export class CouriersController extends Controller { 

    @Response<ValidateErrorJSON>(422, "Validation failed")
    @SuccessResponse(201, "Created") // Custom success response
    @Post()
    public async createCoursier(
      @Body() requestBody: Courier
    ): Promise<Courier> {
      this.setStatus(201); // set return status 201
      await new CouriersService().upsert(requestBody.id, requestBody.max_capacity);
      return requestBody;
    }

    @Delete("{id}")
    public async getUser(
      @Path() id: number
    ): Promise<void> {
      await  new CouriersService().delete(id);
      return
    }
  }