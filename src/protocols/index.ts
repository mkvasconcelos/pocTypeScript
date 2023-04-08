export type BookDatabase = {
  id: number;
  name: string;
};

export type Book = Omit<BookDatabase, "id">;

export type BookId = Omit<BookDatabase, "name">;
