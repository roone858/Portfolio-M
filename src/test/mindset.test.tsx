import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Mindset } from "@/components/portfolio/Mindset";

describe("Mindset section", () => {
  it("renders the three stages and their concepts", () => {
    render(<Mindset />);

    expect(
      screen.getByRole("heading", { name: /i build more than\s+just software/i }),
    ).toBeInTheDocument();
    expect(screen.getByText("Understand Before Building.")).toBeInTheDocument();
    expect(screen.getByText("Turn Ideas Into Reality.")).toBeInTheDocument();
    expect(screen.getByText("Build. Optimize. Ship.")).toBeInTheDocument();
    expect(screen.getByText("System Architecture")).toBeInTheDocument();
    expect(screen.getByText("Clean Architecture")).toBeInTheDocument();
    expect(screen.getByText("Continuous Improvement")).toBeInTheDocument();
  });

  it("moves the active stage when another stage is selected", () => {
    render(<Mindset />);

    const think = screen.getByRole("button", { name: /select the think stage/i });
    const engineer = screen.getByRole("button", { name: /select the engineer stage/i });

    expect(think).toHaveAttribute("aria-pressed", "true");
    expect(engineer).toHaveAttribute("aria-pressed", "false");

    fireEvent.click(engineer);

    expect(engineer).toHaveAttribute("aria-pressed", "true");
    expect(think).toHaveAttribute("aria-pressed", "false");
  });
});
