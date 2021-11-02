import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    projectName: String,
    numberOfHomes: Number,
    electricHeating: Number,
    gasHeating: Number,
    squareFootagePerHome: Number,
    numberOfEV: Number,

});

var PostForm = mongoose.model('PostForm', postSchema);

export default PostForm;