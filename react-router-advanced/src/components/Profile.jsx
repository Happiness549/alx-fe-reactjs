import { Link, Routes, Route } from "react-router-dom";
import ProfileDetails from "./ProfileDetails.jsx";
import ProfileSettings from "./ProfileSettings.jsx";

function Profile() {
  return (
    <div>
      <h2>Profile Page</h2>

      
      <nav>
        <ul>
          <li>
            <Link to="details">Profile Details</Link>
          </li>
          <li>
            <Link to="settings">Profile Settings</Link>
          </li>
        </ul>
      </nav>

      
      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  );
}

export default Profile;

















