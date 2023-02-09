import "./SelectDropdownComponent.scss";
import LabelComponent from "../label/LabelComponent";
import React, {ReactNode, useCallback, useEffect, useRef, useState} from "react";
import Select, {InputActionMeta} from 'react-select';
import {IAPIResponseType} from "../../../models/api.model";
import _ from "lodash";
import {AXIOS_REQUEST_CANCELLED} from "../../../services/api.service";
import {CommonService} from "../../../services";
import HelperTextComponent from "../helper-text/HelperTextComponent";
import {ColorConfig} from "../../../../constants";
import ErrorTextComponent from "../error/ErrorTextComponent";

export interface SelectDropdownComponentProps {
    labelText?: string;
    size?: "sm" | "lg" | "xl";
    value?: any;
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
    method?: "get" | "post",
    url?: string,
    extraPayload?: object;
    dataListKey?: string;
    defaultData?: any[],
    onSelectUpdate?:Function
}

const SelectDropdownComponent = (props: SelectDropdownComponentProps) => {

    const {
        className,
        labelText,
        value,
        hasError,
        required,
        errorMessage,
        onUpdate,
        onSelectUpdate,
        disabled,
        id,
        data,
        url,
        extraPayload,
    } = props;

    let {
        placeholder,
        noDataMessage,
        searchable,
        searchMode,
        multiple,
        method,
        isClearable,
        fullWidth,
        dataListKey,
        hideSelectedOptions,
        isDataLoading,
        isDataLoaded,
        isDataLoadingFailed,
        defaultData,
        size,
        displayWith,
        compareWith
    } = props;
    if (!placeholder) placeholder = "Placeholder";
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
    if (!defaultData) defaultData = [];

    const [isDropDownDataLoading, setIsDropDownDataLoading] = useState(isDataLoading);
    const [isDropDownDataLoaded, setIsDropDownDataLoaded] = useState(isDataLoaded);
    const [isDropDownDataLoadingFailed, setIsDropDownDataLoadingFailed] = useState(isDataLoadingFailed);
    const [dropDownData, setDropDownData] = useState(data);
    const [formControlValue, setFormControlValue] = useState(value);
    const APICallSubscription = useRef<any>(null);
    // console.log(errorMessage)
    const showLabel =
        props.showLabel !== undefined
            ? props.showLabel
            : !!(labelText && labelText.length > 0);

    const onValueChange = useCallback((value: any) => {
        let tempValue = value || '';
        setFormControlValue(tempValue);
        if (onUpdate) {
            onUpdate(tempValue)
        }
    }, [onUpdate]);

    const onBlur = useCallback(() => {
        if (onSelectUpdate) {
            onSelectUpdate()
        }
    }, [onSelectUpdate]);

    useEffect(() => {
        setFormControlValue(value || '');
    }, [value]);

    useEffect(() => {
        setIsDropDownDataLoading(isDataLoading);
    }, [isDataLoading]);

    useEffect(() => {
        setIsDropDownDataLoaded(isDataLoaded);
    }, [isDataLoaded]);

    useEffect(() => {
        setIsDropDownDataLoadingFailed(isDataLoadingFailed);
    }, [isDataLoadingFailed]);

    useEffect(() => {
        // setNoDataMsg(noDataMessage);
    }, [noDataMessage]);

    useEffect(() => {
        setDropDownData(data);
    }, [data]);

    useEffect(() => {
        if (searchMode === "serverSide") {
            if (dropDownData?.length === 0) {
            }
        }
    }, [searchMode, dropDownData]);

    const getDataList = useCallback((searchValue: string) => {
        if (!url) {
            console.warn("URL not provided to fetch dropdown list");
            return;
        }
        if (!method) {
            console.warn("METHOD not provided to fetch dropdown list");
            return;
        }
        const finalPayload = {...extraPayload, search: searchValue};
        const cancelTokenSource = CommonService.getCancelToken();
        let request = null;
        if (method === "get") {
            request = CommonService._api.get
        } else {
            request = CommonService._api.post
        }
        if (APICallSubscription && APICallSubscription.current) {
            APICallSubscription.current.cancel();
        }
        APICallSubscription.current = cancelTokenSource;
        setIsDropDownDataLoading(true);
        setIsDropDownDataLoaded(false);
        setIsDropDownDataLoadingFailed(false);
        let dropDownData: any[] = [...defaultData || []];
        request(url, finalPayload, {}, {cancelToken: cancelTokenSource.token}).then((response: IAPIResponseType<any>) => {
            if (dataListKey && _.get(response, dataListKey)) {
                dropDownData.unshift(..._.get(response, dataListKey));
            }
            setDropDownData(dropDownData);
            setIsDropDownDataLoading(false);
            setIsDropDownDataLoaded(true);
            setIsDropDownDataLoadingFailed(false);
        }).catch((error: any) => {
            if (error.reason !== AXIOS_REQUEST_CANCELLED) { // if previous request got cancelled do not close loading state
                setDropDownData(dropDownData);
                setIsDropDownDataLoading(false);
                setIsDropDownDataLoaded(false);
                setIsDropDownDataLoadingFailed(true);
            }
        })
    }, [defaultData, url, dataListKey, method, extraPayload]);

    const handleInputChange = useCallback((newValue: string, actionMeta: InputActionMeta) => {
        const {action} = actionMeta;
        console.log(action, newValue);
        switch (action) {
            case "input-change": {
                if (searchMode === "serverSide") {
                    console.log("fetch API to get the data");
                    getDataList(newValue);
                }
                break;
            }
            default:
                console.log(action, "event not handled");
        }
    }, [searchMode, getDataList]);

    return (
        <div
            className={`select-dropdown-component component ${searchable ? "search" : ''} ${fullWidth ? "fullWidth" : ''} ${disabled ? 'disabled' : ''} ${hasError ? "has-error" : ''} ${size}`}>
            {showLabel && <LabelComponent title={labelText || ''} required={required}/>}
            <Select
                id={id}
                className={`select-dropdown ${className}`}
                classNamePrefix={'select-dropdown'}
                closeMenuOnSelect={!multiple}
                isMulti={multiple}
                hideSelectedOptions={hideSelectedOptions}
                options={dropDownData}
                placeholder={placeholder}
                isDisabled={disabled}
                isLoading={isDropDownDataLoading}
                getOptionLabel={displayWith}
                getOptionValue={compareWith}
                isClearable={isClearable}
                value={formControlValue}
                isSearchable={searchable}
                onBlur={onBlur}
                filterOption={(option: any, inputValue: string) => {
                    const {label, value} = option;
                    if (searchMode === "serverSide") {
                        return true;
                    } else {
                        if (dropDownData) {
                            const otherKey = dropDownData.filter(
                                opt => opt.label === label && opt.value.includes(inputValue)
                            );
                            return value.includes(inputValue) || otherKey.length > 0;
                        } else {
                            return true;
                        }
                    }
                }}
                noOptionsMessage={() => {
                    return noDataMessage
                }}
                onInputChange={handleInputChange}
                onChange={onValueChange}
                theme={(theme) => ({
                    ...theme,
                    colors: {
                        ...theme.colors,
                        primary25: "#dddddd",
                        primary: ColorConfig.primary,
                        zIndex: 9999
                    },
                })}
            />
            {(errorMessage && hasError) && (
                <ErrorTextComponent error={errorMessage}/>
            )}
            {(isDropDownDataLoading && !isDropDownDataLoaded) && (
                <HelperTextComponent message={"Data loading"}/>
            )}
            {(isDropDownDataLoadingFailed) && (
                <HelperTextComponent type={"error"} message={"Error loading the data"}/>
            )}
        </div>
    );

};

export default SelectDropdownComponent;