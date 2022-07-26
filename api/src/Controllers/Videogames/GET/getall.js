import Videogames from "../../../models/videogames.js";

const getAll = async (req, res) => {
  try {
    let vg = await Videogames.find({})
      .populate({ path: "genres", select: "name" })
      .populate({ path: "platforms", select: "name" })
      .populate({ path: "reviews", select: "review rating" })
    
    

    res.send(vg)
  } catch (error) {
    res.send(error);
  }
};

export default getAll;
