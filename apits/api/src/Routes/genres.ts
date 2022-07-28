import { Router, Request, Response } from "express";

const router: Router = Router();

router.get('/Genres', (req: Request , res: Response) => {
  res.send(" Hello Genres")
})

export default router;
