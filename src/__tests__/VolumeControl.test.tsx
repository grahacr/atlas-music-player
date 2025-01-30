import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { expect, test, vi, afterEach } from "vitest";
import VolumeControls from "../components/VolumeControls";

afterEach(() => {
    cleanup();
});

test("default value of volume is 50", () => {
    const defaultVolume = 50;
    const setVolume = vi.fn();

    const { container } = render(<VolumeControls volume={defaultVolume} setVolume={setVolume} />);

    const slider = screen.getByRole("slider");
    expect(slider).toBeInTheDocument();
    expect(slider).toHaveValue("50");

    expect(container).toMatchSnapshot();
});

test("slider change updates volume and calls setVolume", () => {
    const setVolume = vi.fn();
    let initialVolume = 50;

    const mockSetVolume = (value: number) => {
        initialVolume = value;
        setVolume(value);
    };

    const { container, rerender } = render(<VolumeControls volume={initialVolume} setVolume={mockSetVolume} />);
    const sliders = screen.getAllByTestId("volume-slider");

    expect(sliders).toHaveLength(1);
    const slider = sliders[0];

    fireEvent.change(slider, { target: { value: 75 } });

    expect(setVolume).toHaveBeenCalledWith(75);
    rerender(<VolumeControls volume={initialVolume} setVolume={mockSetVolume} />);
    expect(slider).toHaveValue("75");
    expect(container).toMatchSnapshot();
});