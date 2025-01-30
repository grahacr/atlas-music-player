import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { test, beforeAll, afterEach, afterAll } from "vitest";
import MusicPlayer from "../components/MusicPlayer";
import { PlayerProvider } from "../components/PlayerContext.tsx";

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
    http.get("/api/v1/playlist", () => {
        return HttpResponse.json(mockPlaylist);
    }),
];

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("MusicPlayer fetches and renders playlist correctly", async () => {
    render(
        <PlayerProvider>
    <MusicPlayer />
    </PlayerProvider>
    );
    await waitFor(() => screen.getByText("Painted in Blue"));

    expect(screen.getByText("Painted in Blue")).toBeInTheDocument();
    expect(screen.getByText("Tidal Drift")).toBeInTheDocument();
    expect(screen.getByText("Fading Shadows")).toBeInTheDocument();
});

test("Verify current song is first song in playlist by default", async () => {
    render(<PlayerProvider>
        <MusicPlayer />
        </PlayerProvider>);

    await waitFor(() => screen.getByText("Painted in Blue"));

    expect(screen.getByText("Painted in Blue")).toBeInTheDocument();
});

test("Verify play/pause can be toggled", async () => {
    render(
    <PlayerProvider>
        <MusicPlayer />
    </PlayerProvider>);

    const titles = await screen.findAllByText("Painted in Blue");
    expect(titles).toHaveLength(1);

    const playPauseButton = screen.getByRole("button", { name: /play/i });

    fireEvent.click(playPauseButton);

    expect(playPauseButton).toHaveTextContent("Pause");

    fireEvent.click(playPauseButton);

    expect(playPauseButton).toHaveTextContent("Play");
})