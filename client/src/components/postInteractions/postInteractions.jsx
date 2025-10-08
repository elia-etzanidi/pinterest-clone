import './postInteractions.css'
import Image from '../image/Image'

const postInteractions = () => {
  return (
    <div className='postInteractions'>
      <div className="interactionIcons">
        <Image src="/general/react.svg" />
        273
        <Image src="/general/share.svg" />
        <Image src="/general/more.svg" />
      </div>
      <button>Save</button>
    </div>
  )
}

export default postInteractions