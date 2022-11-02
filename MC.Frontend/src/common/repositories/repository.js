import api from "../util/api";

export default class Repository {
  checkUser = async (infos) => {
    try {
      const { data } = await api.post("/login", infos);
      return data;
    } catch (error) {
      console.log(error);
    }
  };
}
