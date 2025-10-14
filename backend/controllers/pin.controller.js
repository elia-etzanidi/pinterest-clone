import Pin from "../models/pin.model.js";

export const getPins = async (req,res)=>{
    const pins = await Pin.find();

    //200 = succesfull
    res.status(200).json(pins);
}