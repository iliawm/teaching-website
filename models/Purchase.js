import mongoose from "mongoose"

const { schema} = mongoose

const PurchaseSchema = new schema({
    user: {type:schema.Types.ObjectId, ref:`User`, required:true},
    products:{type:schema.Types.ObjectId, ref:`Product`},
    purchaseDate: { type: Date, default: Date.now },
    price: { type: Number, required: true }

})
export default mongoose.models.Purchase || mongoose.model('Purchase', PurchaseSchema)