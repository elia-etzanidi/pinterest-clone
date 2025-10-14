import {Schema} from "mongoose"
import mongoose from "mongoose"

const commentSchema = new Schema({ 
    description: {
        type:String,
        required: true
    },
    pin: {
        type:Schema.Types.ObjectID,
        ref: "Pin",
        required: true
    },    
    user: {
        type:Schema.Types.ObjectID,
        ref: "User",
        required: true
    },
    },
    {timestamps: true},
);

export default mongoose.model("Comment", commentSchema)