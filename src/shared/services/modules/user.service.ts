import {ApiService} from "../index";
import {APIConfig} from "../../../constants";

const getAccountExecutiveList = (payload: any) => {
    // @ts-ignore
    return ApiService[APIConfig.USER_LIST.METHOD](APIConfig.USER_LIST.URL, payload);
}

const registerPatient = (payload: any) => {
    // @ts-ignore
    return ApiService[APIConfig.Register.METHOD](APIConfig.Register.URL, payload);
}

const savePatientIntakeForm = (token: string, payload: any) => {
    // @ts-ignore
    return ApiService[APIConfig.SAVE_TEST_PANEL_INTAKE_FORM.METHOD](APIConfig.SAVE_TEST_PANEL_INTAKE_FORM.URL(token), payload);
}

const getTestResults = (payload: any) => {
    // @ts-ignore
    return ApiService[APIConfig.GET_TEST_RESULT.METHOD](APIConfig.GET_TEST_RESULT.URL, payload);
}

const UserService = {
    getAccountExecutiveList,
    registerPatient,
    savePatientIntakeForm,
    getTestResults
}

export default UserService;
