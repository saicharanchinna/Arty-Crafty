import './DatePickerComponent.scss'
import React, {useCallback, useState} from 'react';
import DatePicker from 'react-date-picker';
import LabelComponent from "../label/LabelComponent";
import ErrorTextComponent from "../error/ErrorTextComponent";
import {ImageConfig} from "../../../../constants";

interface DatePickerComponentProps {
    size?: "sm" | "lg" | "xl";
    labelText?: string;
    value?: string;
    fullWidth?: boolean;
    id?: string;
    disabled?: boolean;
    hasError?: boolean;
    className?: string;
    showLabel?: boolean;
    required?: boolean;
    errorMessage?: any;
    format?: string;
    minDate?: Date
    maxDate?: Date
    onDateChange?: Function
    onCalenderUpdate?: Function
}

const DatePickerComponent = (props: DatePickerComponentProps) => {

        const [value, setValue] = useState<any>(props.value);
        const {
            className,
            labelText,
            hasError,
            required,
            errorMessage,
            fullWidth,
            disabled,
            minDate,
            maxDate,
            onDateChange,
            onCalenderUpdate,
        } = props;

        const format = props.format ? props.format : 'MM-dd-y'

        const size = props.size || 'lg';

        const showLabel =
            props.showLabel !== undefined
                ? props.showLabel
                : !!(labelText && labelText.length > 0);

        const onChange = useCallback((value: any) => {
            setValue(value);
            if (onDateChange) {
                onDateChange(value);
            }
        }, [onDateChange]);

        const onCalenderClose = useCallback(() => {
            if (onCalenderUpdate) {
                onCalenderUpdate()
            }
        }, [onCalenderUpdate]);
        

        return (
            <div
                className={`date-picker-component component ${size} ${fullWidth ? "fullWidth" : ''} ${disabled ? 'disabled' : ''}`}>
                {showLabel && <LabelComponent title={labelText || ''} required={required}/>}
                <DatePicker
                    onChange={(value: any) => onChange(value)}
                    onCalendarClose={onCalenderClose}
                    format={format}
                    dayPlaceholder={'DD'}
                    monthPlaceholder={'MM'}
                    yearPlaceholder={'YYYY'}
                    minDate={minDate}
                    disabled={disabled}
                    maxDate={maxDate}
                    clearIcon={null}
                    calendarIcon={<img src={ImageConfig.Calendar} alt={"calendar-icon"}/>}
                    className={'date-picker-field ' + (hasError ? "has-error" : '') + ' ' + className}
                    value={ value? new Date(value) : undefined}/>
                {(errorMessage && hasError) && (
                    <ErrorTextComponent error={errorMessage}/>
                )}
            </div>
        );
    }

;

export default DatePickerComponent;
