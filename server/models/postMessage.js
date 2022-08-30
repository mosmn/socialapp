// utilize possiblties of mongoose
import mongoose from "mongoose";

//create a mongoose schema
const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    }
});

//turn schema into a model
var PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;