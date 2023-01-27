import React from 'react';

interface GroupingSelectBoxProps {
    dropdownOptions: number[];
}

const GroupingSelectBox: React.FC<GroupingSelectBoxProps> = ({ dropdownOptions }: GroupingSelectBoxProps) => {

    const defaultGroupingSize = 0.5;

    const options: JSX.Element[] = dropdownOptions.map((option, index) => <option key={`grouping-option-${index}`} value={option}>{option}</option>)

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        console.log('I have been selected!', event.target.value)
    };

    return <select
        name="groupings"
        onChange={handleChange}
        defaultValue={defaultGroupingSize}
    >
        {options}
    </select>;
};

export default GroupingSelectBox;