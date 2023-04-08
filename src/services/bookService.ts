import errors from "../errors/index.js";
import bookRepository from "../repositories/bookRepository.js";

async function create({ name }) {
  const {
    rows: [book],
  } = await bookRepository.findByName(name);
  if (book) throw errors.conflictError("Book already exists");
  await bookRepository.create({ name });
}

async function read() {
  return await bookRepository.read();
}

async function update({ name, id }) {
  const {
    rows: [book],
  } = await bookRepository.findById(id);
  if (!book) {
    throw errors.notFoundError();
  }
  return await bookRepository.update({ name, id });
}

async function del({ id }) {
  const {
    rows: [book],
  } = await bookRepository.findById(id);
  if (!book) {
    throw errors.notFoundError();
  }
  await bookRepository.del({ id });
}

export default {
  create,
  update,
  read,
  del,
};
