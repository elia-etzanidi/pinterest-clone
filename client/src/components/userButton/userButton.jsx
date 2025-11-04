import { useState } from 'react'
import './userButton.css'
import apiRequest from '../../utils/apiRequest'
import { useNavigate } from 'react-router-dom'
import useAuthStore from '../../utils/authStore'
import { Link } from 'react-router-dom'

const userButton = () => {

  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  //TEMPORARY USER 
  //const currentUser = true

  const { currentUser, removeCurrentUser } = useAuthStore();

  console.log(currentUser);

  const handleLogout = async () => {
    try {
        await apiRequest.post("/users/auth/logout", {});
        removeCurrentUser();
        navigate("/auth");
    }catch (error) {
        console.log(err);
    }
  };

  return currentUser ? (
    <div className="userButton">
        <img src={currentUser.img || "/general/noAvatar.png"} alt="" />
        <div onClick={() => setOpen((prev) => !prev)}>
            <img 
                src="/general/arrow.svg" 
                alt="" 
                className='arrow'
            />
        </div>
        {open && (
            <div className="userOptions">
                <Link to={`/profile/${currentUser.username}`} className="userOption">Profile</Link>
                <div className="userOption">Settings</div>
                <div className="userOption" onClick={handleLogout}>Logout</div>
            </div>
        )}
    </div>
  ) : (
    <Link to="/auth" className="loginLink">
        Login / Sign Up
    </Link>)
}    

export default userButton