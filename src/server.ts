import { app } from "./app";
import { port } from "./config";
import initialize from "./database/initialize";

async function bootstrap(): Promise<void> {
  await initialize();
}

console.log("Initializing service...");
bootstrap()
  .then(() =>
    app.listen(port, () => console.log(`Listening at http://localhost:${port}`))
  )
  .catch((error) => {
    console.error("Initialization failed");
    console.error(error);
    process.exit(1);
  });
