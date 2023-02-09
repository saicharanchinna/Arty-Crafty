import {Field, FieldProps, Form, Formik} from 'formik';
import "./DesignSystemScreen.scss";
import * as Yup from 'yup';
import FormikInputComponent from "../../shared/components/core/formik-input/FormikInputComponent";
import ButtonComponent from "../../shared/components/core/button/ButtonComponent";
import FormikCheckboxComponent from "../../shared/components/core/formik-checkbox/FormikCheckboxComponent";
import FormikSelectDropdownComponent
    from "../../shared/components/core/formik-select-dropdown/FormikSelectDropdownComponent";
import React from "react";
import FormikPhoneInputComponent from "../../shared/components/core/formik-phone-input/FormikPhoneInputComponent";
import FormikDatePickerComponent from "../../shared/components/core/formik-date-picker/FormikDatePickerComponent";
import {Col, Container, Row} from 'react-grid-system';
import StatusCardComponent from "../../shared/components/status-card/statusCardComponent";
import FormikRadioButtonGroupComponent
    from "../../shared/components/core/formik-radio-button-group/FormikRadioButtonGroupComponent";
import FormikTemperatureRangeSliderComponent
    from "../../shared/components/core/formik-temperature-range-slider/FormikTemperatureRangeSliderComponent";

interface FormScreenProps {

}

const formValidation = Yup.object({
    name: Yup.string().required('Name is required.'),
    email: Yup.string().email().required('Email is required.'),
    gender: Yup.mixed().required('Gender is required.'),
    zipCode: Yup.mixed().required('ZipCode is required.'),
    tnc: Yup.boolean().required('TnC is required.'),
    temperature: Yup.boolean().required('TnC is required.'),
    phoneNumber: Yup.string().required('Phone Number is required.'),
    // date: Yup.string().required('Date is required.'),
});

interface FormType {
    name: string;
    email: string;
    gender: any;
    zipCode: any;
    phoneNumber: string;
    date: any;
    temperature: number;
    tnc: boolean;
}

const InitialValues : FormType = {
    name: "",
    email: "",
    gender: null,
    zipCode: null,
    phoneNumber: "",
    date: new Date(),
    temperature: 98.6,
    tnc: true
}

const genderOptions = [
    {code: 'male', title: 'Male'},
    {code: 'female', title: 'Female'},
    {code: 'other', title: 'Other'}
];

const DesignSystemScreen = (props: FormScreenProps) => {
   
    return (
        <div className="screen" style={{padding: "10px 15px"}}>
            <Container>
                <Row>
                    <Col sm={12} md={2} lg={4}>
                    </Col>
                    <Col sm={12} md={8} lg={4} >
                        <h2 style={{textAlign: "center"}}>Register</h2>
                        <Formik
                            initialValues={InitialValues}
                            validateOnChange={true}
                            validationSchema={formValidation}
                            onSubmit={(values, formikHelpers) => {
                                console.log(values);
                            }}
                        >
                            {({isSubmitting, isValid}) => (
                                <Form className={"design-system-holder"}>
                                    <Field name={'name'}>
                                        {
                                            (field: FieldProps) => (
                                                <FormikInputComponent
                                                    placeholder={'Enter Name'}
                                                    labelText={'Name'}
                                                    required={true}
                                                    formikField={field}
                                                />
                                            )
                                        }
                                    </Field>
                                    <Field name={'email'}>
                                        {
                                            (field: FieldProps) => (
                                                <FormikInputComponent
                                                    placeholder={'Enter Email'}
                                                    labelText={'Email'}
                                                    required={true}
                                                    formikField={field}
                                                />
                                            )
                                        }
                                    </Field>
                                    <Field name={'zipCode'}>
                                        {
                                            (field: FieldProps) => (
                                                <FormikSelectDropdownComponent
                                                    formikField={field}
                                                    fullWidth={true}
                                                    labelText={"Zip Code"}
                                                    required={true}
                                                    isClearable={true}
                                                    searchable={true}
                                                    searchMode={"serverSide"}
                                                    method={"get"}
                                                    multiple={false}
                                                    dataListKey={"data.docs"}
                                                    url={"https://api.sdi.teric.services/test/infrastructure/staticData/getZipCodes"}
                                                    displayWith={(option: any) => option?.zipcode}
                                                    compareWith={(option: any) => option?.zipcode}
                                                    placeholder={"Search for ZipCodes"}
                                                    defaultData={[
                                                        {
                                                            "zipcode": "Other",
                                                        }
                                                    ]}
                                                />
                                            )
                                        }
                                    </Field>
                                    <Field name={'phoneNumber'}>
                                        {
                                            (field: FieldProps) => (
                                                <FormikPhoneInputComponent
                                                    placeholder={'Enter Phone Number'}
                                                    labelText={'Phone Number'}
                                                    required={true}
                                                    onUpdate={(value: any) => value}
                                                    formikField={field}
                                                />
                                            )
                                        }
                                    </Field>
                                    <Field name={'gender'}>
                                        {
                                            (field: FieldProps) => (
                                                <FormikRadioButtonGroupComponent
                                                    formikField={field}
                                                    labelText={"Gender"}
                                                    required={true}
                                                    direction={"row"}
                                                    isValueBoolean={true}
                                                    displayWith={(option: any) => option?.title}
                                                    compareWith={(option: any) => option?.code}
                                                    onUpdate={(value: any) => {
                                                        console.log("value", value);
                                                    }}
                                                    options={genderOptions}/>
                                            )
                                        }
                                    </Field>
                                    <Field name={'date'}>
                                        {
                                            (field: FieldProps) => (
                                                <FormikDatePickerComponent
                                                    formikField={field}
                                                    labelText={'Date'}
                                                    showLabel={true}
                                                    required={true}
                                                    onUpdate={(value: any) => console.log(value)}
                                                />
                                            )
                                        }
                                    </Field>
                                    <Field name={'temperature'}>
                                        {
                                            (field: FieldProps) => (
                                                <FormikTemperatureRangeSliderComponent
                                                    formikField={field}
                                                    onUpdate={(value)=>{
                                                        console.log(value);
                                                    }}
                                                />
                                            )
                                        }
                                    </Field>
                                    <Field name={'tnc'}>
                                        {
                                            (field: FieldProps) => (
                                                <FormikCheckboxComponent
                                                    labelText={'I agree to TnC'}
                                                    required={true}
                                                    showFullLabel={true}
                                                    formikField={field}
                                                />
                                            )
                                        }
                                    </Field>
                                    <StatusCardComponent type={"default"} styles={{ marginBottom: "20px" }}>
                                        A Terms and Conditions agreement (also known as Terms of Use or Terms of Service) as well as
                                        a Privacy Policy are legally binding agreements between you (the company, mobile app
                                        developer, website owner, ecommerce store owner, etc.) and the people using your website,
                                        app, service, etc.
                                    </StatusCardComponent>
                                    <ButtonComponent
                                        fullWidth={true}
                                        isLoading={isSubmitting}
                                        disabled={isSubmitting}
                                        type={"submit"}>
                                        Submit
                                    </ButtonComponent>
                                </Form>
                            )}
                        </Formik>
                    </Col>
                    <Col sm={12} md={2} lg={4}>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};

export default DesignSystemScreen;
