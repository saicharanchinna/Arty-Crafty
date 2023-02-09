
export const GET_TEST_PANEL_INTAKE_FORM = "GET_TEST_PANEL_INTAKE_FORM";
export const SET_TEST_PANEL_INTAKE_FORM = "SET_TEST_PANEL_INTAKE_FORM";
export const ERROR_TEST_PANEL_INTAKE_FORM = "ERROR_TEST_PANEL_INTAKE_FORM";

export const getTestPanelIntakeForm = (testPanelCode: string) => {
    return {type: GET_TEST_PANEL_INTAKE_FORM,  payload: testPanelCode}
}

export const setTestPanelIntakeForm = (data: any) => {
    return {type: SET_TEST_PANEL_INTAKE_FORM, payload: data}
}

export const errorTestPanelIntakeForm = (error: any) => {
    return {type: ERROR_TEST_PANEL_INTAKE_FORM, payload: error}
}