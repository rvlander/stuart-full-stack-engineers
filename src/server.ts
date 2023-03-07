import { app } from "./app";
import { port } from "./config"

app.listen(port, () =>
  console.log(`Listening at http://localhost:${port}`)
);