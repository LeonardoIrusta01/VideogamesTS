import Videogames from "../../../models/videogames.js";
import Genres from "../../../models/genres.js";
import Platforms from "../../../models/platforms.js";
import axios from "axios";
const { APIKEY } = process.env;

const postGR = async (req, res) => {
  try {
    let data = await Genres.count();

    if (data === 0) {
      let gr = await axios.get(`https://api.rawg.io/api/genres?key=${APIKEY}`);

      await Promise.all(
        gr.data.results.map(async (element) => {
          await Genres.create({
            name: element.name,
          });
        })
      );
      res.status(200).send("Genres created");
    } else {
      res.status(200).send("Genres is already created");
    }
  } catch (error) {
    res.status(404).send(error.message);
  }
};

export default postGR;
