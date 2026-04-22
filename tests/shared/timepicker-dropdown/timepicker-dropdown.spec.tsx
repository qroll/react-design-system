import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import type { ComponentProps } from "react";
import { TimepickerDropdown } from "src/shared/timepicker-dropdown/timepicker-dropdown";

describe("TimepickerDropdown", () => {
    const ID = "timepicker-dropdown";

    const renderDropdown = (
        props?: Partial<ComponentProps<typeof TimepickerDropdown>>
    ) => {
        return render(
            <TimepickerDropdown
                id={ID}
                show
                format="12hr"
                value="03:00AM"
                onChange={jest.fn()}
                onCancel={jest.fn()}
                {...props}
            />
        );
    };

    it("should focus hour input when shown", async () => {
        renderDropdown();

        await waitFor(() => {
            expect(screen.getByTestId(`${ID}-hour-input`)).toHaveFocus();
        });
    });

    it("should call onChange with selected 24hr value when Done is clicked", async () => {
        const user = userEvent.setup();
        const onChange = jest.fn();

        renderDropdown({ format: "24hr", onChange });

        const hourInput = screen.getByTestId(`${ID}-hour-input`);
        const minuteInput = screen.getByTestId(`${ID}-minute-input`);

        await user.clear(hourInput);
        await user.type(hourInput, "13");
        await user.clear(minuteInput);
        await user.type(minuteInput, "05");

        await user.click(screen.getByTestId(`${ID}-confirm-button`));

        expect(onChange).toHaveBeenCalledTimes(1);
        expect(onChange).toHaveBeenCalledWith("13:05");
    });

    it("should disable Done when hour or minute is empty", async () => {
        const user = userEvent.setup();

        renderDropdown({ value: undefined });

        const confirmBtn = screen.getByTestId(`${ID}-confirm-button`);
        const hourInput = screen.getByTestId(`${ID}-hour-input`);
        const minuteInput = screen.getByTestId(`${ID}-minute-input`);

        expect(confirmBtn).toBeDisabled();

        await user.type(hourInput, "9");
        expect(confirmBtn).toBeDisabled();

        await user.type(minuteInput, "00");
        expect(confirmBtn).not.toBeDisabled();
    });

    it("should keep hour value on blur when hour is valid", async () => {
        const user = userEvent.setup();
        const onChange = jest.fn();

        renderDropdown({ value: "03:00AM", onChange });

        const hourInput = screen.getByTestId(`${ID}-hour-input`);

        await user.clear(hourInput);
        await user.type(hourInput, "7");
        await user.tab();
        await user.click(screen.getByTestId(`${ID}-confirm-button`));

        expect(onChange).toHaveBeenCalledWith("07:00AM");
    });

    it("should reset hour to initial value when blurred hour is out of range", async () => {
        const user = userEvent.setup();

        renderDropdown({ value: "03:00AM" });

        const hourInput = screen.getByTestId(`${ID}-hour-input`);

        await user.clear(hourInput);
        await user.type(hourInput, "99");
        await user.tab();

        expect(hourInput).toHaveValue(3);
    });

    it("should keep minute value on blur when minute is valid", async () => {
        const user = userEvent.setup();
        const onChange = jest.fn();

        renderDropdown({ value: "03:00AM", onChange });

        const minuteInput = screen.getByTestId(`${ID}-minute-input`);

        await user.clear(minuteInput);
        await user.type(minuteInput, "7");
        await user.tab();
        await user.click(screen.getByTestId(`${ID}-confirm-button`));

        expect(onChange).toHaveBeenCalledWith("03:07AM");
    });

    it("should reset minute to initial value when blurred minute is out of range", async () => {
        const user = userEvent.setup();

        renderDropdown({ value: "03:15AM" });

        const minuteInput = screen.getByTestId(`${ID}-minute-input`);

        await user.clear(minuteInput);
        await user.type(minuteInput, "99");
        await user.tab();

        expect(minuteInput).toHaveValue(15);
    });

    it("should update hour and minute with increment/decrement controls", async () => {
        const user = userEvent.setup();

        renderDropdown({ value: "12:00AM" });

        const hourInput = screen.getByTestId(`${ID}-hour-input`);
        const minuteInput = screen.getByTestId(`${ID}-minute-input`);

        await user.click(screen.getByTestId(`${ID}-hour-increment-button`));
        await user.click(screen.getByTestId(`${ID}-minute-decrement-button`));

        expect(hourInput).toHaveValue(1);
        expect(minuteInput).toHaveValue(55);
    });

    it("should call onCancel when Cancel is clicked", async () => {
        const user = userEvent.setup();
        const onCancel = jest.fn();

        renderDropdown({ onCancel });

        await user.click(screen.getByTestId(`${ID}-cancel-button`));

        expect(onCancel).toHaveBeenCalledTimes(1);
    });
});
