import axios, { AxiosInstance } from 'axios';

const API_KEY = process.env.NEXT_PUBLIC_SUPABASE_KEY;
const API_URL = process.env.NEXT_PUBLIC_SUPABASE_URL + '/rest/v1';

const API: AxiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    common: {
      apikey: API_KEY,
      Authorization: `Bearer ${API_KEY}`,
    },
    post: {
      Prefer: 'return=representation',
    },
    patch: {
      Prefer: 'return=representation',
    },
  },
});

async function create<T>(resource: string, data: T): Promise<T> {
  const { data: createdData } = await API.post(resource, data);

  return createdData?.[0];
}

async function read<T>(resource: string, id?: string): Promise<T | T[]> {
  let url = resource;

  if (id) {
    url = `${resource}?id=eq.${id}`;
  }

  const { data } = await API.get(url);

  return data;
}

async function update<T>(
  resource: string,
  id: string,
  data: Partial<T>
): Promise<T> {
  const url = `${resource}?id=eq.${id}`;

  const { data: updatedData } = await API.patch(url, data);

  return updatedData?.[0];
}

async function remove(resource: string, id: string): Promise<boolean> {
  const url = `${resource}?id=eq.${id}`;

  await API.delete(url);

  return true;
}

export default { create, read, update, remove };
