import { Router, Request, Response } from "express";

const router: Router = Router();

router.get('/Platforms', (req: Request , res: Response) => {
  res.send(" Hello Platforms")
})

export default router;
