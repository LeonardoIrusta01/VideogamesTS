import Reviews from "../../../models/reviews.js"

const getAllRV = async (req, res) => {
    try {
      let rv = await Reviews.find({})

      if (rv){
        res.status(200).json(rv)
      } else{
        res.status(200).send("Platforms is not available")
      }
  
    } catch (error) {
      res.send(error);
    }
  };
  
  export default getAllRV
  