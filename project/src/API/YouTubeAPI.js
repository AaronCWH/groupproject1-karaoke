import axios from "axios";

// const key = "AIzaSyDfAJ42a9ADTNUaiY7BsDCvLTog_kVgHso"; // generated credentials from Google API and Services
// const key = "AIzaSyBWydU1tn9HRWSyU0WS3iIWuJV2NxZ6pJI";
const key = 'AIzaSyBi7ZeNtEOLMq6rQZgRd3iQeEMIOhbpdd8'; //generated from Aunt
const ytAPI = axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet", // The part parameter specifies a comma-separated list of one or more search resource properties that the API response will include. Set the parameter value to snippet as dictated by documentation
        maxResults: 10, // maximum of 20 results
        key: key,
        type: "video", // ensure only videos are returned, instead of channels/playlists
        videoCategoryID: "10", // category for music
    },
    headers: {}
});

export default ytAPI;