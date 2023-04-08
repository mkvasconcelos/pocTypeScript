import { Router } from "express";
import bookRoutes from "./bookRoute.js";

const routes = Router();

routes.use("/books", bookRoutes);

export default routes;
