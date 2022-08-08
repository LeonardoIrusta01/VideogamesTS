import Videogames from "../../../models/videogames.js";

const getVGById = async (req, res) => {
  let { id } = req.params;
  try {
    const vg = await Videogames.findById(id)
      .populate({ path: "genres", select: "name" })
      .populate({ path: "platforms", select: "name" })
      .populate({ path: "reviews", select: "review rating" });

    if (vg.name) {
      res.json(vg);
    } else {
      res.status(404).send("Videogame does not exist");
    }
  } catch (error) {
    res.status(404).send(error);
  }
};

export default getVGById;
