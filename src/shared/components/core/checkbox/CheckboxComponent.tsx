import "./CheckboxComponent.scss";
import {InputHTMLAttributes, useCallback, useEffect, useState} from "react";
import LabelComponent from "../label/LabelComponent";
import ErrorTextComponent from "../error/ErrorTextComponent";

export interface CheckBoxComponentProps {
    mode?: 'inline' | 'block';
    inputProps?: InputHTMLAttributes<HTMLInputElement>;
    checked?: boolean;
    value?: any;
    onChange?: (isChecked: boolean) => void;
    showLabel?: boolean;
    showFullLabel?: boolean;
    labelText?: string;
    required?: boolean;
    errorMessage?: string;
    hasError?: boolean;
    id?:any
}

const CheckBoxComponent = (props: CheckBoxComponentProps) => {

    const {inputProps, checked, value, onChange, required, labelText, errorMessage, hasError, id} = props;

    let { showFullLabel } = props;

    if (showFullLabel === undefined) showFullLabel = false;

    const [tmpChecked, setTmpChecked] = useState(checked);
    const [mode, setMode] = useState<'inline' | 'block'>('inline');

    const showLabel =
        props.showLabel !== undefined
            ? props.showLabel
            : !!(labelText && labelText.length > 0);

    useEffect(() => {
        setTmpChecked(checked || false);
    }, [checked]);

    useEffect(() => {
        setMode(props.mode || 'inline');
    }, [props.mode]);

    const handleChange = useCallback((checked: boolean) => {
        setTmpChecked(checked);
        if (onChange) {
            onChange(checked)
        }
    }, [onChange]);

    return (
        <div
            className={'checkbox-component component ' + (tmpChecked ? 'checked ' : '') + (showFullLabel ? 'full-label ' : '')}
            onClick={(event) => {
                if (mode === "block") {
                    event.preventDefault();
                    handleChange(!checked);
                }
            }}>
            <label className={"checkbox-container " + (inputProps?.disabled ? 'disable' : '')}>
                {showLabel && <LabelComponent required={required} title={labelText || ''}/>}
                <input
                    checked={checked}
                    id={id}
                    onChange={(e: any) => {
                        if (mode === "inline") {
                            handleChange(e.target.checked);
                        }
                    }}
                    {...inputProps}
                    className={'checkbox-field'}
                    type="checkbox"
                    value={value}
                />
                <span className="checkbox-checkmark"/>
            </label>
            {(errorMessage && hasError) && (
                <ErrorTextComponent error={errorMessage}/>
            )}
        </div>
    );

};

export default CheckBoxComponent;