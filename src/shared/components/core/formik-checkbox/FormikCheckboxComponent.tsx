import "./FormikCheckboxComponent.scss";
import {InputHTMLAttributes, useCallback} from "react";
import {FieldProps} from "formik";
import CheckboxComponent from "../checkbox/CheckboxComponent";
import _ from "lodash";

export interface FormikCheckboxComponentProps {
    showLabel?: boolean;
    mode?: 'inline' | 'block';
    labelText?: string;
    showFullLabel?: boolean;
    formikField: FieldProps;
    onUpdate?: (value: any) => void;
    errorMessage?: any;
    inputProps?: InputHTMLAttributes<HTMLInputElement>;
    required?: boolean;
    id?:any;
}

const FormikCheckboxComponent = (props: FormikCheckboxComponentProps) => {

    const {errorMessage, formikField, inputProps, required, labelText, showFullLabel, onUpdate,id} = props;

    const {field, form} = formikField;
    const {name, value} = field;
    const {setFieldTouched, touched, handleBlur, errors, setFieldValue} = form;

    const mode = props.mode ? props.mode : 'inline';

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

    const onInputBlur = useCallback(() => {
        handleBlur(name);
        setFieldTouched(name);
    }, [name, handleBlur, setFieldTouched]);

    return (
        <div className={'formik-checkbox-component component'}>
            <CheckboxComponent
                checked={value}
                mode={mode}
                id={id}
                required={required}
                value={value}
                labelText={labelText || ''}
                onChange={onValueChange}
                showLabel={showLabel}
                showFullLabel={showFullLabel}
                hasError={(errorMessage || hasError)}
                errorMessage={errorMessage || _.get(errors, name)}
                inputProps={{
                    onBlur: onInputBlur,
                    ...inputProps
                }}
            />
        </div>
    );

};

export default FormikCheckboxComponent;