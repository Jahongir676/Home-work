import express from "express";
import morgan from "morgan";
import { config } from "dotenv";
import { createUserTable } from "./schema/users/user.schema.js";
import { userRouter, addressRouter, social_profileRouter, authRouter, productRouter, categoryRouter } from "./routes/index.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("ok");
});
app.use("./user", userRouter);
app.use("./address", addressRouter);
app.use("./social_profile", social_profileRouter);
app.use("./auth", authRouter);
app.use("./product", productRouter);
app.use("./category", categoryRouter);

app.get("/setup", async (req, res) => {
  await createUserTable();
  res.send("Table Created!.");
});
export default app;
