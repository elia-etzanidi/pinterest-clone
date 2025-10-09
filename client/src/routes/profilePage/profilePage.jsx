import './profilePage.css'
import Image from '../../components/image/Image'
import { useState } from 'react'

const profilePage = () => {

const [type, setType] = useState('saved')

  return (
    <div className='profilePage'>
      <Image 
        className="profileImg" 
        w={100}
        h={100}
        src="/general/noAvatar.png" 
        alt="" 
      />
      <h1 className='profileName'>John Doe</h1>
      <span className='profileUsername'>@jonhdoe</span>
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
    </div>

  )
}

export default profilePage