const mongoose = require('mongoose');
const commentSchema = mongoose.Schema({
    postId: {
        type: Types.ObjectId,
        required: true,
    },
    userId: {
        type: Types.ObjectId,
        required: true,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
    updatedAt: {
        type: Date,
        default: new Date(),
    },
})
var Comment = mongoose.model('comment', commentSchema);
module.exports = Comment;