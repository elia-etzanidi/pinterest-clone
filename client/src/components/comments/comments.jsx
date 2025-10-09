import './comments.css'
import Image from '../image/Image'
import EmojiPicker from 'emoji-picker-react'
import { useState } from 'react'

const comments = () => {

const [open, setOpen] = useState(false);

  return (
    <div className='comments'>
      <div className="commentList">
        <span className='commentCount'>5 comments</span>
        
        <div className="comment">
          <Image src="/general/noAvatar.png" alt="" />
          <div className="commentContent">
            <span className='commentUsername'>John Doe</span>
            <p className='commentText'>
              This is such a great idea! I love how you've organized everything so well. Can't wait to try it out myself.
            </p>
            <span className='commentTime'>1h</span>
          </div>
        </div>
        
        <div className="comment">
          <Image src="/general/noAvatar.png" alt="" />
          <div className="commentContent">
            <span className='commentUsername'>John Doe</span>
            <p className='commentText'>
              This is such a great idea! I love how you've organized everything so well. Can't wait to try it out myself.
            </p>
            <span className='commentTime'>1h</span>
          </div>
        </div>
        
        <div className="comment">
          <Image src="/general/noAvatar.png" alt="" />
          <div className="commentContent">
            <span className='commentUsername'>John Doe</span>
            <p className='commentText'>
              This is such a great idea! I love how you've organized everything so well. Can't wait to try it out myself.
            </p>
            <span className='commentTime'>1h</span>
          </div>
        </div>
        
        <div className="comment">
          <Image src="/general/noAvatar.png" alt="" />
          <div className="commentContent">
            <span className='commentUsername'>John Doe</span>
            <p className='commentText'>
              This is such a great idea! I love how you've organized everything so well. Can't wait to try it out myself.
            </p>
            <span className='commentTime'>1h</span>
          </div>
        </div>
        
      </div>
      <form className='commentForm'>
          <input type="text" placeholder='Add a comment'/>
          <div className="emoji">
            <div onClick={() => setOpen((prev => !prev))}>☺️</div>
            {open && (
              <div className="emojiPicker">
              <EmojiPicker />
            </div>
            )}
          </div>
        </form>
    </div>
  )
}

export default comments