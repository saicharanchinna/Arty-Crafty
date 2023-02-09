import {IActionModel} from "../../shared/models/action.model";
import {GET_TEST_PANEL_INTAKE_FORM, SET_TEST_PANEL_INTAKE_FORM, ERROR_TEST_PANEL_INTAKE_FORM} from "../actions/test-panel.action";
import {IIntakeFormQuestion, IPatientIntakeForm} from "../../shared/models/test-panel.model";
import {CommonService} from "../../shared/services";

export interface ITestPanelReducerState {
    currentTestPanelCode: string;
    isPatientIntakeFormLoading: boolean;
    isPatientIntakeFormLoaded: boolean;
    isPatientIntakeFormLoadingFailed: boolean;
    patientIntakeFormData: IPatientIntakeForm | undefined;
    patientIntakeFormQuestionsFlatList?: IIntakeFormQuestion[] | [];
    patientIntakeFormError: any;
}

const INITIAL_STATE: ITestPanelReducerState = {
    currentTestPanelCode: "covid",
    isPatientIntakeFormLoading: false,
    isPatientIntakeFormLoaded: false,
    isPatientIntakeFormLoadingFailed: false,
    patientIntakeFormData: undefined,
    patientIntakeFormError: null,

    // currentTestPanelCode: "covid",
    // isPatientIntakeFormLoading: false,
    // isPatientIntakeFormLoaded: true,
    // isPatientIntakeFormLoadingFailed: false,
    // patientIntakeFormData: IntakeFormData,
    // patientIntakeFormQuestionsFlatList: [],
    // patientIntakeFormError: null
};

const testPanelReducer = (state: ITestPanelReducerState = INITIAL_STATE, action: IActionModel): ITestPanelReducerState => {
    switch (action.type) {
        case GET_TEST_PANEL_INTAKE_FORM:
            return {
                ...state,
                isPatientIntakeFormLoading: true,
            };
        case SET_TEST_PANEL_INTAKE_FORM:
            const testPanelIntakeForm = action.payload;
            return {
                ...state,
                patientIntakeFormData: testPanelIntakeForm,
                isPatientIntakeFormLoading: false,
                isPatientIntakeFormLoaded: true,
                isPatientIntakeFormLoadingFailed: false,
                patientIntakeFormError: null,
                patientIntakeFormQuestionsFlatList: CommonService.getFlatQuestionList(testPanelIntakeForm?.steps),
            };
        case ERROR_TEST_PANEL_INTAKE_FORM:
            return {
                ...state,
                patientIntakeFormData: undefined,
                isPatientIntakeFormLoading: false,
                isPatientIntakeFormLoaded: false,
                isPatientIntakeFormLoadingFailed: true,
                patientIntakeFormError: action.payload
            };
        default:
            return state;
    }
};

export default testPanelReducer;

