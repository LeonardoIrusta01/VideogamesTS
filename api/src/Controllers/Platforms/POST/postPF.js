import Videogames from "../../../models/videogames.js";
import Genres from "../../../models/genres.js";
import Platforms from "../../../models/platforms.js";
import axios from "axios";
const { APIKEY } = process.env;

const postPF = async (req, res) => {
  try {
    let data = await Platforms.count();

    if (data === 0) {
      let pf = await axios.get(`https://api.rawg.io/api/platforms?key=${APIKEY}`);

      await Promise.all(
        pf.data.results.map(async (element) => {
          await Platforms.create({
            name: element.name,
            image: element.image,
            requirements_en: element.requirements_en
          });
        })
      );
      res.status(200).send("Platforms created");
    } else {
      res.status(200).send("Platforms is already created");
    }
  } catch (error) {
    res.status(404).send(error.message);
  }
};

export default postPF;
