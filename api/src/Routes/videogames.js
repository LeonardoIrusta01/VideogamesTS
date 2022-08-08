import { Router } from "express";
import getAll from "../Controllers/Videogames/GET/getall.js";
import getVGById from "../Controllers/Videogames/GET/getVGById.js";
import PostVG from "../Controllers/Videogames/POST/postVG.js";
import PostVGAPI from "../Controllers/Videogames/POST/postVGAPI.js";
const router = Router();

/**
 * @swagger
 * components:
 *  schemas:
 *      Videogames:
 *          type: object
 *          properties:
 *              name:
 *                  type: string
 *                  description: el nombre de un videogames
 *              released:
 *                  type: string
 *                  description: fecha de lanzamiento
 *          requered:
 *              - name
 *              - released
 *          example:
 *              name: GTA V
 *              released: 26/23/12
 */

router.get("/", getAll);

/**
 * @swagger
 * /videogames:
 *  post:
 *      summary: creación de un video juego
 *      tags: [Videogames]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: "#/components/schemas/Videogames"
 *      responses:
 *          200:
 *              description: nuevo video juego creado
 */

router.get("/:id", getVGById);

router.post("/", PostVG);

router.post("/VGAPI", PostVGAPI);

export default router;
