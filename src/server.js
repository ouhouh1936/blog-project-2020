import express from "express"; // express framework를 사용하기 위해 import함
import dotenv from "dotenv";
dotenv.config();
import morgan from "morgan";
import globalRouter from "./router/globalRouter";
import boardRouter from "./router/boardRouter";
import path from "path";
import connect from "../db";

const PORT = process.env.PORT;

const app = express();

app.set("view engine", "pug");
app.use(morgan(`dev`));

app.use(express.static(path.join(__dirname, "/assets")));
connect();

app.use("/", globalRouter);
app.use("/board", boardRouter);

app.listen(PORT, () => {
  console.log(`✅  ${PORT} Server Start`);
});
