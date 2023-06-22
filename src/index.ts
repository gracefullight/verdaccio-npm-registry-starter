import { resolve } from "path";

import { runServer } from "@verdaccio/node-api";
import { config } from "dotenv";

config({
  path: resolve(__dirname, "..", ".env"),
});

(async () => {
  const app = await runServer(resolve(__dirname, "..", "verdaccio.yml"));
  app.listen(3000, () => {
    console.log("server started");
  });
})();
