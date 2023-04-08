import { QueryResult } from "pg";
import connectionDb from "../config/database.js";
import { Book, BookDatabase, BookId } from "../protocols/index.js";

async function findByName(name: string): Promise<QueryResult<BookDatabase>> {
  return await connectionDb.query(`SELECT * FROM book WHERE name = $1;`, [
    name,
  ]);
}

async function findById(id: string): Promise<QueryResult<BookDatabase>> {
  return await connectionDb.query(`SELECT * FROM book WHERE id = $1;`, [id]);
}

async function create({ name }: Book): Promise<QueryResult<BookDatabase>> {
  return await connectionDb.query(
    `INSERT INTO book (name)
    VALUES ($1)`,
    [name]
  );
}

async function read(): Promise<QueryResult<BookDatabase>> {
  return await connectionDb.query(`SELECT * FROM book;`);
}

async function update({
  name,
  id,
}: BookDatabase): Promise<QueryResult<BookDatabase>> {
  return await connectionDb.query(`UPDATE book SET name = $1 WHERE id = $2;`, [
    name,
    id,
  ]);
}

async function del({ id }: BookId): Promise<QueryResult<BookDatabase>> {
  return await connectionDb.query(`DELETE FROM book WHERE id = $1;`, [id]);
}

export default {
  findByName,
  findById,
  create,
  read,
  update,
  del,
};
