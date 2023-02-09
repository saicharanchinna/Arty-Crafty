import "./RadioButtonComponent.scss";
import LabelComponent from "../label/LabelComponent";
import ErrorTextComponent from "../error/ErrorTextComponent";
import {useCallback, useRef} from "react";
import StatusCardComponent from "../../status-card/statusCardComponent";

export interface RadioButtonGroupComponentProps {
    name: string;
    options?: any[];
    isValueBoolean?: boolean; // ***** this must be TRUE when value is a boolean type value *****
    direction?: "row" | "column";
    required?: boolean;
    onUpdate?: Function;
    value?: any;
    id?: any,
    labelText?: string;
    showLabel?: boolean;
    displayWith?: (option: any) => any;
    compareWith?: (option: any) => any;
    hasError?: boolean;
    errorMessage?: any;
}

const RadioButtonGroupComponent = (props: RadioButtonGroupComponentProps) => {

    const {options, onUpdate, labelText, value, required, name, errorMessage, hasError, id} = props;

    let {direction, displayWith, compareWith, isValueBoolean} = props;

    if (!direction) direction = "column";

    const showLabel =
        props.showLabel !== undefined
            ? props.showLabel
            : !!(labelText && labelText.length > 0);

    return (
        <div className={'radio-button-group-component component'} id={id}>
            {showLabel && <LabelComponent required={required} title={labelText || ''} hasError={hasError}/>}
            <div className={`radio-button-group-container ${direction}`}>
                {
                    (options && options?.length > 0) && options.map((option: any, index) => {
                        return <RadioButtonComponent
                            key={option['code']}
                            value={value}
                            option={option}
                            displayWith={displayWith}
                            compareWith={compareWith}
                            onUpdate={(value: any) => {
                                if (onUpdate) {
                                    onUpdate(value);
                                }
                            }
                            }
                            isValueBoolean={isValueBoolean}
                            name={name}/>
                    })
                }
                {
                    (options?.length === 0) && <StatusCardComponent>
                        No Options Provided
                    </StatusCardComponent>
                }
                {(errorMessage && hasError) && (
                    <ErrorTextComponent error={errorMessage}/>
                )}
            </div>
        </div>
    );

};

export default RadioButtonGroupComponent;


interface RadioButtonComponentProps {
    option: any;
    name: string;
    onUpdate?: Function;
    value: any;
    isValueBoolean?: boolean;
    displayWith?: (option: any) => any;
    compareWith?: (option: any) => any;
}

export const RadioButtonComponent = (props: RadioButtonComponentProps) => {

    const {name, option, onUpdate, value} = props;
    const radioRef = useRef<HTMLInputElement | null>();
    let {displayWith} = props;

    const compareWith = props.compareWith ? props.compareWith : (option: any) => option?.code;
    if (!displayWith) displayWith = (option: any) => option?.title;

    const handleChange = useCallback((value: any) => {
        if (onUpdate) {
            onUpdate(value);
        }
    }, [onUpdate]);

    return <>
        <div className={`radio-button-component component ${compareWith(option) === value ? 'checked' : ''}`}
             onClick={() => {
                 console.log("clicked", "name", name, compareWith(option));
                 handleChange(compareWith(option));
             }}>
            <input
                type="radio"
                id={name + '.' + compareWith(option)}
                name={name}
                ref={ref => (radioRef.current = ref)}
                className={`radio-button-control-input`}
                onChange={(event: any) => {
                    handleChange(event.currentTarget.value)
                }}
                value={compareWith(option)}
                defaultChecked={compareWith(option) === value}
            />
            <label
                className="radio-button-control-label"
                htmlFor={name + '.' + compareWith(option)}
            >
                {displayWith(option)}
            </label>

        </div>
    </>;

}
