import './topBar.css'
import UserButton from '../userButton/userButton'

const TopBar = () => {
  return (
    <div className='topBar'>
      {/* SEARCH BAR */}
      <div className="search">
        <img src="/general/search.svg" alt="" />
        <input type="text" placeholder='Search' />
      </div>
      {/* USER*/}
      <UserButton />
    </div>
  )
}

export default TopBar