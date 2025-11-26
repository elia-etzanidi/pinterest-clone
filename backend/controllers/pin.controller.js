import Pin from "../models/pin.model.js";
import User from "../models/user.model.js";

export const getPins = async (req, res) => {
    const pageNumber = Number(req.query.cursor) || 0;
    const search = req.query.search;
    const userId = req.query.userId;
    const boardId = req.query.boardId;
    const LIMIT = 30;

    // finding the search value in post title or tags
    const pins = await Pin.find( 
        search 
            ? {
                $or: [
                    // regex finds word even when inside a string, option: case insensitive
                    { title: { $regex:search, $options: "i" }},
                    // using in because tags is an array
                    { tags: { $in: [search] }}
                ],
              } 
            : userId 
            ? { user:userId } 
            : boardId
            ? { board:boardId}
            : {}
    )
        .limit(LIMIT)
        .skip(pageNumber * LIMIT);

    const hasNextPage = pins.length === LIMIT;
        
    //200 = succesfull
    res
        .status(200)
        .json({ pins, nextCursor: hasNextPage ? pageNumber+1 : null });
}

export const getPin = async (req, res) => {
    const { id } = req.params;

    const pin = await Pin.findById(id).populate("user", "username img displayName");

    res.status(200).json(pin)
};

export const createPin = async (req, res) => {
    const {title, description, link, board, tags, textOptions, canvasOptions} = 
        req.body;

    const media = req.files.media;

    if(!title,!description,!media) {
        return res.status(400).json({ message: "All fields are required."});
    }

    const parsedTextOptions = JSON.parse(textOptions || "{}");
    const parsedCanvasOptions = JSON.parse(canvasOptions || "{}");

    console.log(title, description, link, board, tags)
    console.dir(media)
    console.dir(parsedTextOptions)
    console.dir(parsedCanvasOptions)
}