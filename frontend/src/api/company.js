import api from "./axios";

export const getCompanies = async () => {
  const res = await api.get("/api/company");
  return res.data;
};
