import React from 'react';
import Button from '../Button';

interface FooterProps {
    isFeedActive: boolean;
}

const Footer: React.FC<FooterProps> = ({ isFeedActive }: FooterProps) => {

    // TODO: Extract to a constant
    const purpleColorCode = '#5741d9';
    const redColorCode = '#b91d1d';

    const killOrRenewFeedButtonText = isFeedActive ? 'Kill Feed' : 'Renew Feed' ;

    return <div>
        <Button text={'Toggle Feed'} backgroundColor={purpleColorCode} callback={() => {}}></Button>
        <Button text={killOrRenewFeedButtonText} backgroundColor={redColorCode} callback={() => {}}></Button>
    </div>;
};

export default Footer;