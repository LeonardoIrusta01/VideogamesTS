import { Router } from "express";
import getAllPF from "../Controllers/Platforms/GET/getPF.js";
import postPF from "../Controllers/Platforms/POST/postPF.js";
const router = Router();

router.get("/", getAllPF);

router.post("/", postPF);

export default router;
