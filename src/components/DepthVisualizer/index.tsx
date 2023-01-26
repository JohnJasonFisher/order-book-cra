import React from 'react';
import { OrderType } from "../OrderBook";

interface DepthVisualizerProps {
    depth: number;
    orderType: OrderType;
}

export const DepthVisualizerColors = {
    BIDS: "#113534",
    ASKS: "#3d1e28"
};

const DepthVisualizer: React.FC<DepthVisualizerProps> = ({ depth, orderType }: DepthVisualizerProps) => {
    
    const backgroundColor: string = orderType === OrderType.BIDS ?
        DepthVisualizerColors.BIDS : DepthVisualizerColors.ASKS;

    const left = orderType === OrderType.BIDS ?
        `${100 - depth}%` : 0;

    return <div data-testid="depth-visualizer" style={{
        backgroundColor,
        height: "1.250em",
        width: `${depth}%`,
        position: "relative",
        top: 21,
        left,
        marginTop: -24,
        zIndex: 1,
      }} />;
};

export default DepthVisualizer;