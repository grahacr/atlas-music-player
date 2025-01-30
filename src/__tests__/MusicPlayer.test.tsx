import { setupServer } from "msw/node";
import { http, HttpResponse} from "msw";
import { render, screen, waitFor } from "@testing-library/react";
import MusicPlayer from "../components/MusicPlayer";


const mockPlaylist = [
    {
        "id": "cm3ixp4sy0thg0cmtdzukgg56",
        "title": "Painted in Blue",
        "artist": "Soul Canvas",
        "genre": "Neo-Soul",
        "duration": 194
    },
    {
        "id": "soammx6oibpan244my4toqke",
        "title": "Tidal Drift",
        "artist": "Echoes of the Sea",
        "genre": "Ambient",
        "duration": 191
    },
    {
        "id": "a6pkp78whsyqdvpb5dxn64ss",
        "title": "Fading Shadows",
        "artist": "The Emberlight",
        "genre": "Alternative Rock",
        "duration": 194
    }
];

export const handlers = [
    http.get('/api/v1/playlist', () => {
        return HttpResponse.json(mockPlaylist);
    }),
];

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("MusicPlayer fetches and renders playlist correctly", async () => {
    render(<MusicPlayer />);
    await waitFor(() => screen.getByText("Painted in Blue"));

    expect(screen.getByText("Painted in Blue")).toBeInTheDocument();
    expect(screen.getByText("Tidal Drift")).toBeInTheDocument();
    expect(screen.getByText("Fading Shadows")).toBeInTheDocument();
});