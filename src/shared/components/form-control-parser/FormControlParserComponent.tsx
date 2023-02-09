import "./FormControlParserComponent.scss";
import React from "react";
import {IIntakeFormQuestion} from "../../models/test-panel.model";
import {Field, FieldProps} from "formik";
import FormikRadioButtonComponent from "../core/formik-radio-button/FormikRadioButtonComponent";
import FormikInputComponent from "../core/formik-input/FormikInputComponent";
import FormikDatePickerComponent from "../core/formik-date-picker/FormikDatePickerComponent";
import FormikCheckboxComponent from "../core/formik-checkbox/FormikCheckboxComponent";
import FormikSelectDropdownComponent from "../core/formik-select-dropdown/FormikSelectDropdownComponent";
import FormikTemperatureRangeSliderComponent
    from "../core/formik-temperature-range-slider/FormikTemperatureRangeSliderComponent";
import LabelComponent from "../core/label/LabelComponent";
import FormikRadioButtonGroupComponent from "../core/formik-radio-button-group/FormikRadioButtonGroupComponent";

export interface FormControlParserComponentProps {
    question: IIntakeFormQuestion;
    id?: string;
    className?: string;
}

const FormControlParserComponent = (props: FormControlParserComponentProps) => {

    const {question, id, className} = props;

    console.log(question);

    return (
        <div className={'form-control-parser component ' + className} id={id}>
            {
                (question.formControlType === "RadioButtonGroup") && <>
                    <Field name={question.code}>
                        {(formikField: FieldProps) => (
                            <FormikRadioButtonGroupComponent
                                showLabel={question.showLabel}
                                labelText={question.title}
                                direction={question.isHorizontalAlign ? "row" : "column"}
                                formikField={formikField}
                                id={question.code + 'radio_button_group'}
                                options={question.options}/>
                        )}
                    </Field>
                </>
            }
            {
                (question.formControlType === "RadioButton") && <>
                    {(question.showLabel && question.title) &&
                    <LabelComponent title={question.title}/>
                    }
                    {question?.options?.map((option, index) => {
                        return <div
                            className={'radio-button-group-component component ' + className}
                            key={option.title + index}>
                            <Field name={question.code}>
                                {(formikField: FieldProps) => (
                                    <>
                                        <FormikRadioButtonComponent formikField={formikField} option={option}/>
                                        {(formikField.field.value === option.code) &&
                                        <div className={option.isHorizontalAlign ? 'horizontal-align' : ''}>
                                            {
                                                (option?.questions) && <>
                                                    {
                                                        option.questions.map((optionQuestion, index) => {
                                                            return (
                                                                <FormControlParserComponent id={'sub-qs'}
                                                                                            key={optionQuestion.title + index}
                                                                                            className={"sub-question"}
                                                                                            question={optionQuestion}/>
                                                            )
                                                        })
                                                    }
                                                </>
                                            }
                                        </div>}
                                    </>
                                )}
                            </Field>

                        </div>
                    })}
                </>
            }
            {
                question.formControlType === "TextBox" && <>
                    <Field name={question.code}>
                        {(formikField: FieldProps) => (
                            <FormikInputComponent
                                formikField={formikField}
                                fullWidth={question.isFormControlFullWidth}
                                labelText={question.title}
                                id={question.code + 'text_box'}
                                placeholder={question.placeHolder}
                                showLabel={question.showLabel}
                            />
                        )}
                    </Field>
                </>
            }
            {
                question.formControlType === "TemperatureSlider" && <>
                    <Field name={question.code}>
                        {(formikField: FieldProps) => (
                            <FormikTemperatureRangeSliderComponent
                                formikField={formikField}
                                id={question.code + 'range_slider'}
                            />
                        )}
                    </Field>
                </>
            }
            {
                question.formControlType === "DatePicker" && <>
                    <Field name={question.code}>
                        {(formikField: FieldProps) => (
                            <FormikDatePickerComponent
                                formikField={formikField}
                                id={question.code + 'date_picker'}
                                minDate={new Date('2020-1-1')}
                                maxDate={new Date()}
                            />
                        )}
                    </Field>
                </>
            }
            {
                question.formControlType === "SelectDropDown" &&
                <div className={'dropdown-group-component ' + className}>
                    <Field name={question.code}>
                        {(formikField: FieldProps) => (
                            <FormikSelectDropdownComponent
                                formikField={formikField}
                                data={question.options}
                                size={question.formControlSize}
                                isClearable={false}
                                compareWith={(option) => option.code}
                                multiple={question.isMultiSelection}
                                fullWidth={question.isFormControlFullWidth}
                                labelText={question.title}
                                id={question.code + 'dd'}
                                showLabel={question.showLabel}
                                placeholder={question.placeHolder}
                                // onUpdate={(value: any) => {
                                //     if (value !== null) {
                                //         console.log(value)
                                //         if(onSelectOptionSelected){
                                //             console.log(value)
                                //             onSelectOptionSelected(value)
                                //         }
                                //     }
                                // }}
                            />
                        )}
                    </Field>
                </div>
            }
            {
                question.formControlType === "CheckBox" && <>
                    {question?.options?.map((option, index) => {
                        // return <FieldArray key={index} name={question.name} render={(renderProps) => (
                        return <div className={'check-box-group-component component ' + className}
                                    key={option.title + index}>
                            <Field name={question.code + '.' + option.code}>
                                {(formikField: FieldProps) => (
                                    <>
                                        <FormikCheckboxComponent
                                            formikField={formikField}
                                            labelText={option?.title}
                                            mode={"block"}
                                            id={question.code + 'check_box'}
                                            onUpdate={(isChecked: boolean) => {
                                                if (question?.isHavingNoneOption) {
                                                    if (option.code.startsWith('none') && isChecked) {
                                                        question.options?.forEach(option => {
                                                            if (!option.code.startsWith('none')) {
                                                                formikField.form.setFieldValue(question.code + '.' + option.code, false);
                                                            }
                                                        })
                                                    } else {
                                                        question.options?.forEach(option => {
                                                            if (option.code.startsWith('none')) {
                                                                formikField.form.setFieldValue(question.code + '.' + option.code, false);
                                                            }
                                                        })
                                                    }
                                                }
                                            }}
                                            showFullLabel={true}/>
                                        {
                                            formikField.field.value &&
                                            <div className={option.isHorizontalAlign ? 'horizontal-align' : ''}>
                                                {
                                                    (option?.questions) && <>
                                                        {
                                                            option.questions.map((optionQuestion, index) => (
                                                                <FormControlParserComponent
                                                                    id={'sub-qs'}
                                                                    key={optionQuestion.title + index}
                                                                    className={"sub-question"}
                                                                    question={optionQuestion}/>
                                                            ))
                                                        }
                                                    </>
                                                }
                                            </div>
                                        }
                                    </>
                                )}
                            </Field>

                        </div>
                    })}
                </>
            }
        </div>
    );

};

export default FormControlParserComponent;