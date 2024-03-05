import instance from "./config";

export const getCategory= async () => {
  try {
    const { data } = await instance.get("/categories");
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const getCategoryById = async (id) => {
  try {
    const { data } = await instance.get(`/categories/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const removeCategoryById = async (id) => {
  try {
    const { data } = await instance.delete(`/categories/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const addCategory = async (category) => {
  try {
    const { data } = await instance.post("/categories", category);
    return data;
  } catch (error) {
    console.log(error);
  }
};
  export const updateCategory = async (category) => {
    try {
      const { data } = await instance.put(`/categories/${category.id}`, category);
      return data;
    } catch (error) {
      console.log(error);
    }
  };
