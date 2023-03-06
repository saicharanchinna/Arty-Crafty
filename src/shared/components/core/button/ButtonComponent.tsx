import './ButtonComponent.scss'
import React from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import IconButton from '@mui/material/IconButton';
import {backgroundColor} from "../../../../constants/ColorConfig";

interface ButtonComponentProps {
    type?: "submit" | "reset" | "button";
    color?: "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning";
    variant?: "text" | "outlined" | "contained" | "icon";
    handleClick?: any;
    isLoading?: boolean;
    className?: string;
    disabled?: boolean;
    fullWidth?: boolean;
    size?: 'small' | 'medium' | 'large'
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    buttonProps?: any;
    id?: any
}

const ButtonComponent = (props: React.PropsWithChildren<ButtonComponentProps>) => {

        const {
            handleClick,
            className,
            isLoading,
            fullWidth,
            id,
            disabled,
            startIcon,
            endIcon,
            children,
            buttonProps
        } = props;
        let {type, size, color, variant} = props;

        if (!color) color = "primary";
        if (!size) size = "medium";
        if (!type) type = "button";
        if (!variant) variant = "contained";
        let loadingPosition = startIcon ? "start" : (endIcon ? "end" : 'center');
        let sx = {};
        if ((variant === "contained") && (disabled || isLoading)) {
            switch (color) {
                case "primary":
                    sx = {
                        '&.Mui-disabled': {
                            backgroundColor: backgroundColor,
                            color: backgroundColor
                        },
                        '&.Mui-loading': {
                            backgroundColor: backgroundColor,
                            color: backgroundColor
                        }
                    };
                    break;
                case "secondary":
                    sx = {
                        '&.Mui-disabled': {
                            backgroundColor: 'default'
                        },
                        '&.Mui-loading': {
                            backgroundColor: 'default',
                            color: 'default'
                        }
                    };
                    break;
                default:
                    sx = {
                        '&.Mui-disabled': {
                            backgroundColor: 'default',
                        }
                    }
            }
        }

        return (
            <>
                {
                    variant === "icon" && <IconButton
                        className={className}
                        id={id}
                        loading={isLoading}
                        type={type}
                        color={color}
                        variant={variant}
                        onClick={handleClick}
                        disabled={disabled}
                        sx={sx}
                        fullWidth={fullWidth}
                        startIcon={startIcon || null}
                        endIcon={endIcon || null}
                        loadingPosition={loadingPosition}
                        size={size}
                        {...buttonProps}
                    >
                        {children}
                    </IconButton>
                }
                {
                    variant !== "icon" && <LoadingButton
                        className={className}
                        id={id}
                        loading={isLoading}
                        type={type}
                        color={color}
                        variant={variant}
                        onClick={handleClick}
                        disabled={disabled}
                        sx={sx}
                        fullWidth={fullWidth}
                        startIcon={startIcon || null}
                        endIcon={endIcon || null}
                        loadingPosition={loadingPosition}
                        size={size}
                        {...buttonProps}
                    >
                        {children}
                    </LoadingButton>
                }
            </>
        );

    }
;
export default ButtonComponent;