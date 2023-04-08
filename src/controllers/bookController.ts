import { NextFunction, Request, Response } from "express";
import bookService from "../services/bookService.js";

async function create(req: Request, res: Response, next: NextFunction) {
  const { name } = res.locals.body;
  try {
    await bookService.create({ name });
    return res.sendStatus(201);
  } catch (err) {
    next(err);
  }
}

async function read(req: Request, res: Response, next: NextFunction) {
  try {
    const result = await bookService.read();
    return res.status(200).send(result.rows);
  } catch (err) {
    next(err);
  }
}

async function update(req: Request, res: Response, next: NextFunction) {
  const { name } = res.locals.body;
  const { id } = req.params;
  try {
    await bookService.update({ name, id: Number(id) });
    return res.sendStatus(200);
  } catch (err) {
    console.log(err);
    next(err);
  }
}

async function del(req: Request, res: Response, next: NextFunction) {
  const { id } = req.params;
  try {
    await bookService.del({ id: Number(id) });
    return res.sendStatus(200);
  } catch (err) {
    next(err);
  }
}

export default {
  create,
  read,
  update,
  del,
};
