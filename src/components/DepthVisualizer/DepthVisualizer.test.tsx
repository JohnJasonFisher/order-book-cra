import React from 'react';
import { render, screen } from '@testing-library/react';
import DepthVisualizer, { DepthVisualizerColors } from '.';
import { OrderType } from "../OrderBook";

describe('DepthVisualizer', () => {
    const depth = 33;

    describe('when an order type is a bid', () => {
        const bid = OrderType.BIDS
        const bidColor = DepthVisualizerColors.BIDS;

        it('displays a depth visualizer with bid color color and correct styles', () => {
            render(
                <DepthVisualizer depth={depth} orderType={bid} />
            );
            const depthVisualizer = screen.getByTestId('depth-visualizer');
            expect(depthVisualizer).toHaveStyle(`width: ${depth}%`);
            expect(depthVisualizer).toHaveStyle(`background-color: ${bidColor}`);
            expect(depthVisualizer).toHaveStyle(`left: 67%`);
        });
    });

    describe('when an order type is an ask', () => {
        const bid = OrderType.ASKS
        const bidColor = DepthVisualizerColors.ASKS;

        it('displays a depth visualizer with bid color color and correct styles', () => {
            render(
                <DepthVisualizer depth={depth} orderType={bid} />
            );
            const depthVisualizer = screen.getByTestId('depth-visualizer');
            expect(depthVisualizer).toHaveStyle(`width: ${depth}%`);
            expect(depthVisualizer).toHaveStyle(`background-color: ${bidColor}`);
            expect(depthVisualizer).toHaveStyle(`left: 0px`); // should this be a %?
        });
    });
    
});

