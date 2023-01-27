import React from 'react';
import { render, screen } from '@testing-library/react';
import GroupingSelectBox from '.';
import userEvent from '@testing-library/user-event';

describe('GroupingSelectBox', () => {

    const dropdownOptions = [0.5, 1, 2, 3]

    it('renders a select box with default value and a list of options', () => {
        render(<GroupingSelectBox dropdownOptions={dropdownOptions} />);
        const selectBox = screen.getByRole('combobox');
        expect(selectBox).toHaveValue('0.5');
        dropdownOptions.forEach((option) => {
            expect(selectBox).toHaveTextContent(option.toString());
        });
    });

    it('changes the vale when a new option is selected', () => {
        render(<GroupingSelectBox dropdownOptions={dropdownOptions} />);
        const selectBox = screen.getByRole('combobox');
        userEvent.selectOptions(selectBox, '2');
        expect(selectBox).toHaveValue('2');
    });
});