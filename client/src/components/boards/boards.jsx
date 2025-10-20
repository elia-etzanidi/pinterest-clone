import './boards.css'
import Image from '../image/Image'
import { useQuery } from '@tanstack/react-query';
import apiRequest from '../../utils/apiRequest';
import {format} from 'timeago.js';

const boards = ({userId}) => {

    const {isPending, error, data}= useQuery({
        queryKey: ["boards", userId],
        queryFn: () => apiRequest.get(`/boards/${userId}`).then((res) => res.data),
    });

    if (isPending) return "Loading...";
    if (error) return "An error has occured: " + error.message;

    console.log(data)

  return (
    <div className='collections'>
        {data?.map((board) => (
            <div className="collection" key={board._id}>
                <Image src={board.firstPin.media} alt="" />
                <div className="collectionInfo">
                    <h1>{board.title}</h1>
                    <span>{board.pinCount} Pins • {format(board.createdAt)}</span>
                </div>
            </div>
        ))}
    </div>
  )
}

export default boards