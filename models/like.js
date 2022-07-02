const mongoose = require('mongoose');
import {Types} from 'mongoose'

const likeSchema = mongoose.Schema({
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
    }
})
var Like = mongoose.model('like', likeSchema);
module.exports = Like;