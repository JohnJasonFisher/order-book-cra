import React from 'react';
import { StyleContainer } from "./styles";

import GroupingSelectBox from '../GroupingSelectBox';

interface HeaderProps {
    options: number[];
}
  
const Header: React.FC<HeaderProps> = ({ options }: HeaderProps) => {
    return <StyleContainer>
        <h3>Order Book</h3>
        <GroupingSelectBox dropdownOptions={options} />
    </StyleContainer>;
}

export default Header;