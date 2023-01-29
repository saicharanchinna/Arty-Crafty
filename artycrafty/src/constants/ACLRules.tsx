import {AclRole} from "../shared/models/acl.model";
import * as UserRoles from './UserRoles';

export interface IACLRULES {
    HOME:AclRole[];
    DASHBOARD: AclRole[];
    LABS: AclRole[];
    FACILITY: AclRole[];
    FACILITY_ADD: AclRole[];
    FACILITY_DETAILS_LOCATIONS_ROUTE: AclRole[];
    LOCATION: AclRole[];
    LOCATION_ADD: AclRole[];
    LOCATION_DETAILS:AclRole[];
    LOCATION_DETAILS_TEST_ORDER_ROUTE: AclRole[];
    TEST_ORDER: AclRole[];
    TEST_ORDER_VIEW: AclRole[];
    PATIENT: AclRole[];
    SAMPLE_LIST: AclRole[];
    ACCESSIONING: AclRole[];
    TEST_PANEL: AclRole[];
    TEST_PANEL_ADD: AclRole[];
    TEST_PANEL_DETAILS_ROUTE: AclRole[];
    RESULT: AclRole[];
    SEND_OUTS: AclRole[];
    QR_CODES: AclRole[];
    BULK_UPLOAD: AclRole[];
}