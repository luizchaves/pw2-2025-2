import { IStorage } from './storage.interface';

const API_TOKEN = process.env.NEXT_PUBLIC_SUPABASE_KEY;
const API_URL = process.env.NEXT_PUBLIC_SUPABASE_URL + '/rest/v1';

async function create<T>(resource: string, data: T): Promise<T> {
  const url = `${API_URL}/${resource}`;

  const options: RequestInit = {
    headers: {
      apikey: API_TOKEN || '',
      Authorization: `Bearer ${API_TOKEN}`,
      Prefer: 'return=representation',
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(data),
  };

  const res = await fetch(url, options);

  const createdData = await res.json();

  return createdData?.[0];
}

async function read<T>(resource: string, id?: string): Promise<T | T[]> {
  const url = id
    ? `${API_URL}/${resource}?id=eq.${id}`
    : `${API_URL}/${resource}`;

  const options: RequestInit = {
    headers: {
      apikey: API_TOKEN || '',
      Authorization: `Bearer ${API_TOKEN}`,
    },
    method: 'GET',
  };

  const res = await fetch(url, options);

  return await res.json();
}

async function update<T>(
  resource: string,
  id: string,
  data: Partial<T>
): Promise<T> {
  const url = `${API_URL}/${resource}?id=eq.${id}`;

  const options: RequestInit = {
    headers: {
      apikey: API_TOKEN || '',
      Authorization: `Bearer ${API_TOKEN}`,
      Prefer: 'return=representation',
      'Content-Type': 'application/json',
    },
    method: 'PATCH',
    body: JSON.stringify(data),
  };

  const res = await fetch(url, options);

  const updatedData = await res.json();

  return updatedData?.[0];
}

async function remove(resource: string, id: string): Promise<boolean> {
  const url = `${API_URL}/${resource}?id=eq.${id}`;

  const options: RequestInit = {
    headers: {
      apikey: API_TOKEN || '',
      Authorization: `Bearer ${API_TOKEN}`,
    },
    method: 'DELETE',
  };

  const res = await fetch(url, options);

  return res.ok;
}

const StorageFetch: IStorage = { create, read, update, remove };

export default StorageFetch;
