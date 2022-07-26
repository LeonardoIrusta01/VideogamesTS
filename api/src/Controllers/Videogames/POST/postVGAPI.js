import Videogames from "../../../models/videogames.js";
import axios from "axios";
const { APIKEY } = process.env;

const PostVGAPI = async (req, res) => {
  try {
    let data = await Videogames.count();

    if (data === 0) {
      let vgapi = await axios.get(
        `https://api.rawg.io/api/games?key=${APIKEY}`
      );

      await Promise.all(
        vgapi.data.results.map(async (e) => {
          await Videogames.create({
            name: e.name,
            released: e.released,
            image: e.background_image,
            rating: e.rating,
            reviewsapi: e.ratings,
            stores: e.stores,
            genresapi: e.genres,
            platformsapi: e.platforms,
          });
        })
      );
      res.status(200).send("Videogames is created");
    } else {
      res.status(200).send("Videogames is already created");
    }
  } catch (error) {
    res.status(404).send(error.message);
  }
};

export default PostVGAPI;
