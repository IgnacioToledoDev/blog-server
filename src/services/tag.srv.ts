import TagModel from "../models/tag.model";
import { TagInput } from "../utils/types";

const postNewTagSrv = async (tag: TagInput) => {
  const { name } = tag;
  const data = await TagModel.create({ name: name, tag: "tag" });
  return data;
};

const getTagsSrv = async () => {
  const tags = await TagModel.findAll();
  return tags;
};

const getTagSrv = async (id: number) => {
  const tag = TagModel.findByPk(id);
  return tag;
};

const updateTagSrv = async (id: string, tag: any) => {
  const updateTag = TagModel.update({ ...tag }, { where: { id: id } });
  return updateTag;
};

const deleteTagSrv = async (id: string) => {
  const deleteTag = TagModel.destroy({ where: { id: parseInt(id) } });
  return deleteTag;
};

export { postNewTagSrv, getTagSrv, getTagsSrv, updateTagSrv, deleteTagSrv };
