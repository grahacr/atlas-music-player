// api calls to fetch playlist and individual songs
// stores custom type Song and extendable interface PlaylistType
// utilizing typeScript

export type Song = {
    id: string;
    title: string;
    artist: string;
    duration: number;
    cover: string;
    song: string;
};

export interface PlaylistType {
    id: string;
    title: string;
    artist: string;
    duration: number;
}

// base API url
const API_URL = "http://localhost:5173/api/v1";

// exported variable containing asynchronous function call using fetch to retrieve playlist data in returned promise
// returns playlist as PlaylistType array, utilizing declared interface above
export const fetchPlaylist = async(): Promise<PlaylistType[]> => {
    try {
        // await pauses function execution until fetch request completes
        const response = await fetch(`${API_URL}/playlist`);
        // checks if response is valid once fetch finishes executing
        if (!response.ok) {
            throw new Error('Failed to fetch playlist');
        }
        // response is ok, returns response after parsing into json format - array of playlist items
        // asynchronous function awaits completion before returning result
        return response.json();
    // if any error occurs during fetch or response, catch block triggers
    } catch (error) {
        console.error(error);
        // error returns empty array
        return [];
    }
};

// variable contains asynchronous function
// on parameter: id (type string)
// after promise is returned, either null or Song type is returned
export const fetchSong = async(id: string): Promise<Song | null> => {
    // await exeuction until fetch returns response, then store in variable
    try {
        const response = await fetch(`${API_URL}/songs/${id}`);
        if (!response.ok) {
            throw new Error('Failed to fetch song details');
        }
        // song variable utilizes await to hold json-parsed response which is Song type
        const song = await response.json();
        console.log('Fetched song:', song);
        // return song type object
        return song;

    } catch (error) {
        console.error(error);
        return null;
    }
}