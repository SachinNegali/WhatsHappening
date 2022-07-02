const Comment = require("../../models/comment");


export const getComments = async (req, res) => {
    try {
        const comment = await Comment.find();
        res.status(200).json(comment);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
