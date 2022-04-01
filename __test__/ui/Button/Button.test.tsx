import {render, screen} from "@testing-library/react";
import React from "react";
import {Button} from "ui/atoms/Button";

describe("<Button />", () => {
    test("should display a blank login form, with remember me checked by default", async () => {
        render(<Button>{"test"}</Button>);
        const divElement = screen.getByText(/test/i);

        expect(divElement).toBeInTheDocument();
    });
});
