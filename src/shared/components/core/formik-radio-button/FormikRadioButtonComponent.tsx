import "./FormikRadioButtonComponent.scss";
import {FieldProps} from "formik";
import {useCallback} from "react";
import {RadioButtonComponent} from "../radio-button/RadioButtonComponent";

export interface FormikRadioButtonComponentProps {
    formikField: FieldProps;
    option?: any;
    isValueBoolean?: boolean; // ***** this must be TRUE when value is a boolean type value *****
    direction?: "row" | "column";
    required?: boolean;
    onUpdate?: Function;
    id?: any,
    labelText?: string;
    showLabel?: boolean;
    displayWith?: (option: any) => any;
    compareWith?: (option: any) => any;
    errorMessage?: any;
}

const FormikRadioButtonComponent = (props: FormikRadioButtonComponentProps) => {

    const {formikField, option, onUpdate} = props;

    const {field, form} = formikField;
    const {name, value} = field;
    const {setFieldTouched, setFieldValue} = form;

    let { displayWith, compareWith, isValueBoolean} = props;

    const onValueChange = useCallback((value: any) => {
        setFieldValue(name, value);
        setFieldTouched(name);
        if (onUpdate) {
            onUpdate(value);
        }
    }, [setFieldValue, setFieldTouched, name, onUpdate]);

    return (
        <div className={'formik-radio-button-component component'}>
            <RadioButtonComponent
                name={name}
                value={value}
                option={option}
                onUpdate={onValueChange}
                isValueBoolean={isValueBoolean}
                displayWith={displayWith}
                compareWith={compareWith}
            />
        </div>
    );

};

export default FormikRadioButtonComponent;