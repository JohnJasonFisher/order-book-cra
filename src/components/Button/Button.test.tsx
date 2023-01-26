import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from '.';

describe('Button', () => {
    const text = 'Test Text';
    const backgroundColor = 'red';
    const onClick = jest.fn();

    it('is a button with text and color', () => {
        render(<Button text={text} backgroundColor={backgroundColor} callback={onClick}/>);
        const button = screen.getByText(text);
        expect(button).toBeInTheDocument();
        expect(button).toHaveStyle(`background-color: ${backgroundColor}`);
    });

    it('invokes the callback function when clicked', () => {
        render(<Button text={text} backgroundColor={backgroundColor} callback={onClick}/>);
        const button = screen.getByText(text);
        button.click();
        expect(onClick).toHaveBeenCalled();
    });
});