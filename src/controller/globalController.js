import Post from "../models/Post";
import PostType from "../models/PostType";
import dotenv from "dotenv";
dotenv.config();
import middlewares from "../common/middlewares";

const homeController = (req, res) => {
  console.log("I'm home Controller");
  res.render("screens/home");
};

const contactController = (req, res) => {
  res.render("screens/contact");
};
const javascriptController = async (req, res) => {
  try {
    const dataResult = await Post.find({ isDelte: false }).populate({
      path: "PostType",
      model: PostType,
    });

    const devMode = middlewares.checkDevMode();

    res.render("screens/javascript", { dataResult, devMode });
  } catch (e) {
    console.log(e);
    res.render("screens/home");
  }
};

const boardwriteController = (req, res) => {
  res.render("screens/boardWrite");
};

export const globalController = {
  homeController,
  contactController,
  javascriptController,
  boardwriteController,
};
