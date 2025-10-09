import './leftBar.css'
import { Link } from 'react-router'
import Image from '../image/Image'

const LeftBar = () => {
  return (
    <div className='leftBar'>
      <div className="menuIcons">
        <Link to="/" className='menuIcon'>
          <Image src="/general/logo.png" alt="" className='logo'/>
        </Link>
        <Link to="/" className='menuIcon'>
          <Image src="/general/home.svg" alt="" />
        </Link>
        <Link to="/create" className='menuIcon'>
          <Image src="/general/create.svg" alt="" />
        </Link>
        <Link to="/" className='menuIcon'>
          <Image src="/general/updates.svg" alt="" />
        </Link>
        <Link to="/" className='menuIcon'>
          <Image src="/general/messages.svg" alt="" />
        </Link>
      </div>
      <Link to="/" className='menuIcon'>
          <Image src="/general/messages.svg" alt="" />
        </Link>
    </div>
  )
}

export default LeftBar