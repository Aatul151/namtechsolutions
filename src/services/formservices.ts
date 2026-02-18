import api from "./api";

type GetFormEntriesOptions = {
  page?: number;
  limit?: number;
};

export const getFormEntriesByFormName = async (
  formName: string,
  { page = 1, limit = 10 }: GetFormEntriesOptions = {},
) => {
  const params: any = { formName, page, limit };
  const res = await api.get(`/form-entries`, { params });
  return res?.data;
};
