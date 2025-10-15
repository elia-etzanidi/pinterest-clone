import Pin from "../models/pin.model.js";

export const getPins = async (req,res) => {
    const pageNumber = Number(req.query.cursor) || 0;
    const search = req.query.search;
    const LIMIT = 30;

    // finding the search value in post title or tags
    const pins = await Pin.find( search ? {
        $or: [
            // regex finds word even when inside a string, option: case insensitive
            {title: { $regex:search, $options:"i" }},
            // using in because tags is an array
            {tags: { $in: [search] }}
        ]
    } : {} )
        .limit(LIMIT)
        .skip(pageNumber * LIMIT);

    const hasNextPage = pins.length === LIMIT;
        
    //200 = succesfull
    res
        .status(200)
        .json({ pins, nextCursor: hasNextPage ? pageNumber+1 : null });
}