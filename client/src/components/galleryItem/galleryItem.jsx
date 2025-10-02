import './galleryItem.css'
import { Link } from 'react-router'
import Image from '../image/image'

const galleryItem = ({ item }) => {

  const optimizedHeight = (372 * item.height) / item.width

  return (
    <div className='galleryItem' style={{gridRowEnd: `span ${Math.ceil(item.height / 100)}`}}>
        <Image src={item.media} alt="" w={372} h={optimizedHeight} />
        <Link to={`/pin/${item.id}`} className='overlay' />
        <button className='saveButton'>Save</button>
        <div className='overlayIcons'>
          <button>
            <img src="/general/share.svg" alt="" />
          </button>
          <button>
            <img src="/general/more.svg" alt="" />
          </button>
        </div>
    </div>
  )
}

export default galleryItem