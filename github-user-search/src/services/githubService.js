import axios from 'axios';

export const FetchUserData = async (username) => {
    try{
        const response = await 
        axios .get(`https://api.github.com/users/${username}`);
        return response.data;
    } catch (error){
        return null;
    }
}