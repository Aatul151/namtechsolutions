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

export const fetchFormDefination = async (formName: string) => {
  const res: any = await api.get(`/form-definitions/name/${formName}`);
  if (res?.success) {
    return res?.data;
  };
  return null;
}

export const submitFormEntry = async (formName: string, payload: any) => {
  const payloadWithFormName = { formName, payload }
  const res = await api.post(`/form-entries`, payloadWithFormName);
  return res;
}

