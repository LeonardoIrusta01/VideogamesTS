import Videogames from "../../../models/videogames.js";
import Genres from "../../../models/genres.js";
import Platforms from "../../../models/platforms.js";

const getAllGR = async (req, res) => {
    try {
      let gr = await Genres.find({})

      if (gr){
        res.status(200).json(gr)
      } else{
        res.status(200).send("Genres is not available")
      }
  
    } catch (error) {
      res.send(error);
    }
  };
  
  export default getAllGR
  