export const API_ROOT = 'https://www.reddit.com';

export const getSubreddits = async () => {
    const response = await fetch(`${API_ROOT}/subreddits.json`);
    const json = await response.json();
    console.log(json)
}