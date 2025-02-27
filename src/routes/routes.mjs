import { Router } from "express";
import { index } from "../controllers/FlagsController.mjs";

const router = Router();

router.get("/flags", index);



export default router;

