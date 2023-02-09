import {APIConfig} from "../../constants";
import {call, put, takeEvery} from "redux-saga/effects";
import {CommonService} from "../../shared/services";
import {
    errorTestPanelIntakeForm,
    GET_TEST_PANEL_INTAKE_FORM,
    setTestPanelIntakeForm
} from "../actions/test-panel.action";
import {IAPIResponseType} from "../../shared/models/api.model";
import {IPatientIntakeForm} from "../../shared/models/test-panel.model";

function fetchTestPanelIntakeForm(testPanelCode: string): Promise<IAPIResponseType<IPatientIntakeForm>> {
    return CommonService._api.get(APIConfig.GET_TEST_PANEL_INTAKE_FORM.URL(testPanelCode))
        .then((response: IAPIResponseType<IPatientIntakeForm>) => {
            return response?.data;
        })
        .catch((error: IAPIResponseType<IPatientIntakeForm>) => {
            throw error
        })
}

function* getTestPanelIntakeForm({payload}: any) {
    try {
        // @ts-ignore
        const patientIntakeFormData: IPatientIntakeForm = yield call(fetchTestPanelIntakeForm, payload);
        yield put(setTestPanelIntakeForm(patientIntakeFormData || undefined));
    } catch (error) {
        yield put(errorTestPanelIntakeForm(error));
    }
}

export default function* testPanelSaga() {
    yield takeEvery(GET_TEST_PANEL_INTAKE_FORM, getTestPanelIntakeForm);

}
