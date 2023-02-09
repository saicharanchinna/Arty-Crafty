import './FormikDatePickerComponent.scss'
import React, {useCallback, useEffect, useRef} from 'react';
import _ from "lodash";
import DatePickerComponent from "../date-picker/DatePickerComponent";
import {FieldProps, FormikErrors} from "formik";

interface FormikDatePickerComponentProps {
    showLabel?: boolean;
    labelText?: string;
    fullWidth?: boolean;
    id?: string;
    size?: "sm" | "lg" | "xl";
    formikField: FieldProps;
    errorMessage?: any;
    placeholder?: string;
    required?: boolean;
    disabled?: boolean;
    format?: string;
    minDate?: Date
    maxDate?: Date
    onUpdate?: Function
}

const FormikDatePickerComponent = (props: FormikDatePickerComponentProps) => {

        const {
            errorMessage,
            id,
            formikField,
            required,
            disabled,
            minDate,
            maxDate,
            onUpdate,
            labelText,
        } = props;

        const format = props.format ? props.format : 'MM-dd-y';

        const size = props.size || 'lg';
        const fullWidth = props.fullWidth || true;

        const {field, form} = formikField;
        const {name, value} = field;
        const {setFieldTouched, touched, errors, setFieldValue} = form;
        const hasError = useRef<string | false | FormikErrors<any> | string[] | FormikErrors<any>[] | undefined>(false);

        const showLabel =
            props.showLabel !== undefined
                ? props.showLabel
                : !!(labelText && labelText.length > 0);

        const dateChangeHandler = useCallback((value: any) => {
            setFieldValue(name, value);
            setFieldTouched(name);
            if (onUpdate) {
                onUpdate(value)
            }
            hasError.current = _.get(touched, name) && errors && _.get(errors, name);
        }, [setFieldValue, touched, setFieldTouched, name, errors, onUpdate]);

        useEffect(() => {
            hasError.current = _.get(touched, name) && errors && _.get(errors, name);
        }, [touched, name, errors]);

        const onDatePickerClose = useCallback(() => {
            setFieldTouched(name);
        }, [name, setFieldTouched]);

        return (
            <div>
                <DatePickerComponent
                    value={value}
                    size={size}
                    id={id}
                    onDateChange={dateChangeHandler}
                    onCalenderUpdate={onDatePickerClose}
                    format={format}
                    fullWidth={fullWidth}
                    labelText={labelText}
                    showLabel={showLabel}
                    required={required}
                    minDate={minDate}
                    maxDate={maxDate}
                    disabled={disabled}
                    hasError={(errorMessage || (hasError.current))}
                    errorMessage={errorMessage || _.get(errors, name)}
                />
            </div>
        )
    }

;

export default FormikDatePickerComponent;
