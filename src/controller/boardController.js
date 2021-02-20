import Post from "../models/Post";
import PostType from "../models/PostType";
import { globalController } from "./globalController";
import mongoose from "mongoose";

const detailController = async (req, res) => {
  try {
    const postData = await Post.findOne({ _id: req.params.id });
    res.render("screens/boardDetail", { postData });

    console.log(postData);
  } catch (e) {
    console.log(e);
    res.render("screens/home");
  }
};

const boardWriteController = (req, res) => {
  const type = req.params.type;

  res.render("screens/boardWrite", { type });
};

const boardWriteDbController = async (req, res) => {
  let serchType = "";

  if (req.body.type === "javascript") {
    serchType = "JS";
  }
  try {
    const type = await PostType.findOne({ typeName: serchType });

    const currentTime = new Date().toString();

    const allPost = await Post.find();
    const postNo = allPost.length + 1;
    const newPostTypeId = mongoose.Types.ObjectId(type._id);

    const result = await Post.create({
      title: req.body.title,
      description: req.body.desc,
      author: `관리자`,
      hit: 0,
      postType: newPostTypeId,
      createdAt: currentTime,
      lastUpdatedAt: currentTime,
      isDlete: false,
      no: postNo,
    });

    console.log("✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅");
    console.log(result);
    console.log("✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅");
  } catch (e) {
    console.log(e);
  }

  globalController.javascriptController(req, res);
};

export const boardController = {
  detailController,
  boardWriteController,
  boardWriteDbController,
};
