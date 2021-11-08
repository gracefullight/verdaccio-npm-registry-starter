import { resolve } from "path";

import { runServer } from "@verdaccio/node-api";

(async () => {
  const app = await runServer(
    resolve(__dirname, "..", "config", "verdaccio.yml")
  );
  app.listen(3000, () => {
    console.log("server started");
  });
})();
