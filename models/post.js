const mongoose = require('mongoose');
const postSchema = mongoose.Schema({
    userId:{
        type: Types.ObjectId,
        required: true,
        unique: true,
    },
    image:{
        type:String,
    },
    text:{
        type:String,
        required:true
    },
    location: {
        type: { 
            type: String, 
            enum: ['Point'] 
        },
        coordinates: { 
            type: [Number] 
        }
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
var Post = mongoose.model('post', postSchema);
module.exports = Post;