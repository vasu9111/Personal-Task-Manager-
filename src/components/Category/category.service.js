import categoryMld from "../../models/cetegory.js";
// cerate a categoey add
const createCategory = async (userId, categoryData) => {
  try {
    const category = new categoryMld({
      userId,
      name: categoryData.name,
      color: categoryData.color,
      description: categoryData.description,
    });

    await category.save();
    return { message: "category created successfully", category };
  } catch (err) {
    const error = new Error(err.message);
    throw error;
  }
};
// get user all category
const getAllCategory = async (userId) => {
  try {
    const category = await categoryMld.find({ userId });
    if (category.length === 0) {
      const error = new Error("CATEGORY_NOT_FOUND");
      throw error;
    }
    return category;
  } catch (err) {
    const error = new Error(err.message);
    throw error;
  }
};
export default {
  createCategory,
  getAllCategory,
};