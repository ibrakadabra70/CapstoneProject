import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    email: String,
    projectName: String,
    numberOfHomes: Number,
    electricHeating: Number,
    gasHeating: Number,
    squareFootagePerHome: Number,
    transformerSize: Number,
    transformerCost: Number,

});

var PostForm = mongoose.model('PostForm', postSchema);

export default PostForm;