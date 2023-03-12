import {
    HAND_SHAKE,
    HOME_ROUTE, HOW_IT_WORKS_ROUTE, INTAKE_FORM_ROUTE,
    NOT_FOUND_ROUTE, PROFILE_PAGE_ROUTE,
    REGISTER_ROUTE, TEST_RESULT_ROUTE,
    TEST_ROUTE,
} from "../../constants/RoutesConfig";

const HomeRoute = () => {
    return HOME_ROUTE;
}

const HowItWorksRoute = () => {
    return HOW_IT_WORKS_ROUTE;
}

const RegisterRoute = () => {
    return REGISTER_ROUTE;
}

const IntakeFormRoute = () => {
    return INTAKE_FORM_ROUTE;
}

const TestResultRoute = () => {
    return TEST_RESULT_ROUTE;
}

const NotFoundRoute = () => {
    return NOT_FOUND_ROUTE;
}

const TestRoute = () => {
    return TEST_ROUTE;
}

const HandShake = () => {
    return HAND_SHAKE;
}

const ArtistProfileRoute = () => {
    return PROFILE_PAGE_ROUTE;
}
const RouteConfigService = {
    HomeRoute,
    HowItWorksRoute,
    RegisterRoute,
    IntakeFormRoute,
    TestResultRoute,
    NotFoundRoute,
    TestRoute,
    HandShake,
    ArtistProfileRoute
}

export default RouteConfigService;
