import { Outlet, Link } from "react-router-dom";

function Profile(){

    return(
        <div>
            <h1>Profile</h1>
            <nav>
                <Link to ="details">Profile Details</Link>
                <Link to="settings">Profile Settings</Link>
            </nav>

            <outlet/>
        </div>
         
    )
   
}

export default Profile;