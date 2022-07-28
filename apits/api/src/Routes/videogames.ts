import { Router, Request, Response } from "express";
import postApi from "../controllers/Videogames/POST/videogames";

const router: Router = Router();

router.get("/", (req: Request, res: Response) => {
  res.send(" Hello Videogames");
});

router.get("/");

router.post("/VG");

router.post("/VGAPI", async (req, res) => {
  try {
    await postApi();
    res.status(200).send("Videogames is created");
  } catch (error: any) {
    res.status(404).send(error.message);
  }
});

export default router;
