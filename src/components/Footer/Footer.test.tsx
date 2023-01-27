import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '.';

describe('Footer', () => {
    it('has a Toggle Feed and Kill Feed Button', () => {
        render(<Footer isFeedActive={true} />);

        const toggleFeedButton = screen.getByText('Toggle Feed')
        expect(toggleFeedButton).toHaveStyle('background-color: #5741d9'); // TODO: Extract to a constant

        const killFeedButton = screen.getByText('Kill Feed')
        expect(killFeedButton).toHaveStyle('background-color: #b91d1d'); // TODO: Extract to a constant
    });

    describe('when the feed is INACTIVE', () => {
        it('displays the Renew Feed button', () => {
            render(<Footer isFeedActive={false} />);
            expect(screen.getByText('Renew Feed')).toBeInTheDocument();
        });
    });
});