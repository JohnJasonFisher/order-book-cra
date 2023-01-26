import React from 'react';

interface ButtonProps {
    text: string;
    backgroundColor: string;
    callback: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, backgroundColor, callback }) => {
    return (
        <button 
            style={{backgroundColor}}
            onClick={() => callback()}
        >
            {text}
        </button>
    );
};

export default Button;