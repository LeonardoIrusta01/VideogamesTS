import Videogames from "../../../models/videogames.js";

const PostVG = async (req, res) => {
  try {
    const {
      name,
      released,
      date,
      image,
      rating,
      stores,
      genres,
      platforms,
      reviews
    } = req.body;

    await Videogames.create({
      name,
      released,
      date,
      image,
      rating,
      stores,
      genres,
      platforms,
      reviews
    });

    res.status(200).send("Videogames is created")
  } catch (error) {
    res.status(404).send(error.message);
  }
};

export default PostVG;
