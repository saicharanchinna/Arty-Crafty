import React, {CSSProperties, HTMLAttributes, useCallback} from 'react';

import './ButtonComponent.scss';

interface ButtonComponentProps {
    type?: "submit" | "reset" | "button";
    color?: "primary";
    variant?: "contained";
    onClick?: ()=> void;
    style?: CSSProperties;
    isLoading?: boolean;
    className?: string;
    disabled?: boolean;
    fullWidth?: boolean;
    size?: 'sm' | 'medium' | 'lg' | 'xl';
    buttonProps?: HTMLAttributes<HTMLButtonElement>;
}

const ButtonComponent = (props: React.PropsWithChildren<ButtonComponentProps>) => {

    const {onClick, className, isLoading, fullWidth, style, disabled, children, buttonProps} = props;
    let {type, size, color, variant} = props;

    if (!color) color = "primary";
    if (!size) size = "medium";
    if (!type) type = "button";
    if (!variant) variant = "contained";

    const handleBtnClick = useCallback(() => {
        if (onClick) {
            onClick();
        }
    }, [onClick]);

    return (
        <button type={type}
                className={`button-component component ${disabled ? 'disabled' : ''} ${isLoading ? 'loading' : ''} ${size} ${fullWidth ? 'fullWidth' : ''} ${className} ${variant} ${color}`}
                disabled={disabled}
                style={style}
                onClick={handleBtnClick} {...buttonProps}>
            {!isLoading ? children : <></>}
        </button>
    )
};

export default ButtonComponent;
