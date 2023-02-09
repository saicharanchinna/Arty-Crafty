import React, {InputHTMLAttributes, useCallback} from 'react';
import './FormikInputComponent.scss';
import InputComponent from "../input/InputComponent";
import _ from "lodash";
import {FieldProps} from "formik";

export interface FormikInputComponentProps {
    showLabel?: boolean;
    labelText?: string;
    fullWidth?: boolean;
    className?: string;
    id?: string;
    size?: "sm" | "lg" | "xl";
    formikField: FieldProps;
    onUpdate?: (value: any) => void;
    errorMessage?: any;
    inputProps?: InputHTMLAttributes<HTMLInputElement>;
    placeholder?: string;
    required?: boolean;
    trimLeft?: boolean;
    disabled?: boolean;
    maxLength?: number;
    type?:
        | 'email'
        | 'number'
        | 'password'
        | 'tel'
        | 'text'
        | 'url';
}

const FormikInputComponent = (props: FormikInputComponentProps) => {

    const {
        errorMessage,
        id,
        formikField,
        inputProps,
        required,
        disabled,
        labelText,
        onUpdate,
        placeholder,
        maxLength,
        className,
    } = props;
    const size = props.size || 'lg';
    const type = props.type || 'text';
    const fullWidth = props.fullWidth !== false;

    const {field, form} = formikField;
    const {name, value} = field;
    const {setFieldTouched, touched, handleBlur, errors, setFieldValue} = form;
    const showLabel =
        props.showLabel !== undefined
            ? props.showLabel
            : !!(labelText && labelText.length > 0);

    const hasError = _.get(touched, name) && errors && _.get(errors, name);

    const trimLeft = props.trimLeft === undefined ? true : props.trimLeft;

    const textChangeHandler = useCallback((text: string) => {
        if (trimLeft) {
            text = text.trimStart();
        }
        setFieldValue(name, text);
        setFieldTouched(name);
        if (onUpdate) {
            onUpdate(text);
        }
    }, [setFieldValue, setFieldTouched, name, onUpdate, trimLeft]);

    const onInputBlur = useCallback(() => {
        handleBlur(name);
        setFieldTouched(name);
    }, [name, handleBlur, setFieldTouched]);

    const onInputFocus = useCallback(() => {
    }, []);

    return (
        <div className={'formik-input-component component'}>
            <InputComponent
                value={value || ''}
                size={size}
                id={id}
                className={className}
                fullWidth={fullWidth}
                type={type}
                disabled={disabled}
                onChange={textChangeHandler}
                inputProps={{
                    onBlur: onInputBlur,
                    onFocus: onInputFocus,
                    ...inputProps
                }}
                hasError={(errorMessage || hasError)}
                placeholder={placeholder}
                showLabel={showLabel}
                maxLength={maxLength}
                labelText={labelText}
                required={required}
                errorMessage={errorMessage || _.get(errors, name)}
            />
        </div>
    );
};

export default FormikInputComponent;
