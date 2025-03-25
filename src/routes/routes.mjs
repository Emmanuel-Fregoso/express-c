import { Router } from "express";
import { destroy, index, show, store, update } from "../controllers/FlagsController.mjs";


const router = Router();

router.get("/flags", index);
router.get("/flags/:id", show);
router.post("/flags", store);
router.post("/flags/:id", update);
router.delete("/flags/:id", destroy);



export default router;

