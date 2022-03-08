import { Router } from "express";
import { userRoutes } from "./users.routes";
import { simulateRoutes } from "./simulate.routes";
import { gitRoutes } from "./github.routes ";
const router = Router();

router.use("/users", userRoutes);
router.use("/simulate", simulateRoutes);
router.use("/repositories", gitRoutes);

export { router };
