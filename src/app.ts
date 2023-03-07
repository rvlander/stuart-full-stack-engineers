import express, { json, urlencoded,  Response as ExResponse, Request as ExRequest } from "express";
import { RegisterRoutes } from "../build/routes";
import { env } from "./config"
import swaggerUi from "swagger-ui-express";

export const app = express();

app.use(
  urlencoded({
    extended: true,
  })
);
app.use(json());

RegisterRoutes(app);


if (env === "development") {
    app.use("/docs", swaggerUi.serve, async (_req: ExRequest, res: ExResponse) => {
        return res.send(
          swaggerUi.generateHTML(await import("../build/swagger.json"))
        );
    });
}