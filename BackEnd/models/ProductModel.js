import { Schema, model } from "mongoose"


let ProductSchema = new Schema({
    name:String,
    description:String,
    price:Number,
    image:String
})

export let ProductModel= model("clothes",ProductSchema)