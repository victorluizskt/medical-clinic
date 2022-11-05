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

  registerAddress = async (infos) => {
    try {
      const { data } = await api.post("/registerAddressPatient", infos);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  getSpecialty = async () => {
    try {
      const { data } = await api.get("getSpecialty");
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  getNameDoctor = async (info) => {
    try {
      const { data } = await api.post("getNameDoctor", info);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
}
