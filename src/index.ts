import app from "./app";
import env from "./config";

app.listen(env.PORT, () => {
  console.log(`🚀 Running at http://localhost:${env.PORT}`);
});
