import './topBar.css';
import UserButton from '../userButton/userButton';
import Image from "../image/image";
import { useNavigate } from "react-router";

const TopBar = () => {

  const navigate = useNavigate()
  const handleSubmit = (e) => {
      //prevent refresh of the page
      e.preventDefault();
      //0 because we have one input
      navigate(`/search?search=${e.target[0].value}`);
    };

  return (
    <div className='topBar'>
      {/* SEARCH BAR */}
      <form onSubmit={handleSubmit} className="search">
        <Image src="/general/search.svg" alt="" />
        <input type="text" placeholder='Search' />
      </form>
      {/* USER*/}
      <UserButton />
    </div>
)};

export default TopBar;