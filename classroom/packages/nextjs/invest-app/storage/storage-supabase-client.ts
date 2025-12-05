import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { IStorage } from './storage.interface';

const API_KEY = process.env.NEXT_PUBLIC_SUPABASE_KEY;
const API_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;

export const supabase: SupabaseClient = createClient(
  API_URL || '',
  API_KEY || ''
);

async function create<T>(resource: string, data: T): Promise<T> {
  const { data: createdData, error } = await supabase
    .from(resource)
    .insert(data as T)
    .select('*');

  if (error) {
    throw error;
  }

  return createdData?.[0];
}

async function read<T>(resource: string, id?: string): Promise<T | T[]> {
  const query = supabase.from(resource).select('*');

  const { data, error } = id ? await query.eq('id', id) : await query;

  if (error) {
    throw error;
  }

  return data as T | T[];
}

async function update<T>(
  resource: string,
  id: string,
  data: Partial<T>
): Promise<T> {
  const { data: updatedData, error } = await supabase
    .from(resource)
    .update(data as any)
    .eq('id', id)
    .select('*');

  if (error) {
    throw error;
  }

  return updatedData?.[0];
}

async function remove(resource: string, id: string): Promise<boolean> {
  const { error } = await supabase.from(resource).delete().eq('id', id);

  if (error) {
    throw error;
  }

  return true;
}

const StorageSupabaseClient: IStorage = { create, read, update, remove };

export default StorageSupabaseClient;
