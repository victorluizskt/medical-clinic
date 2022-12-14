import api from "../util/api";

export default class Repository {
  checkUser = async (infos) => {
    try {
      const { data } = await api.post("/login", infos);
      return data;
    } catch (error) {
      alert("Usuário não encontrado.");
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

  getDisponibleDoctor = async (info) => {
    try {
      const { data } = await api.post("pegarHorarioDisponivelMedico", info);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  agendarConsulta = async (info) => {
    try {
      const { data } = await api.post("agendarConsulta", info);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  registrarFuncionario = async (info) => {
    try {
      const { data } = await api.post("/registrarFuncionario", info);
      return data;
    } catch (error) {
      alert("Não foi possível cadastrar o funcionário.");
      console.log(error);
    }
  }

  listagemFuncionarios = async () => {
    try {
      const { data } = await api.post("/listagemFuncionarios");
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  listagemPacientes = async () => {
    try {
      const { data } = await api.post("/listagemPacientes");
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  listagemEnderecoAuxiliares = async (infos) => {
    try {
      const { data } = await api.post("/listagemEnderecoAuxiliares");
      return data;
    } catch (error) {
      alert("Não foi possível cadastrar o paciente.");
      console.log(error);
    }
  };

  listagemConsultas = async () => {
    try {
      const { data } = await api.post("/listagemConsultas");
      return data;
    } catch (error) {
      console.log(error);
    }
  };
}
