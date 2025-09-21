import axios from "axios";

// Base URLs
const SEARCH_URL = "https://api.github.com/search/users";
const USER_URL = "https://api.github.com/search/users?q";

/**
 * Fetch GitHub users based on search criteria
 * @param {Object} criteria - { username, location, minRepos }
 */
export const fetchUserData = async ({ username, location, minRepos }) => {
  try {
    let query = "";

    if (username) query += `${username}`;
    if (location) query += `+location:${location}`;
    if (minRepos) query += `+repos:>${minRepos}`;

    const response = await axios.get(`${SEARCH_URL}?q=${query}`);
    return response.data.items; // array of users
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};

/**
 * Fetch full user details
 * @param {string} username - GitHub login
 */
export const fetchUserDetails = async (username) => {
  try {
    const response = await axios.get(`${USER_URL}/${username}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user details:", error);
    throw error;
  }
};
    

