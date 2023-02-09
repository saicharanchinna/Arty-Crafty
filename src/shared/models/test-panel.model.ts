export interface IPatientIntakeForm {
    meta: IIntakeFormMetaData;
    steps?: (IIntakeFormStepData)[] | undefined;
}

export interface IIntakeFormMetaData {
    id: number;
    panelDetails: IIntakeFormPanelDetails;
    version: number;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
    stepsOrder?: (number)[] | undefined;
}

export interface IIntakeFormPanelDetails {
    code: string;
    name: string;
}

export interface IIntakeFormStepData {
    stepId: number;
    current: number;
    total: number;
    title: string;
    progressInfo: IProgressInfo;
    assetUrl: string;
    toolTipInfo: string;
    canNavigateBack: boolean;
    proceedButtonText: string;
    canSkipTheStep: boolean;
    questions?: (IIntakeFormQuestion)[] | undefined;
}

export interface IProgressInfo{
    progress: number;
    icon?: string;
    title?: string;
    description?:string;
}

export interface IIntakeFormQuestion {
    id: number;
    title: string;
    placeHolder: string;
    code: string;
    subTitle?: string;
    answer?: any;
    mlref?: string;
    autoHeight?: boolean;
    showLabel?: boolean;
    ansType?: string;
    formControlType: "RadioButton" | "TemperatureSlider" | "CheckBox" | "DatePicker" | "SelectDropDown" | "TextBox" | "RadioButtonGroup";
    formControlSize?: "sm" | "lg" | "xl";
    isMultiSelection: boolean;
    isFormControlFullWidth?: boolean;
    isRequired: boolean;
    isHorizontalAlign?: boolean;
    options?: (IIntakeFormQuestionOption)[] | undefined;
    validationType: "mixed" | 'boolean';
    validations?: any[];
    isHavingNoneOption?: boolean;
}

export interface IIntakeFormQuestionOption {
    id: number;
    code: string;
    title: string;
    mlref?: string;
    isHorizontalAlign?: boolean;
    questions?: (IIntakeFormQuestion)[] | undefined;
}