import { Console } from "console";
import PostModel from "../models/post.model";
import { ImageInput, PostInput } from "../utils/types";
import { postNewImage } from "./image.srv";

const postNewPostSrv = async (post: PostInput, image: ImageInput) => {
  if (!post) return "Not data on post param";
  const { title, content, userId, tag } = post;
  const { filename } = image;

  const newPost = await PostModel.create({
    title,
    content,
    image: filename,
    userId,
    tag,
  });
  console.log(newPost);
  const findPost = PostModel.findOne({ where: { title: post.title } });
  if (!findPost) console.log("Not found");

  const imageLoading = await postNewImage(
    image,
    newPost.getDataValue(`${post.title}`)
  );
  console.log("Image save? ->", imageLoading);
  return newPost;
};

const getPostsSrv = async () => {
  const posts = await PostModel.findAll();
  return posts;
};

const getPostSrv = async (id: number) => {
  const post = PostModel.findByPk(id);
  return post;
};

const updatePostSrv = async (id: string, post: any) => {
  const updatePost = PostModel.update({ ...post }, { where: { id: id } });
  return updatePost;
};

const deletePostSrv = async (id: string) => {
  const deletePost = PostModel.destroy({ where: { id: parseInt(id) } });
  return deletePost;
};

export {
  postNewPostSrv,
  getPostSrv,
  getPostsSrv,
  updatePostSrv,
  deletePostSrv,
};
