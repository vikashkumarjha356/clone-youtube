const GOOGLE_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
export const YOUTUBE_SEARCH_API = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=${GOOGLE_API_KEY}&q=`
export const YOUTUBE_VIDEOS_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=${GOOGLE_API_KEY}`
export const YOUTUBE_SEARCH_SUGGESTION_API = `http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=`
export const OFFSET_LIVE_CHAT = ``
export const YOUTUBE_COMMETS_API = `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet,replies&maxResults=10&key=${GOOGLE_API_KEY}&videoId=`
