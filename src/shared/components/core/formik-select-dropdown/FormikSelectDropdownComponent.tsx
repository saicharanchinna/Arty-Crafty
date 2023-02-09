import "./FormikSelectDropdownComponent.scss";
import React, {ReactNode, useCallback, useEffect, useState} from "react";
import {FieldProps} from "formik";
import SelectDropdownComponent from "../select-dropdown/SelectDropdownComponent";
import _ from "lodash";

export interface FormikSelectDropdownComponentProps {
    labelText?: string;
    size?: "sm" | "lg" | "xl";
    placeholder?: string;
    fullWidth?: boolean;
    multiple?: boolean;
    id?: string;
    isDataLoading?: boolean;
    isDataLoaded?: boolean;
    isDataLoadingFailed?: boolean;
    data?: any[];
    disabled?: boolean;
    onUpdate?: (text: any) => void;
    hasError?: boolean;
    className?: string;
    showLabel?: boolean;
    required?: boolean;
    errorMessage?: any;
    isClearable?: boolean;
    displayWith?: (option: any) => any;
    compareWith?: (option: any) => any;
    searchable?: boolean;
    noDataMessage?: ReactNode;
    hideSelectedOptions?: boolean;
    searchMode?: "clientSide" | "serverSide",
    method?: any;
    url?: string,
    extraPayload?: object;
    dataListKey?: string;
    defaultData?: any[],
    formikField: FieldProps;
}

const FormikSelectDropdownComponent = (props: FormikSelectDropdownComponentProps) => {

    const {
        className,
        labelText,
        formikField,
        required,
        errorMessage,
        onUpdate,
        disabled,
        id,
        data,
        url,
        extraPayload,
        defaultData,
    } = props;

    let {
        placeholder,
        noDataMessage,
        searchable,
        searchMode,
        multiple,
        method,
        isClearable,
        dataListKey,
        hideSelectedOptions,
        isDataLoading,
        isDataLoaded,
        isDataLoadingFailed,
        size,
        fullWidth,
        displayWith,
        compareWith
    } = props;
    if (!placeholder) placeholder = "Select Your Option";
    if (!method) method = "get";
    if (!size) size = "lg";
    if (!searchMode) searchMode = "clientSide";
    if (!dataListKey) dataListKey = "data.docs";
    if (hideSelectedOptions === undefined) hideSelectedOptions = true;
    if (isClearable === undefined) isClearable = true;
    if (searchable === undefined) searchable = true;
    if (multiple === undefined) multiple = false;
    if (fullWidth === undefined) fullWidth = true;
    if (!displayWith) displayWith = (option: any) => option?.title;
    if (!compareWith) compareWith = (option: any) => option?.code;
    if (!noDataMessage) noDataMessage = <div>No Data</div>;

    const {field, form} = formikField;
    const {name, value} = field;
    const {setFieldTouched, touched, errors, setFieldValue} = form;
    const hasError = _.get(touched, name) && errors && _.get(errors, name);
    const [formControlValue, setFormControlValue] = useState(value);
    const showLabel =
        props.showLabel !== undefined
            ? props.showLabel
            : !!(labelText && labelText.length > 0);

    const onValueChange = useCallback((value: any) => {
        let tempValue = value || '';
        setFormControlValue(tempValue);
        setFieldValue(name, tempValue);
        setFieldTouched(name);
        if (onUpdate) {
            onUpdate(tempValue)
        }
    }, [name, onUpdate, setFieldTouched, setFieldValue, setFormControlValue]);

    const onBlur = useCallback((value: any) => {
        setFieldTouched(name);
    }, [name, setFieldTouched]);

    useEffect(() => {
        setFormControlValue(value || '');
    }, [value]);

    return (
        <div
            className={`formik-select-dropdown-component component`}>
            <SelectDropdownComponent
                id={id}
                showLabel={showLabel}
                labelText={labelText}
                required={required}
                fullWidth={fullWidth}
                className={className}
                multiple={multiple}
                hideSelectedOptions={hideSelectedOptions}
                data={data}
                placeholder={placeholder}
                disabled={disabled}
                isDataLoading={isDataLoading}
                isDataLoaded={isDataLoaded}
                searchMode={searchMode}
                url={url}
                size={size}
                method={method}
                extraPayload={extraPayload}
                isDataLoadingFailed={isDataLoadingFailed}
                dataListKey={dataListKey}
                defaultData={defaultData}
                displayWith={displayWith}
                compareWith={compareWith}
                isClearable={isClearable}
                value={formControlValue}
                searchable={searchable}
                hasError={(errorMessage || hasError)}
                errorMessage={errorMessage || _.get(errors, name)}
                noDataMessage={noDataMessage}
                onSelectUpdate={onBlur}
                onUpdate={(newValue) => {
                    onValueChange(newValue);
                }}
            />
        </div>
    );

};

export default FormikSelectDropdownComponent;
