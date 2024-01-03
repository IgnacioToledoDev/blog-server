import ImageModel from "../models/image.model";

const postNewImage = async (img: any, postId?: number) => {
  const { filename, path } = img;
  await ImageModel.create({ filename, path, postId });
  return "Image save succesfully";
};

export { postNewImage };
