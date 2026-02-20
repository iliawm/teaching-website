import mongoose from "mongoose"

const { Schema } = mongoose

const PurchaseSchema = new Schema({
    user: {type:Schema.Types.ObjectId, ref:`User`, required:true},
    products:{type:Schema.Types.ObjectId, ref:`Product`},
    purchaseDate: { type: Date, default: Date.now },
    price: { type: Number, required: true }

})
export default mongoose.models.Purchase || mongoose.model('Purchase', PurchaseSchema)