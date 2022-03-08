import { SimulateController } from "./SimulateController";
import { SimulateUseCase } from "./SimulateUseCase";

const simulateUseCase = new SimulateUseCase();
const simulateController = new SimulateController(simulateUseCase);

export { simulateController };
