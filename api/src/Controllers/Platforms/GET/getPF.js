import Videogames from "../../../models/videogames.js";
import Genres from "../../../models/genres.js";
import Platforms from "../../../models/platforms.js";

const getAllPF = async (req, res) => {
    try {
      let pf = await Platforms.find({})

      if (pf){
        res.status(200).json(pf)
      } else{
        res.status(200).send("Platforms is not available")
      }
  
    } catch (error) {
      res.send(error);
    }
  };
  
  export default getAllPF
  