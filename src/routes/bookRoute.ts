import { Router } from "express";
import bookController from "../controllers/bookController.js";
import { validateSchema } from "../middlewares/schemaValidationMiddleware.js";
import { bookSchema } from "../schemas/bookSchema.js";

const bookRoutes = Router();

bookRoutes.post("/", validateSchema(bookSchema), bookController.create);
bookRoutes.get("/", bookController.read);
bookRoutes.put("/:id", validateSchema(bookSchema), bookController.update);
bookRoutes.delete("/:id", bookController.del);

export default bookRoutes;
