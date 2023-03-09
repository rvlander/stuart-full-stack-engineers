export interface ValidateErrorJSON {
  message: "Validation failed";
  details: { [name: string]: unknown };
}

export class NotFoundError extends Error {
  constructor() {
    super("Entity not found");
    this.name = "NotFoundError";
  }
}
