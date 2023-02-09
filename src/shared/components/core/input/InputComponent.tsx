import './InputComponent.scss';

import React, {InputHTMLAttributes, useCallback, useEffect, useState} from 'react';
import LabelComponent from "../label/LabelComponent";
import ErrorTextComponent from "../error/ErrorTextComponent";

export interface InputComponentProps {
    inputProps?: InputHTMLAttributes<HTMLInputElement>;
    size?: "sm" | "lg" | "xl";
    labelText?: string;
    value?: string;
    fullWidth?: boolean;
    id?: string;
    type?:
        | 'email'
        | 'number'
        | 'password'
        | 'tel'
        | 'text'
        | 'url';
    disabled?: boolean;
    onChange?: (text: string) => void;
    placeholder?: string;
    hasError?: boolean;
    className?: string;
    trimLeft?: boolean;
    showLabel?: boolean;
    required?: boolean;
    errorMessage?: any;
    maxLength?:number
}

const InputComponent = (props: InputComponentProps) => {

    const {
        inputProps,
        className,
        labelText,
        trimLeft,
        value,
        hasError,
        required,
        errorMessage,
        onChange,
        fullWidth,
        placeholder,
        disabled,
        maxLength,
        id
    } = props;

    const size = props.size || 'lg';
    const type = props.type || 'text';
    const [tmpValue, setTmpValue] = useState(value);

    const showLabel =
        props.showLabel !== undefined
            ? props.showLabel
            : !!(labelText && labelText.length > 0);

    const onValueChange = useCallback((e: any) => {
        let text = e.target.value || '';
        if (trimLeft) {
            text = text.trimStart();
        }
        setTmpValue(text);
        if (onChange) {
            onChange(text)
        }
    }, [onChange, trimLeft]);


    useEffect(() => {
        setTmpValue(value || '');
    }, [value]);

    return (
        <div className={`input-component component ${size} ${fullWidth ? "fullWidth" : ''} ${disabled ? 'disabled' : ''}`}>
            {showLabel && <LabelComponent title={labelText || ''} required={required}/>}
            <input
                id={id}
                placeholder={placeholder}
                value={tmpValue}
                onChange={onValueChange}
                type={type}
                maxLength={maxLength}
                disabled={disabled}
                className={'input-field ' + (hasError ? "has-error" : '') + ' ' + className}
                {...inputProps}
            />
            {(errorMessage && hasError) && (
                <ErrorTextComponent error={errorMessage}/>
            )}
        </div>
    );
};

export default InputComponent;
