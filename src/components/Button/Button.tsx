import { ReactNode } from "react";
import "./Button.scss"

interface ButtonProps {
    children: ReactNode;
    type?: "button" | "submit" | "reset";
    variant?: "primary";
    onClick?: () => void;
}

const Button = ( { children, type, variant="primary", onClick}: ButtonProps) => {
    return (
        <>
            <button
                type={ type }
                className={ `button--${variant}` }
                onClick={ onClick }
            >
                { children }    
            </button>
        </>
    )
};

export { Button };