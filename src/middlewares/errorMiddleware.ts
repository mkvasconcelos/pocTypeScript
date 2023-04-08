import httpStatus from "http-status";
import { Request, Response, NextFunction } from "express";

export function handleApplicationErrors(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (err.name === "ConflictError") {
    return res.status(httpStatus.CONFLICT).send({ message: err.message });
  }

  if (err.name === "NotFoundError") {
    return res.status(httpStatus.NOT_FOUND).send({
      message: err.message,
    });
  }

  return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
    error: "InternalServerError",
    message: "Internal Server Error",
  });
}
