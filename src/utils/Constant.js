
const API_KEY = "AIzaSyBFMOr7SJL_o76mCS1JkSZHSvCnIwfSci4";

// youtube#videoListResponse → { items: [ { id, snippet, statistics, contentDetails }, ... ] }
export const YOUTUBE_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&maxResults=24&key=" +
  API_KEY;
