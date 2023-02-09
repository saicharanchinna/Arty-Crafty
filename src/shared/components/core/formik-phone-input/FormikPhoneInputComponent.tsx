import './FormikPhoneInputComponent.scss'
import React, {useCallback} from 'react';
import FormikInputComponent from "../formik-input/FormikInputComponent";
import {ImageConfig} from "../../../../constants";
import LabelComponent from "../label/LabelComponent";
import _ from "lodash";

interface PhoneInputComponentProps {
    formikField: any
    placeholder?: string
    labelText?: string
    required?: boolean
    onUpdate?: Function
    errorMessage?: any;
}

const FormikPhoneInputComponent = (props: PhoneInputComponentProps) => {

    const {placeholder, formikField, labelText, required, onUpdate} = props
    const {field, form} = formikField;
    const {name} = field;
    const {setFieldTouched, touched, errors, setFieldValue} = form;
    const hasError = _.get(touched, name) && errors && _.get(errors, name);

    const textChangeHandler = useCallback((value: any) => {
        const x = value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
        value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
        setFieldValue(name, value);
        setFieldTouched(name);
        if (onUpdate) {
            onUpdate(value);
        }
    }, [setFieldValue, setFieldTouched, name, onUpdate]);

    return (
        <div className="phone-input-component component">
            {labelText && <LabelComponent title={labelText + (required ? " * " : "")}/>}
            <div className={'phone-input-flag-container ' + (hasError ? "has-error" : '') + ' '}>
                    <div className="phone-input-flag-prefix-wrapper">
                        <div className="phone-input-flag-wrapper">
                            {/*<img className="phone-input-flag-icon" src={ImageConfig.USFlag} alt="USFlag"/>*/}
                        </div>
                        <div className="phone-input-flag-prefix">
                            +1
                        </div>
                    </div>
                    <div className={"phone-input-flag-input-container"}>
                        <FormikInputComponent
                            showLabel={false}
                            placeholder={placeholder}
                            onUpdate={textChangeHandler}
                            labelText={labelText}
                            required={required}
                            maxLength={14}
                            type={"text"}
                            formikField={formikField}
                        />
                    </div>
                </div>
            </div>
        )

    }

;

export default FormikPhoneInputComponent;
