const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const productSchema=Schema({
    productName:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    forMenOrWomen:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    size:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:false
    },
    price:{
        type:String,
        required:true
    },
    status:{
        type:Boolean,
        default:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
},
{timestamps:true}
);

const productModel=mongoose.model('product',productSchema);
module.exports=productModel