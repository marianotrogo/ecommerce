import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        products: [
            {
                product: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'Product',
                    required: true,
                },
                quantity:{
                    type: Number,
                    required: true,
                    min: 1,
                },
            },
        ],
        totalAmount:{
            type: Number,
            required: true,
            min: 0,
        },
        status:{
            type: String,
            enum: ['credit_card', 'paypal', 'cash'],
            required: true,
        },
        shippingAddress:{
            type: String,
            required: true,
        },
    },
    {timestamps: true}
);

const Order = mongoose.model('Order', orderSchema);

export default Order;