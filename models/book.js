const mongoose =  require('mongoose')
const BookSchema = new mongoose.Schema({
    author:{
        type: String,
        required:[true, 'Please provide a author'],
        maxlength: 50
    },
    title:{
        type:String,
        required:[true, 'Please provide a title'],
        maxlength: 100
    },
    genre:{
        type: String,
        enum:['fiction','poetry', 'non-fiction', 'mystery', 'adventure', 'thriller', 'romance', 'self-help', 'horror'],
    },
    status:{
        type:String,
        enum:['finished', 'pending', 'no longer interested'],
        default: 'pending',
    },
    createdBy:{
        type:mongoose.Types.ObjectId,
        ref:'User',
        required:[true, 'Please provide user'],
    },

}, 
{timestamps:true })

module.exports = mongoose.model('Book', BookSchema)