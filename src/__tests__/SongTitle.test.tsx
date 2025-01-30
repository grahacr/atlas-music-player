import "@testing-library/jest-dom";
import { render, screen, cleanup } from "@testing-library/react";
import { expect, test, afterEach } from "vitest";
import SongTitle from "../components/SongTitle.tsx";

afterEach(() => {
    cleanup();
});


test("renders song title and artist correctly", () => {
    const { container } = render(<SongTitle title="Painted in Blue" artist="Soul Canvas"/>);

    expect(screen.getByText("Painted in Blue")).toBeInTheDocument();
    expect(screen.getByText("Soul Canvas")).toBeInTheDocument();

    expect(container).toMatchSnapshot();
});
