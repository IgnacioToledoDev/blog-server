import PostModel from "../models/post.model";

const postNewPostSrv = async (post: any) => {
  const data = await PostModel.create({ ...post });
  return data;
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
