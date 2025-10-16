import './profilePage.css';
import Image from '../../components/image/Image';
import Gallery from '../../components/gallery/gallery';
import Collections from '../../components/collections/collections';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import apiRequest from "../../utils/apiRequest";
import { useParams } from "react-router";

const profilePage = () => {

  const [type, setType] = useState('saved');

  const {username} = useParams();

  const {isPending, error, data}= useQuery({
    queryKey: ["profile", username],
    queryFn: () => apiRequest.get(`/users/${username}`).then((res) => res.data),
  });

  if (isPending) return "Loading...";
  if (error) return "An error has occured: " + error.message;
  if (!data) return "User not found!";

  console.log(data)

  return (
    <div className='profilePage'>
      <Image 
        className="profileImg" 
        w={100}
        h={100}
        src={data.img || "/general/noAvatar.png"}
        alt="" 
      />
      <h1 className='profileName'>{data.displayName}</h1>
      <span className='profileUsername'>@{data.username}</span>
      <div className="followCount">10 followers • 20 following</div>
      <div className="profileInteractions">
        <Image src="/general/share.svg" alt="" />
        <div className="profileButtons">
          <button>Message</button>
        <button>Follow</button>
        </div>
        <Image src="/general/more.svg" alt="" />
      </div>
      <div className="profileOptions">
        <span onClick={() => setType("created")} className={type==="created" ? "active" : ""}>Created</span>
        <span onClick={() => setType("saved")} className={type==="saved" ? "active" : ""}>Saved</span>
      </div>
      {type === "created" ? <Gallery userId={data._id} /> : <Collections/>}
    </div>

  )
};

export default profilePage;