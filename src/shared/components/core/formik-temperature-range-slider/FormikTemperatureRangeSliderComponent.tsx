import './FormikTemperatureRangeSliderComponent.scss';

import React, {useCallback, useEffect, useState} from 'react';
import {FieldProps} from "formik";

export interface FormikTemperatureRangeSliderComponentProps {
    formikField: FieldProps;
    id?: string;
    onUpdate?: (value: any) => void;
    className?: string;
}

const MIN_VALUE = 70;
const MAX_VALUE = 114;

const FormikTemperatureRangeSliderComponent = (props: FormikTemperatureRangeSliderComponentProps) => {

    const {id, formikField, onUpdate} = props;
    const [labelPosition, setLabelPosition] = useState<any>(undefined);
    const {field, form} = formikField;
    const {name, value} = field;
    const {setFieldValue} = form;
    const [formControlValue, setFormControlValue] = useState<any>(value);

    const handleChange = useCallback((event: any) => {
        const value = event.target.value;
        setFieldValue(name, value);
        setFormControlValue(value);
        if (onUpdate) {
            onUpdate(value);
        }
    }, [name, onUpdate, setFieldValue]);

    useEffect(() => {
        setFieldValue(name, formControlValue);
        const newValue = Number((formControlValue - MIN_VALUE) * 100 / (MAX_VALUE - MIN_VALUE));
        setLabelPosition(newValue);
    }, [formControlValue, name, setFieldValue]);
    
    return (
        <div>
            <div className="formik-range-slider-component component">
                <span className="range-slider-label"
                      style={{left: `calc(${labelPosition}% + (${24 - labelPosition * 0.35}px))`}}>
                    {value} &deg; F
                </span>
                <input className="range-slider"
                       id={id}
                       type="range"
                       onChange={handleChange}
                       step={0.1}
                       value={value}
                       min={MIN_VALUE}
                       max={MAX_VALUE}
                />
            </div>
        </div>
    );
};

export default FormikTemperatureRangeSliderComponent;
