import Videogames from "../../../models/videogames";
import { Mapdata } from "../DTO/videogames.dto";
import axios from "axios";

const postApi: () => void = async () => {
  try {
    let data : number = await Videogames.count();

    if (data === 0) {
      let vgapi : any = await axios.get(
        `https://api.rawg.io/api/games?key=e03d5f0e367a4f0aa08c727a55a7eac2`
      );

      await Promise.all(
        vgapi.data.results.map(async (e: Mapdata) => {
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
    } else {
      return "Videogames is already created";
    }
  } catch (error: any) {
    return error;
  }
};

export default postApi;
