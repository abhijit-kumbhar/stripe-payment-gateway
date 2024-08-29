require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const stripe = require("stripe")("sk_test_51PpoqS2LLGtvsxfAU2JtiAyAnxheH1eGmG0mVdSHiBarsH2l8wkaXz0rJBo8FSdj3fXCj5Z9lLD7mb0q0REECAUv00FxJQ9ssZ");

app.use(express.json());
app.use(cors({
    origin: "https://stripe-payment-gateway-self.vercel.app",
    methods:["POST", "GET", "PUT", "DELETE"],
    credentials: true
}));

// checkout api
app.post("/api/create-checkout-session",async(req,res)=>{
    const {products} = req.body;


    const lineItems = products.map((product)=>({
        price_data:{
            currency:"inr",
            product_data:{
                name:product.dish,
                images:[product.imgdata]
            },
            unit_amount:product.price * 100,
        },
        quantity:product.qnty
    }));

    const session = await stripe.checkout.sessions.create({
        payment_method_types:["card"],
        line_items:lineItems,
        mode:"payment",
        success_url:"https://stripe-payment-gateway-self.vercel.app/success",
        cancel_url:"https://stripe-payment-gateway-self.vercel.app/cancel",
    });

    res.json({id:session.id});
 
})

const port = process.env.PORT || 7000;

app.listen(port,()=>{
    console.log(`server is started port`)
})