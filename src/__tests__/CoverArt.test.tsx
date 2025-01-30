import { render, cleanup } from "@testing-library/react";
import { expect, test, afterEach } from "vitest";
import CoverArt from "../components/CoverArt.tsx";


afterEach(() => {
    cleanup();
});


test("Cover Art image renders with valid cover image", () => {
    const { container } = render(<CoverArt cover="https://utfs.io/f/E9fJnaKtTy1bV09oPkISuh6fWpNsTRlAk1Qj9yqnVzCi32BL" />);
    expect(container).toMatchSnapshot();
});

test("Cover art renders with a different cover image", () => {
    const { container } = render(<CoverArt cover="https://utfs.io/f/E9fJnaKtTy1bdFkaBz4G9CJywD7oVn1hRLQAuEbf8xqkt34N" />);
    expect(container).toMatchSnapshot();
});