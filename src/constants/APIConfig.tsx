import ENV from "./ENV";

const APIConfig = {
    LOGIN: {
        URL: ENV.API_URL + "/user/register",
        METHOD: "post"
    },
    CHECK_LOGIN: {
        URL: ENV.API_URL + "/validatePatientToken",
        METHOD: "get"
    },
    LOGOUT: {
        URL: ENV.API_URL + "/user/logout",
        METHOD: "post"
    },
    Register: {
        URL: ENV.API_URL + "/patient/register",
        METHOD: "post"
    },
    ZIPCODE_LIST: {
        URL: ENV.API_URL +  "/getZipCodes",
        METHOD: "get"
    },
    STATE_LIST: {
        URL: ENV.API_URL +  "/getStates",
        METHOD: "get"
    },
    CITY_LIST: {
        URL: ENV.API_URL +  "/getCities",
        METHOD: "get"
    },
    GET_TEST_PANEL_INTAKE_FORM: {
        URL: (token: string)=> `${ENV.API_URL}/getFormData/${token}`,
        METHOD: "get"
    },
    SAVE_TEST_PANEL_INTAKE_FORM: {
        URL: (token: string)=> `${ENV.API_URL}/saveFormData/${token}`,
        METHOD: "post"
    },
    GET_TEST_RESULT: {
        URL: ENV.API_URL + "/patient/getResults",
        METHOD: "post"
    },
}

export default APIConfig;
