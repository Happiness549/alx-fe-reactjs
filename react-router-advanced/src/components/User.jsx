import { useParams } from "react-router-dom";

const User = () => {
    const {userId} = useParams();
    return <div> User profile for ID: {userId}</div>
};
export default User;