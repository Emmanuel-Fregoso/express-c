import { Router } from "express";
import { index, store } from "../controllers/FlagsController.mjs";

const router = Router();

router.get("/flags", index);
router.post("/flags", store);



export default router;

