import './postPage.css';
import Image from '../../components/image/Image';
import PostInteractions from '../../components/postInteractions/postInteractions';
import Comments from '../../components/comments/comments';
import { Link , useParams } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import apiRequest from '../../utils/apiRequest';

const postPage = () => {

  const {id} = useParams();

  const {isPending, error, data}= useQuery({
    queryKey: ["pin", id],
    queryFn: ()=> apiRequest.get(`/pins/${id}`).then((res) => res.data),
  });

  if (isPending) return "Loading...";
  if (error) return "An error has occured: " + error.message;
  if (!data) return "Pin not found";
 

  return (
    <div className='postPage'>
      <img src="/general/arrow.svg" />
      <div className="postContainer">
        <div className="postImg">
          <Image src={data.media} alt='' w={736}/>
        </div>
        <div className="postDetails">
          <PostInteractions postId={id} />
          <Link to={`/${data.user.username}`} className='postUser'>
            <Image src={data.user.img || "/general/noAvatar.png"} />
            <span>{data.user.displayName}</span>
          </Link>
          <Comments id={data._id} />
        </div>
      </div>
    </div>
  )
};

export default postPage;