const Like = require("../../models/like");


export const getLikes = async (req, res) => {
    try {
        const likes = await Like.find();
        res.status(200).json(likes);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
