import instance from "./config";

export const getUsers= async () => {
  try {
    const { data } = await instance.get("/users");
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const getUserById = async (id) => {
  try {
    const { data } = await instance.get(`/users/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const removeUserById = async (id) => {
  try {
    const { data } = await instance.delete(`/users/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const addUser = async (user) => {
  try {
    const { data } = await instance.post("/users", user);
    return data;
  } catch (error) {
    console.log(error);
  }
};
  export const updateUser = async (user) => {
    try {
      const { data } = await instance.put(`/users/${user.id}`, user);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

