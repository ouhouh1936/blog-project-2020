import express from "express";
import dotenv from "dotenv";
dotenv.config();
import morgan from "morgan";
import globalRouter from "./router/globalRouter";
import path from "path";

const PORT = process.env.PORT;

const app = express();

app.set("view engine", "pug");
app.use(morgan(`dev`));
app.use(express.static(path.join(__dirname, `assets`)));
app.use("/", globalRouter);

app.listen(PORT, () => {
  console.log(`✅  ${PORT} Server Start`);
});
