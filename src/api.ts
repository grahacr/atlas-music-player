// api calls

export type Song = {
    id: string;
    title: string;
    artist: string;
    duration: number;
    cover: string;
    song: string;
};

export interface Playlist {
    id: string;
    title: string;
    artist: string;
    duration: number;
}

const API_URL = "http://localhost:5173/api/v1";

export const fetchPlaylist = async(): Promise<Playlist[]> => {
    try {
        const response = await fetch(`${API_URL}/playlist`);
        if (!response.ok) {
            throw new Error('Failed to fetch playlist');
        }
        return response.json();
    } catch (error) {
        console.error(error);
        return [];
    }
};

export const fetchSong = async(id: string): Promise<Song | null> => {

    try {
        const response = await fetch(`${API_URL}/songs/${id}`);
        if (!response.ok) {
            throw new Error('Failed to fetch song details');
        }
        const song = await response.json();
        console.log('Fetched song:', song);
        return song;

    } catch (error) {
        console.error(error);
        return null;
    }
}