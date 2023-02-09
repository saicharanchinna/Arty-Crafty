import "./FormikRadioButtonGroupComponent.scss";
import {FieldProps} from "formik";
import _ from "lodash";
import {useCallback} from "react";
import RadioButtonGroupComponent from "../radio-button/RadioButtonComponent";

export interface FormikRadioButtonGroupComponentProps {
    formikField: FieldProps;
    options?: any[];
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

const FormikRadioButtonGroupComponent = (props: FormikRadioButtonGroupComponentProps) => {

    const {errorMessage, id, formikField,options, required, labelText, onUpdate} = props;

    const {field, form} = formikField;
    const {name, value} = field;
    const {setFieldTouched, touched, errors, setFieldValue} = form;

    let {direction, displayWith, compareWith, isValueBoolean} = props;

    if (!direction) direction = "column";

    const showLabel =
        props.showLabel !== undefined
            ? props.showLabel
            : !!(labelText && labelText.length > 0);

    const hasError = _.get(touched, name) && errors && _.get(errors, name);

    const onValueChange = useCallback((isCheckbox: boolean) => {
        setFieldValue(name, isCheckbox);
        setFieldTouched(name);
        if (onUpdate) {
            onUpdate(isCheckbox);
        }
    }, [setFieldValue, setFieldTouched, name, onUpdate]);

    return (
        <div className={'formik-radio-button-group-component component'}>
            <RadioButtonGroupComponent
                name={name}
                options={options}
                value={value}
                required={required}
                labelText={labelText}
                showLabel={showLabel}
                hasError={(errorMessage || hasError)}
                onUpdate={onValueChange}
                isValueBoolean={isValueBoolean}
                errorMessage={errorMessage || _.get(errors, name)}
                id={id}
                direction={direction}
                displayWith={displayWith}
                compareWith={compareWith}
            />
        </div>
    );

};

export default FormikRadioButtonGroupComponent;