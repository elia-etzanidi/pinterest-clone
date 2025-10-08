import './postPage.css'
import Image from '../../components/image/Image'
import PostInteractions from '../../components/postInteractions/postInteractions'
import Comments from '../../components/comments/comments'
import { Link } from 'react-router'

const postPage = () => {
  return (
    <div className='postPage'>
      <img src="/general/arrow.svg" />
      <div className="postContainer">
        <div className="postImg">
          <Image src='/pins/pin1.jpeg' alt='' w={736}/>
        </div>
        <div className="postDetails">
          <PostInteractions />
          <Link to="/john" className='postUser'>
            <Image src="/general/noAvatar.png" />
            <span>John Doe</span>
          </Link>
          <Comments />
        </div>
      </div>
    </div>
  )
}

export default postPage