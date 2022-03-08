import { Router } from "express";
import { gitRoutes } from "./github.routes ";
const router = Router();

router.use("/repositories", gitRoutes);

export { router };
