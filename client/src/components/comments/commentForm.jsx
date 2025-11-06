import EmojiPicker from "emoji-picker-react"
import { useState } from "react"
import apiRequest from "../../utils/apiRequest"
import { useMutation, useQueryClient } from "@tanstack/react-query"

const addComemnt = async (comment) => {
    const res = await apiRequest.post("/comments", comment);
    return res.data;
}

const commentForm = ({id}) => {

    const [open, setOpen] = useState(false);
    const [desc, setDesc] = useState("");

    const handleEmojiClick = (emoji) => {
        setDesc((prev) => prev + emoji.emoji);
        setOpen(false);
    }

    const queryClient = useQueryClient();

    const mutation = useMutation({
    mutationFn: addComemnt,
    onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["comments", id] });
        setDesc("");
        setOpen(false);
    }
})

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        mutation.mutate({ 
            description: desc, 
            pin: id 
        });
    }

  return (
    <form className='commentForm' onSubmit={handleSubmit}>
        <input 
            type="text" 
            placeholder='Add a comment' 
            onChange={(e)=> setDesc(e.target.value)} 
            value={desc}
        />
        <div className="emoji">
            <div onClick={() => setOpen((prev => !prev))}>☺️</div>
                {open && (
                    <div className="emojiPicker">
                        <EmojiPicker onEmojiClick={handleEmojiClick}/>
                    </div>
                )}
        </div>
    </form>
  )
}

export default commentForm