export interface IStorage {
  create<T>(resource: string, data: T): Promise<T>;
  read<T>(resource: string, id?: string): Promise<T | T[]>;
  update<T>(resource: string, id: string, data: Partial<T>): Promise<T>;
  remove(resource: string, id: string): Promise<boolean>;
}
