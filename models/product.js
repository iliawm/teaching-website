import mongoose from "mongoose";

const { Schema } = mongoose;

const ProductSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, maxlength: 30 },
    image: { type: String },
    price: { type: Number, min: 0 },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    reviews:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Review'
    }],

    Category:[{type:String}]
})
export default mongoose.models.Product || mongoose.model('Product', ProductSchema)
