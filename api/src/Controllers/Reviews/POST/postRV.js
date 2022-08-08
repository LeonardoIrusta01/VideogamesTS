import Videogames from "../../../models/videogames.js";
import Reviews from "../../../models/reviews.js"

const postRV = async (req, res) => {
    const {id} = req.params
    const {review, rating} = req.body
    try {
        const rv = await Reviews.create({
            review,
            rating
        })
        console.log(rv._id);
        const vg = await Videogames.findById(id)
        await Videogames.findByIdAndUpdate(id, {reviews: [...vg.reviews, rv._id]})
        res.status(200).send("Review added succesfully")
    } catch (error) {
        res.send(error)
    }

}

export default postRV