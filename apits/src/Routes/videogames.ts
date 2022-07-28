import { Router, Request, Response } from "express";

const router: Router = Router();

router.get("/", (req: Request, res: Response) => {
  res.send(" Hello Videogames");
});

router.get("/");

router.post("/");

router.post("/VGAPI");

export default router;
