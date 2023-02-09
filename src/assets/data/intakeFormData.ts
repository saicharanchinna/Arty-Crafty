// import {IPatientIntakeForm} from "../../shared/models/test-panel.model";

export const IntakeFormData: any = {
    "stepsData": {
        "stepId": 1,
        "title": "Vaccine Status",
        "progressInfo": {
            progress: 16.66
        },
        "assetUrl": "https://tericsoftsdinewgk.blob.core.windows.net/static-images/Vaccine Status.svg",
        "toolTipInfo": "<div>If tested positive for COVID-19 within the last 90 days and recovered, you do not need to quarantine or else isolation is required. For more information read at  <a href='https://www.cdc.gov/coronavirus/2019-ncov/your-health/quarantine-isolation.html' rel='noreferrer' target='_blank'>Source(CDC)</a></div>",
        "canNavigateBack": false,
        "proceedButtonText": "Next",
        "canSkipTheStep": false,
        "questions": [
            {
                "id": 1,
                "title": "Have you previously tested positive for COVID-19 ?",
                "name": "Previously tested positive for COVID19",
                "ansType": "*",
                "subTitle": "",
                "formControlType": "RadioButton",
                "isMultiSelection": false,
                "isRequired": true,
                "answer": "",
                "mlref": "70",
                "options": [
                    {
                        "id": 1,
                        "code": "True",
                        "title": "Yes",
                        "isHorizontalAlign": false
                    },
                    {
                        "id": 2,
                        "code": "False",
                        "title": "No",
                        "isHorizontalAlign": false
                    }
                ]
            }
        ],
        "current": 1,
        "total": 6
    },
    // "steps": [
    //
    //     {
    //         "stepId": 2,
    //         "title": "Vaccine Status",
    //         "progressInfo": {
    //             progress: 16.66
    //         }, "assetUrl": "https://tericsoftsdinewgk.blob.core.windows.net/static-images/Vaccine Status.svg",
    //         "toolTipInfo": "<div>CDC recommends COVID-19 vaccines which are effective at protecting, including boosters, for everyone ages 5 years and older. For more information read at <a href='https://www.cdc.gov/coronavirus/2019-ncov/vaccines/stay-up-to-date.html' rel='noreferrer' target='_blank'>Source(CDC)</a></div>",
    //         "canNavigateBack": true,
    //         "proceedButtonText": "Next",
    //         "canSkipTheStep": false,
    //         "questions": [
    //             {
    //                 "id": 1,
    //                 "title": "Have you taken your COVID-19 Vaccine",
    //                 "name": "previously taken the COVID-19 vaccine",
    //                 "ansType": "*",
    //                 "subTitle": "",
    //                 "formControlType": "RadioButton",
    //                 "isMultiSelection": false,
    //                 "isRequired": true,
    //                 "answer": "",
    //                 "mlref": "82",
    //                 "options": [
    //                     {
    //                         "id": 1,
    //                         "code": "True",
    //                         "title": "Yes",
    //                         "isHorizontalAlign": false
    //                     },
    //                     {
    //                         "id": 2,
    //                         "code": "False",
    //                         "title": "No",
    //                         "isHorizontalAlign": false
    //                     }
    //                 ]
    //             }
    //         ],
    //         "current": 1,
    //         "total": 6
    //     },
    //     {
    //         "stepId": 3,
    //         "title": "Antiviral Status",
    //         "progressInfo": {
    //             progress: 33.32
    //         },
    //         "assetUrl": "https://tericsoftsdinewgk.blob.core.windows.net/static-images/Antiviral Status.svg",
    //         "toolTipInfo": "<div>Antiviral treatment may help your body fight COVID-19 by lowering the amount of the virus, or helping your immune system. For more information read at <a href='https://www.cdc.gov/coronavirus/2019-ncov/your-health/treatments-for-severe-illness.html' rel='noreferrer' target='_blank'>Source(CDC)</a></div>",
    //         "canNavigateBack": true,
    //         "proceedButtonText": "Next",
    //         "canSkipTheStep": false,
    //         "questions": [
    //             {
    //                 "id": 1,
    //                 "title": "Have you taken your COVID-19 Antiviral",
    //                 "name": "Have you taken your COVID-19 Antiviral",
    //                 "ansType": "*",
    //                 "subTitle": "",
    //                 "formControlType": "RadioButton",
    //                 "isMultiSelection": false,
    //                 "isRequired": true,
    //                 "options": [
    //                     {
    //                         "id": 1,
    //                         "code": "True",
    //                         "title": "Yes",
    //                         "isHorizontalAlign": false
    //                     },
    //                     {
    //                         "id": 2,
    //                         "code": "False",
    //                         "title": "No",
    //                         "isHorizontalAlign": false
    //                     }
    //                 ]
    //             }
    //         ],
    //         "current": 2,
    //         "total": 6
    //     },
    //     {
    //         "stepId": 4,
    //         "title": "Antiviral Status",
    //         "progressInfo": {
    //             progress: 33.32
    //         },
    //         "assetUrl": "https://tericsoftsdinewgk.blob.core.windows.net/static-images/Antiviral Status.svg",
    //         "toolTipInfo": "<div>Some treatments might have side effects or interact with other medications you are taking. For more information read at <a href='https://www.cdc.gov/coronavirus/2019-ncov/your-health/treatments-for-severe-illness.html' rel='noreferrer' target='_blank'>Source(CDC)</a></div>",
    //         "canNavigateBack": true,
    //         "proceedButtonText": "Next",
    //         "canSkipTheStep": false,
    //         "questions": [
    //             {
    //                 "id": 1,
    //                 "title": "Which COVID-19 Antiviral did you take?",
    //                 "name": "Which COVID-19 Antiviral did you take?",
    //                 "ansType": "*",
    //                 "subTitle": "",
    //                 "formControlType": "RadioButton",
    //                 "isMultiSelection": false,
    //                 "isRequired": true,
    //                 "answer": "",
    //                 "options": [
    //                     {
    //                         "id": 1,
    //                         "code": "pfizer",
    //                         "title": "Pfizer",
    //                         "isHorizontalAlign": false
    //                     },
    //                     {
    //                         "id": 2,
    //                         "code": "moderna",
    //                         "title": "Moderna",
    //                         "isHorizontalAlign": false
    //                     },
    //                     {
    //                         "id": 3,
    //                         "code": "astrazeneca",
    //                         "title": "AstraZeneca",
    //                         "isHorizontalAlign": false
    //                     },
    //                     {
    //                         "id": 3,
    //                         "code": "others",
    //                         "title": "Others",
    //                         "isHorizontalAlign": false,
    //                         "questions": [
    //                             {
    //                                 "id": 1,
    //                                 "title": "Please mention the COVID-19 Antiviral name below:",
    //                                 "ansType": "*",
    //                                 "name": "Please mention the COVID-19 Antiviral name below:",
    //                                 "subTitle": "Please mention the COVID-19 Antiviral name below:",
    //                                 "formControlType": "TextBox",
    //                                 "isMultiSelection": false,
    //                                 "answer": "",
    //                                 "isRequired": true
    //                             }
    //                         ]
    //                     }
    //                 ]
    //             }
    //         ],
    //         "current": 2,
    //         "total": 6
    //     },
    //     {
    //         "stepId": 5,
    //         "title": "Antiviral Status",
    //         "progressInfo": {
    //             progress: 33.32
    //         },
    //         "assetUrl": "https://tericsoftsdinewgk.blob.core.windows.net/static-images/Antiviral Status.svg",
    //         "toolTipInfo": "<div>Medications to treat COVID-19 must be prescribed by a healthcare provider and started soon after diagnosis to be effective. For more information read at <a href='https://www.cdc.gov/coronavirus/2019-ncov/your-health/treatments-for-severe-illness.html' rel='noreferrer' target='_blank'>Source(CDC)</a></div>",
    //         "canNavigateBack": true,
    //         "proceedButtonText": "Next",
    //         "canSkipTheStep": false,
    //         "questions": [
    //             {
    //                 "id": 1,
    //                 "title": "When did you take your COVID-19 Antiviral?",
    //                 "ansType": "*",
    //                 "name": "When did you take your COVID-19 Antiviral?",
    //                 "subTitle": "",
    //                 "formControlType": "DatePicker",
    //                 "isMultiSelection": false,
    //                 "answer": "",
    //                 "isRequired": true
    //             }
    //         ],
    //         "current": 2,
    //         "total": 6
    //     },
    //     {
    //         "stepId": 6,
    //         "title": "Symptoms Assessments",
    //         "progressInfo": {
    //             progress: 48.99
    //         },
    //         "assetUrl": "https://tericsoftsdinewgk.blob.core.windows.net/static-images/Symptoms Assessment.svg",
    //         "toolTipInfo": "<div>Symptoms may appear 2-14 days after exposure to the virus. People with these symptoms may have COVID-19. For more information read at <a href='https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html' rel='noreferrer' target='_blank'>Source(CDC)</a></div>",
    //         "canNavigateBack": true,
    //         "proceedButtonText": "Next",
    //         "canSkipTheStep": false,
    //         "questions": [
    //             {
    //                 "id": 1,
    //                 "title": "Is there any loss of:",
    //                 "name": "Is there any loss of:",
    //                 "ansType": "objectKeys",
    //                 "subTitle": "Select the applicable conditions listed below if you have been suffering in previous days with a loss of any of the following",
    //                 "formControlType": "CheckBox",
    //                 "isMultiSelection": true,
    //                 "isRequired": true,
    //                 "answer": "",
    //                 "options": [
    //                     {
    //                         "id": 1,
    //                         "code": "taste",
    //                         "mlref": "33",
    //                         "title": "Taste",
    //                         "isHorizontalAlign": false
    //                     },
    //                     {
    //                         "id": 2,
    //                         "code": "smell",
    //                         "title": "Smell",
    //                         "mlref": "34",
    //                         "isHorizontalAlign": false
    //                     },
    //                     {
    //                         "id": 3,
    //                         "code": "appetite",
    //                         "title": "Appetite",
    //                         "mlref": "35",
    //                         "isHorizontalAlign": false
    //                     },
    //                     {
    //                         "id": 4,
    //                         "code": "no loss of smell-test-appetite",
    //                         "title": "None",
    //                         "mlref": "36",
    //                         "isHorizontalAlign": false
    //                     }
    //                 ]
    //             }
    //         ],
    //         "current": 3,
    //         "total": 6
    //     },
    //     {
    //         "stepId": 7,
    //         "title": "Symptoms Assessments",
    //         "progressInfo": {
    //             progress: 48.99
    //         },
    //         "assetUrl": "https://tericsoftsdinewgk.blob.core.windows.net/static-images/Symptoms Assessment.svg",
    //         "toolTipInfo": "<div>Symptoms may appear 2-14 days after exposure to the virus. People with these symptoms may have COVID-19. For more information read at <a href='https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html' rel='noreferrer' target='_blank'>Source(CDC)</a></div>",
    //         "canNavigateBack": true,
    //         "proceedButtonText": "Next",
    //         "canSkipTheStep": false,
    //         "questions": [
    //             {
    //                 "id": 1,
    //                 "title": "Are you having Cough?",
    //                 "name": "Are you having Cough?",
    //                 "ansType": "*",
    //                 "subTitle": "",
    //                 "formControlType": "RadioButton",
    //                 "isMultiSelection": false,
    //                 "answer": "",
    //                 "isRequired": true,
    //                 "options": [
    //                     {
    //                         "id": 1,
    //                         "code": "dry cough",
    //                         "title": "Dry Cough",
    //                         "mlref": "37",
    //                         "isHorizontalAlign": false
    //                     },
    //                     {
    //                         "id": 2,
    //                         "code": "cough with blood",
    //                         "title": "Cough With Blood",
    //                         "mlref": "38",
    //                         "isHorizontalAlign": false
    //                     },
    //                     {
    //                         "id": 3,
    //                         "code": "cough with mucus",
    //                         "mlref": "39",
    //                         "title": "Cough with mucus",
    //                         "isHorizontalAlign": false
    //                     },
    //                     {
    //                         "id": 4,
    //                         "code": "no cough",
    //                         "title": "None",
    //                         "mlref": "40",
    //                         "isHorizontalAlign": false
    //                     }
    //                 ]
    //             }
    //         ],
    //         "current": 3,
    //         "total": 6
    //     },
    //     {
    //         "stepId": 8,
    //         "title": "Symptoms Assessments",
    //         "progressInfo": {
    //             progress: 48.99
    //         },
    //         "assetUrl": "https://tericsoftsdinewgk.blob.core.windows.net/static-images/Symptoms Assessment.svg",
    //         "toolTipInfo": "<div>Anyone can have mild to severe symptoms. People with these symptoms may have COVID-19. For more information read at <a href='https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html' rel='noreferrer' target='_blank'>Source(CDC)</a></div>",
    //         "canNavigateBack": true,
    //         "proceedButtonText": "Next",
    //         "canSkipTheStep": false,
    //         "questions": [
    //             {
    //                 "id": 1,
    //                 "title": "Select the current symptoms you are experiencing from the list below:",
    //                 "name": "Select the current symptoms you are experiencing from the list below:",
    //                 "subTitle": "",
    //                 "formControlType": "CheckBox",
    //                 "isMultiSelection": true,
    //                 "isRequired": true,
    //                 "answer": "",
    //                 "ansType": "objectKeys",
    //                 "options": [
    //                     {
    //                         "id": 1,
    //                         "code": "shortness of breath",
    //                         "title": "Shortness Of Breath",
    //                         "isHorizontalAlign": true,
    //                         "mlref": "41",
    //                         "questions": [
    //                             {
    //                                 "id": 1,
    //                                 "title": "Severity Rating:",
    //                                 "name": "Shortness Of Breath Severity Rating:",
    //                                 "ansType": "*",
    //                                 "subTitle": "",
    //                                 "isHorizontalAlign": true,
    //                                 "showLabel": true,
    //                                 "formControlType": "RadioButtonGroup",
    //                                 "isMultiSelection": false,
    //                                 "isRequired": true,
    //                                 "options": [
    //                                     {
    //                                         "id": 1,
    //                                         "code": "mild",
    //                                         "title": "Mild"
    //                                     },
    //                                     {
    //                                         "id": 2,
    //                                         "code": "moderate",
    //                                         "title": "Moderate"
    //                                     },
    //                                     {
    //                                         "id": 3,
    //                                         "code": "critical",
    //                                         "title": "Critical"
    //                                     }
    //                                 ]
    //                             },
    //                             {
    //                                 "id": 1,
    //                                 "title": "Onset:",
    //                                 "name": "Shortness Of Breath Onset:",
    //                                 "ansType": "*",
    //                                 "subTitle": "",
    //                                 "formControlType": "SelectDropDown",
    //                                 "formControlSize": "sm",
    //                                 "showLabel": true,
    //                                 "isMultiSelection": false,
    //                                 "isRequired": true,
    //                                 "options": [
    //                                     {
    //                                         "id": 1,
    //                                         "code": "mild",
    //                                         "title": "Mild"
    //                                     },
    //                                     {
    //                                         "id": 2,
    //                                         "code": "moderate",
    //                                         "title": "Moderate"
    //                                     }
    //                                 ]
    //                             }
    //                         ]
    //                     },
    //                     {
    //                         "id": 2,
    //                         "code": "fatigue",
    //                         "title": "Fatigue",
    //                         "isHorizontalAlign": true,
    //                         "mlref": "42",
    //                         "questions": [
    //                             {
    //                                 "id": 1,
    //                                 "title": "Severity Rating:",
    //                                 "name": "Fatigue Severity Rating:",
    //                                 "ansType": "*",
    //                                 "subTitle": "",
    //                                 "isHorizontalAlign": true,
    //                                 "showLabel": true,
    //                                 "formControlType": "RadioButtonGroup",
    //                                 "isMultiSelection": false,
    //                                 "isRequired": true,
    //                                 "options": [
    //                                     {
    //                                         "id": 1,
    //                                         "code": "mild",
    //                                         "title": "Mild"
    //                                     },
    //                                     {
    //                                         "id": 2,
    //                                         "code": "moderate",
    //                                         "title": "Moderate"
    //                                     },
    //                                     {
    //                                         "id": 3,
    //                                         "code": "critical",
    //                                         "title": "Critical"
    //                                     }
    //                                 ]
    //                             },
    //                             {
    //                                 "id": 1,
    //                                 "title": "Onset:",
    //                                 "name": "Fatigue Onset:",
    //                                 "ansType": "*",
    //                                 "subTitle": "",
    //                                 "formControlType": "SelectDropDown",
    //                                 "formControlSize": "sm",
    //                                 "showLabel": true,
    //                                 "isMultiSelection": false,
    //                                 "isRequired": true,
    //                                 "options": [
    //                                     {
    //                                         "id": 1,
    //                                         "code": "mild",
    //                                         "title": "Mild"
    //                                     },
    //                                     {
    //                                         "id": 2,
    //                                         "code": "moderate",
    //                                         "title": "Moderate"
    //                                     }
    //                                 ]
    //                             }
    //                         ]
    //                     },
    //                     {
    //                         "id": 3,
    //                         "code": "muscle and body headache",
    //                         "title": "Muscle And Body Headache",
    //                         "isHorizontalAlign": true,
    //                         "mlref": "43",
    //                         "questions": [
    //                             {
    //                                 "id": 1,
    //                                 "title": "Severity Rating:",
    //                                 "name": "Muscle And Body Headache Severity Rating:",
    //                                 "ansType": "*",
    //                                 "subTitle": "",
    //                                 "isHorizontalAlign": true,
    //                                 "showLabel": true,
    //                                 "formControlType": "RadioButtonGroup",
    //                                 "isMultiSelection": false,
    //                                 "isRequired": true,
    //                                 "options": [
    //                                     {
    //                                         "id": 1,
    //                                         "code": "mild",
    //                                         "title": "Mild"
    //                                     },
    //                                     {
    //                                         "id": 2,
    //                                         "code": "moderate",
    //                                         "title": "Moderate"
    //                                     },
    //                                     {
    //                                         "id": 3,
    //                                         "code": "critical",
    //                                         "title": "Critical"
    //                                     }
    //                                 ]
    //                             },
    //                             {
    //                                 "id": 1,
    //                                 "title": "Onset:",
    //                                 "ansType": "*",
    //                                 "name": "Muscle And Body Headache Onset:",
    //                                 "subTitle": "",
    //                                 "formControlType": "SelectDropDown",
    //                                 "formControlSize": "sm",
    //                                 "showLabel": true,
    //                                 "isMultiSelection": false,
    //                                 "isRequired": true,
    //                                 "options": [
    //                                     {
    //                                         "id": 1,
    //                                         "code": "mild",
    //                                         "title": "Mild"
    //                                     },
    //                                     {
    //                                         "id": 2,
    //                                         "code": "moderate",
    //                                         "title": "Moderate"
    //                                     }
    //                                 ]
    //                             }
    //                         ]
    //                     },
    //                     {
    //                         "id": 4,
    //                         "code": "sore throat",
    //                         "title": "Sore Throat",
    //                         "isHorizontalAlign": true,
    //                         "mlref": "45",
    //                         "questions": [
    //                             {
    //                                 "id": 1,
    //                                 "title": "Severity Rating:",
    //                                 "ansType": "*",
    //                                 "name": "Sore Throat Severity Rating:",
    //                                 "subTitle": "",
    //                                 "isHorizontalAlign": true,
    //                                 "showLabel": true,
    //                                 "formControlType": "RadioButtonGroup",
    //                                 "isMultiSelection": false,
    //                                 "isRequired": true,
    //                                 "options": [
    //                                     {
    //                                         "id": 1,
    //                                         "code": "mild",
    //                                         "title": "Mild"
    //                                     },
    //                                     {
    //                                         "id": 2,
    //                                         "code": "moderate",
    //                                         "title": "Moderate"
    //                                     },
    //                                     {
    //                                         "id": 3,
    //                                         "code": "critical",
    //                                         "title": "Critical"
    //                                     }
    //                                 ]
    //                             },
    //                             {
    //                                 "id": 1,
    //                                 "title": "Onset:",
    //                                 "name": "Sore Throat Onset:",
    //                                 "ansType": "*",
    //                                 "subTitle": "",
    //                                 "formControlType": "SelectDropDown",
    //                                 "formControlSize": "sm",
    //                                 "showLabel": true,
    //                                 "isMultiSelection": false,
    //                                 "isRequired": true,
    //                                 "options": [
    //                                     {
    //                                         "id": 1,
    //                                         "code": "mild",
    //                                         "title": "Mild"
    //                                     },
    //                                     {
    //                                         "id": 2,
    //                                         "code": "moderate",
    //                                         "title": "Moderate"
    //                                     }
    //                                 ]
    //                             }
    //                         ]
    //                     },
    //                     {
    //                         "id": 5,
    //                         "code": "congestion or runny nose",
    //                         "title": "Congestion or runny Nose",
    //                         "isHorizontalAlign": true,
    //                         "mlref": "46",
    //                         "questions": [
    //                             {
    //                                 "id": 1,
    //                                 "title": "Severity Rating:",
    //                                 "ansType": "*",
    //                                 "name": "Congestion or runny Nose Severity Rating:",
    //                                 "subTitle": "",
    //                                 "isHorizontalAlign": true,
    //                                 "showLabel": true,
    //                                 "formControlType": "RadioButtonGroup",
    //                                 "isMultiSelection": false,
    //                                 "isRequired": true,
    //                                 "options": [
    //                                     {
    //                                         "id": 1,
    //                                         "code": "mild",
    //                                         "title": "Mild"
    //                                     },
    //                                     {
    //                                         "id": 2,
    //                                         "code": "moderate",
    //                                         "title": "Moderate"
    //                                     },
    //                                     {
    //                                         "id": 3,
    //                                         "code": "critical",
    //                                         "title": "Critical"
    //                                     }
    //                                 ]
    //                             },
    //                             {
    //                                 "id": 1,
    //                                 "title": "Onset:",
    //                                 "ansType": "*",
    //                                 "name": "Congestion or runny Nose Onset:",
    //                                 "subTitle": "",
    //                                 "formControlType": "SelectDropDown",
    //                                 "formControlSize": "sm",
    //                                 "showLabel": true,
    //                                 "isMultiSelection": false,
    //                                 "isRequired": true,
    //                                 "options": [
    //                                     {
    //                                         "id": 1,
    //                                         "code": "mild",
    //                                         "title": "Mild"
    //                                     },
    //                                     {
    //                                         "id": 2,
    //                                         "code": "moderate",
    //                                         "title": "Moderate"
    //                                     }
    //                                 ]
    //                             }
    //                         ]
    //                     },
    //                     {
    //                         "id": 6,
    //                         "code": "nausea-or-vomiting",
    //                         "title": "Nausea or vomiting",
    //                         "isHorizontalAlign": true,
    //                         "mlref": "47",
    //                         "questions": [
    //                             {
    //                                 "id": 1,
    //                                 "title": "Severity Rating:",
    //                                 "ansType": "*",
    //                                 "name": "Nausea or vomiting Severity Rating:",
    //                                 "subTitle": "",
    //                                 "isHorizontalAlign": true,
    //                                 "showLabel": true,
    //                                 "formControlType": "RadioButtonGroup",
    //                                 "isMultiSelection": false,
    //                                 "isRequired": true,
    //                                 "options": [
    //                                     {
    //                                         "id": 1,
    //                                         "code": "mild",
    //                                         "title": "Mild"
    //                                     },
    //                                     {
    //                                         "id": 2,
    //                                         "code": "moderate",
    //                                         "title": "Moderate"
    //                                     },
    //                                     {
    //                                         "id": 3,
    //                                         "code": "critical",
    //                                         "title": "Critical"
    //                                     }
    //                                 ]
    //                             },
    //                             {
    //                                 "id": 1,
    //                                 "title": "Onset:",
    //                                 "ansType": "*",
    //                                 "name": "Nausea or vomiting Onset:",
    //                                 "subTitle": "",
    //                                 "formControlType": "SelectDropDown",
    //                                 "formControlSize": "sm",
    //                                 "showLabel": true,
    //                                 "isMultiSelection": false,
    //                                 "isRequired": true,
    //                                 "options": [
    //                                     {
    //                                         "id": 1,
    //                                         "code": "mild",
    //                                         "title": "Mild"
    //                                     },
    //                                     {
    //                                         "id": 2,
    //                                         "code": "moderate",
    //                                         "title": "Moderate"
    //                                     }
    //                                 ]
    //                             }
    //                         ]
    //                     },
    //                     {
    //                         "id": 7,
    //                         "code": "diarrhea",
    //                         "title": "Diarrhea",
    //                         "isHorizontalAlign": true,
    //                         "mlref": "48",
    //                         "questions": [
    //                             {
    //                                 "id": 1,
    //                                 "title": "Severity Rating:",
    //                                 "ansType": "*",
    //                                 "name": "Diarrhea Severity Rating:",
    //                                 "subTitle": "",
    //                                 "isHorizontalAlign": true,
    //                                 "showLabel": true,
    //                                 "formControlType": "RadioButtonGroup",
    //                                 "isMultiSelection": false,
    //                                 "isRequired": true,
    //                                 "options": [
    //                                     {
    //                                         "id": 1,
    //                                         "code": "mild",
    //                                         "title": "Mild"
    //                                     },
    //                                     {
    //                                         "id": 2,
    //                                         "code": "moderate",
    //                                         "title": "Moderate"
    //                                     },
    //                                     {
    //                                         "id": 3,
    //                                         "code": "critical",
    //                                         "title": "Critical"
    //                                     }
    //                                 ]
    //                             },
    //                             {
    //                                 "id": 1,
    //                                 "title": "Onset:",
    //                                 "ansType": "*",
    //                                 "name": "Diarrhea Onset:",
    //                                 "subTitle": "",
    //                                 "formControlType": "SelectDropDown",
    //                                 "formControlSize": "sm",
    //                                 "showLabel": true,
    //                                 "isMultiSelection": false,
    //                                 "isRequired": true,
    //                                 "options": [
    //                                     {
    //                                         "id": 1,
    //                                         "code": "mild",
    //                                         "title": "Mild"
    //                                     },
    //                                     {
    //                                         "id": 2,
    //                                         "code": "moderate",
    //                                         "title": "Moderate"
    //                                     }
    //                                 ]
    //                             }
    //                         ]
    //                     }
    //                 ]
    //             }
    //         ],
    //         "current": 3,
    //         "total": 6
    //     },
    //     {
    //         "stepId": 9,
    //         "title": "Symptoms Assessments",
    //         "progressInfo": {
    //             progress: 48.99
    //         },
    //         "assetUrl": "https://tericsoftsdinewgk.blob.core.windows.net/static-images/Symptoms Assessment.svg",
    //         "toolTipInfo": "<div>Symptoms may appear 2-14 days after exposure to the virus. People with these symptoms may have COVID-19. For more information read at <a href='https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html' rel='noreferrer' target='_blank'>Source(CDC)</a></div>",
    //         "canNavigateBack": true,
    //         "proceedButtonText": "Next",
    //         "canSkipTheStep": false,
    //         "questions": [
    //             {
    //                 "id": 1,
    //                 "title": "Are you experiencing fever or chill?",
    //                 "ansType": "*",
    //                 "name": "Are you experiencing fever or chill?",
    //                 "subTitle": "",
    //                 "formControlType": "RadioButton",
    //                 "isMultiSelection": false,
    //                 "isRequired": true,
    //                 "options": [
    //                     {
    //                         "id": 1,
    //                         "code": "fever",
    //                         "title": "Fever",
    //                         "mlref": "29",
    //                         "isHorizontalAlign": false
    //                     },
    //                     {
    //                         "id": 2,
    //                         "code": "chills",
    //                         "title": "Chills",
    //                         "mlref": "30",
    //                         "isHorizontalAlign": false
    //                     },
    //                     {
    //                         "id": 3,
    //                         "code": "no fever or chills",
    //                         "title": "None",
    //                         "mlref": "31",
    //                         "isHorizontalAlign": false
    //                     }
    //                 ]
    //             },
    //             {
    //                 "id": 2,
    //                 "title": "Slide the marker to indicate your temperature",
    //                 "ansType": "*",
    //                 "name": "temperature",
    //                 "subTitle": "",
    //                 "formControlType": "TemperatureSlider",
    //                 "mlref": "32",
    //                 "isMultiSelection": false,
    //                 "isRequired": true
    //             }
    //         ],
    //         "current": 3,
    //         "total": 6
    //     },
    //     {
    //         "stepId": 10,
    //         "title": "Exposure to COVID-19",
    //         "progressInfo": {
    //             progress: 65.32
    //         },
    //         "assetUrl": "https://tericsoftsdinewgk.blob.core.windows.net/static-images/Exposure to COVID-19.svg",
    //         "toolTipInfo": "<div>Contact with someone infected with COVID-19, increases the likelihood of getting infected with the virus. For more information read at  <a href='https://www.cdc.gov/coronavirus/2019-ncov/your-health/quarantine-isolation.html' rel='noreferrer' target='_blank'>Source(CDC)</a></div>",
    //         "canNavigateBack": true,
    //         "proceedButtonText": "Next",
    //         "canSkipTheStep": false,
    //         "questions": [
    //             {
    //                 "id": 1,
    //                 "title": "Select the following condition(s) that applies to you",
    //                 "ansType": "objectKeys",
    //                 "name": "Select the following condition(s) that applies to you",
    //                 "subTitle": "",
    //                 "formControlType": "CheckBox",
    //                 "isMultiSelection": true,
    //                 "isRequired": true,
    //                 "options": [
    //                     {
    //                         "id": 1,
    //                         "code": "I suspect that i have been exposed to some with COVID-19 outside of my household",
    //                         "title": "I suspect that i have been exposed to some with COVID-19 outside of my household",
    //                         "mlref": "17",
    //                         "isHorizontalAlign": false
    //
    //                     },
    //                     {
    //                         "id": 2,
    //                         "code": "I was with someone who has COVID-19",
    //                         "title": "I was with someone who has COVID-19",
    //                         "mlref": "18",
    //                         "isHorizontalAlign": false
    //                     },
    //                     {
    //                         "id": 3,
    //                         "code": "I have been to an indoor event with more than 20 people.(Eg:Bars,Restaurants,Weddings,Religious place)",
    //                         "title": "I have been to an indoor event with more than 20 people.(Eg:Bars,Restaurants,Weddings,Religious pla",
    //                         "mlref": "19",
    //                         "isHorizontalAlign": false
    //                     },
    //                     {
    //                         "id": 4,
    //                         "code": "I was not wearing a amask or others were not wearing a mask at an indoor event with more than 20 people",
    //                         "title": "I was not wearing a amask or others were not wearing a mask at an indoor event with more than 20 people",
    //                         "mlref": "20",
    //                         "isHorizontalAlign": false
    //                     },
    //                     {
    //                         "id": 5,
    //                         "code": "shared eating/drinking utensils with someone who has COVID-19",
    //                         "title": "shared eating/drinking utensils with someone who has COVID-19",
    //                         "mlref": "79",
    //                         "isHorizontalAlign": false
    //                     },
    //                     {
    //                         "id": 6,
    //                         "code": "Been sneezed on or coughed on by someone who has COVID-19",
    //                         "title": "Been sneezed on or coughed on by someone who has COVID-19",
    //                         "mlref": "80",
    //                         "isHorizontalAlign": false
    //                     },
    //                     {
    //                         "id": 7,
    //                         "code": "Provided care at home to someone who is sick with COVID-19",
    //                         "title": "Provided care at home to someone who is sick with COVID-19",
    //                         "mlref": "81",
    //                         "isHorizontalAlign": false
    //                     },
    //                     {
    //                         "id": 8,
    //                         "code": "No suspected exposure",
    //                         "title": "None",
    //                         "mlref": "21",
    //                         "isHorizontalAlign": false
    //                     }
    //                 ]
    //             }
    //         ],
    //         "current": 4,
    //         "total": 6
    //     },
    //     {
    //         "stepId": 11,
    //         "title": "Exposure to COVID-19",
    //         "progressInfo": {
    //             progress: 65.32
    //         },
    //         "assetUrl": "https://tericsoftsdinewgk.blob.core.windows.net/static-images/Exposure to COVID-19.svg",
    //         "toolTipInfo": "<div>CDC promotes workplace prevention strategies to prevent  transmission and maintain healthy operations in non-healthcare workplaces. For more information read at  <a href='https://www.cdc.gov/coronavirus/2019-ncov/community/workplaces-businesses/index.html' rel='noreferrer' target='_blank'>Source(CDC)</a></div>",
    //         "canNavigateBack": true,
    //         "proceedButtonText": "Next",
    //         "canSkipTheStep": false,
    //         "questions": [
    //             {
    //                 "id": 1,
    //                 "title": "Which of the following best describes your work setting?",
    //                 "ansType": "objectKeys",
    //                 "name": "Which of the following best describes your work setting?",
    //                 "subTitle": "",
    //                 "formControlType": "CheckBox",
    //                 "isMultiSelection": true,
    //                 "isRequired": true,
    //                 "options": [
    //                     {
    //                         "id": 1,
    //                         "code": "First Responder:Iam a first responder, such as an EMT/parametic,law enforcemenr officer , or firefighter",
    //                         "title": "First Responder:Iam a first responder, such as an EMT/parametic,law enforcemenr officer , or firefighter",
    //
    //                         "mlref": "22",
    //                         "isHorizontalAlign": false
    //                     },
    //                     {
    //                         "id": 2,
    //                         "code": "Healthcare facility: I wrote in a clinic,hospital,nursing home, or senior casefacility or other healthcare facility",
    //                         "title": "Healthcare facility: I wrote in a clinic,hospital,nursing home, or senior casefacility or other healthcare facility",
    //                         "mlref": "23",
    //                         "isHorizontalAlign": false
    //                     },
    //                     {
    //                         "id": 3,
    //                         "code": "State or Municipality: Iam a federal state or local government",
    //                         "title": "State or Municipality: Iam a federal state or local government",
    //                         "mlref": "24",
    //                         "isHorizontalAlign": false
    //                     },
    //                     {
    //                         "id": 4,
    //                         "code": "Food: I work at a grocery store,restaurant,conveienence,store or other food centered bussiness",
    //                         "title": "Food: I work at a grocery store,restaurant,conveienence,store or other food centered bussiness",
    //                         "mlref": "25",
    //                         "isHorizontalAlign": false
    //                     },
    //                     {
    //                         "id": 5,
    //                         "code": "Prison: I work in a jail, a prison, or other setting of incarnated persons.",
    //                         "title": "Prison: I work in a jail, a prison, or other setting of incarnated persons.",
    //                         "mlref": "26",
    //                         "isHorizontalAlign": false
    //                     },
    //                     {
    //                         "id": 6,
    //                         "code": "remote",
    //                         "title": "Remote: I have a remote position where I rarely encounter my colleagues in person.",
    //                         "mlref": "27",
    //                         "isHorizontalAlign": false
    //                     },
    //                     {
    //                         "id": 7,
    //                         "code": "Other work setting",
    //                         "title": "Other work setting",
    //                         "mlref": "28",
    //                         "isHorizontalAlign": false
    //                     }
    //                 ]
    //             }
    //         ],
    //         "current": 4,
    //         "total": 6
    //     },
    //     {
    //         "stepId": 12,
    //         "title": "Existing Medical Conditions",
    //         "progressInfo": {
    //             progress: 81.65
    //         },
    //         "assetUrl": "https://tericsoftsdinewgk.blob.core.windows.net/static-images/Existing Medical Conditions.svg",
    //         "toolTipInfo": "<div>A person with any of the medical conditions listed is more likely to get very sick with COVID-19. For more information read at <a href='https://www.cdc.gov/coronavirus/2019-ncov/need-extra-precautions/people-with-medical-conditions.html' rel='noreferrer' target='_blank'>Source(CDC)</a></div>",
    //         "canNavigateBack": true,
    //         "proceedButtonText": "Next",
    //         "canSkipTheStep": false,
    //         "questions": [
    //             {
    //                 "id": 1,
    //                 "title": "Select all underlying chronic medical conditions that apply to you",
    //                 "name": "Select all underlying chronic medical conditions that apply to you",
    //                 "subTitle": "",
    //                 "formControlType": "SelectDropDown",
    //                 "isMultiSelection": true,
    //                 "isRequired": true,
    //                 "options": [
    //                     {
    //                         "id": 1,
    //                         "code": "asthma",
    //                         "title": "Asthma or another lung condition",
    //                         "mlref": "49",
    //                         "isHorizontalAlign": false
    //                     },
    //                     {
    //                         "id": 2,
    //                         "code": "heart-conditions",
    //                         "title": "Heart conditions",
    //                         "mlref": "50",
    //                         "isHorizontalAlign": false
    //                     },
    //                     {
    //                         "id": 3,
    //                         "code": "high-boold-pressure",
    //                         "title": "High blood pressure",
    //                         "mlref": "51",
    //                         "isHorizontalAlign": false
    //                     },
    //                     {
    //                         "id": 4,
    //                         "code": "type1-diabetes",
    //                         "title": "Type I diabetes",
    //                         "mlref": "52",
    //                         "isHorizontalAlign": false
    //                     },
    //                     {
    //                         "id": 5,
    //                         "code": "type2-diabetes",
    //                         "title": "Type II diabetes",
    //                         "mlref": "53",
    //                         "isHorizontalAlign": false
    //                     },
    //                     {
    //                         "id": 6,
    //                         "code": "cardio",
    //                         "title": "Cardio vascular disease",
    //                         "mlref": "54",
    //                         "isHorizontalAlign": false
    //                     },
    //                     {
    //                         "id": 7,
    //                         "code": "liver",
    //                         "title": "Liver disease",
    //                         "mlref": "55",
    //                         "isHorizontalAlign": false
    //                     },
    //                     {
    //                         "id": 8,
    //                         "code": "kidney",
    //                         "mlref": "56",
    //                         "title": "Kidney disease or dialysis",
    //                         "isHorizontalAlign": false
    //                     },
    //                     {
    //                         "id": 9,
    //                         "code": "hiv",
    //                         "mlref": "57",
    //                         "title": "HIV",
    //                         "isHorizontalAlign": false
    //                     },
    //                     {
    //                         "id": 10,
    //                         "code": "Other auto immuno disease",
    //                         "mlref": "58",
    //                         "title": "Other auto immuno disease",
    //                         "isHorizontalAlign": false
    //                     }
    //                 ]
    //             },
    //             {
    //                 "id": 2,
    //                 "title": "Select all medical conditions that apply to you",
    //                 "name": "Select all medical conditions that apply to you",
    //                 "subTitle": "",
    //                 "formControlType": "SelectDropDown",
    //                 "isMultiSelection": true,
    //                 "isRequired": true,
    //                 "options": [
    //                     {
    //                         "id": 1,
    //                         "code": "pregnancy",
    //                         "title": "Pregnancy",
    //                         "mlref": "59",
    //                         "isHorizontalAlign": false
    //                     },
    //                     {
    //                         "id": 2,
    //                         "code": "current-smoker",
    //                         "title": "Current smoker",
    //                         "mlref": "60",
    //                         "isHorizontalAlign": false
    //                     },
    //                     {
    //                         "id": 3,
    //                         "code": "former-smoker",
    //                         "title": "Former smoker",
    //                         "mlref": "61",
    //                         "isHorizontalAlign": false
    //                     },
    //                     {
    //                         "id": 4,
    //                         "code": "Undergoing chemo therapy or radiation treatment for cancer",
    //                         "title": "Undergoing chemo therapy or radiation treatment for cancer",
    //                         "mlref": "62",
    //                         "isHorizontalAlign": false
    //                     },
    //                     {
    //                         "id": 5,
    //                         "code": "Surgery within the last 30 days",
    //                         "title": "Surgery within the last 30 days",
    //                         "mlref": "63",
    //                         "isHorizontalAlign": false
    //                     },
    //                     {
    //                         "id": 6,
    //                         "code": "wound-infection",
    //                         "title": "Wound infection",
    //                         "mlref": "64",
    //                         "isHorizontalAlign": false
    //                     },
    //                     {
    //                         "id": 7,
    //                         "code": "fungal-infection",
    //                         "title": "Fungal infection",
    //                         "mlref": "65",
    //                         "isHorizontalAlign": false
    //                     },
    //                     {
    //                         "id": 8,
    //                         "code": "icu-admission",
    //                         "mlref": "66",
    //                         "title": "ICU admission",
    //                         "isHorizontalAlign": false
    //                     },
    //                     {
    //                         "id": 9,
    //                         "code": "on-ventilator",
    //                         "mlref": "67",
    //                         "title": "On a ventilator",
    //                         "isHorizontalAlign": false
    //                     },
    //                     {
    //                         "id": 10,
    //                         "code": "Regularly consume more than 4 alcholic drinks per week",
    //                         "mlref": "68",
    //                         "title": "Regularly consume more than 4 alcholic drinks per week",
    //                         "isHorizontalAlign": false
    //                     },
    //                     {
    //                         "id": 11,
    //                         "code": "Undergoing immuno supression or an organ transplant recepient",
    //                         "mlref": "69",
    //                         "title": "Undergoing immuno supression or an organ transplant recepient",
    //                         "isHorizontalAlign": false
    //                     }
    //                 ]
    //             },
    //             {
    //                 "id": 3,
    //                 "title": "Select all the threatening conditions that apply to you",
    //                 "name": "Select all the threatening conditions that apply to you",
    //                 "subTitle": "",
    //                 "formControlType": "SelectDropDown",
    //                 "isMultiSelection": true,
    //                 "isRequired": true,
    //                 "options": [
    //                     {
    //                         "id": 1,
    //                         "code": "Pale, gray, or blue-colored skin, lips or nail beds, depending on skin tone",
    //                         "title": "Pale, gray, or blue-colored skin, lips or nail beds, depending on skin tone",
    //                         "mlref": "89",
    //                         "isHorizontalAlign": false
    //                     },
    //                     {
    //                         "id": 2,
    //                         "code": "Severe and constant pain or pressure in the chest",
    //                         "title": "Severe and constant pain or pressure in the chest",
    //                         "mlref": "90",
    //                         "isHorizontalAlign": false
    //                     },
    //                     {
    //                         "id": 3,
    //                         "code": "Extreme difficulty breathing (such as gasping for air, being unable to talk without catching your breath, severe wheezing, nostrils flaring)",
    //                         "title": "Extreme difficulty breathing (such as gasping for air, being unable to talk without catching your breath, severe wheezing, nostrils flaring)",
    //                         "mlref": "91",
    //                         "isHorizontalAlign": false
    //                     },
    //                     {
    //                         "id": 4,
    //                         "code": "New disorientation (acting confused)",
    //                         "title": "New disorientation (acting confused)",
    //                         "mlref": "92",
    //                         "isHorizontalAlign": false
    //                     },
    //                     {
    //                         "id": 5,
    //                         "code": "Unconscious or very difficult to wake up",
    //                         "title": "Unconscious or very difficult to wake up",
    //                         "mlref": "93",
    //                         "isHorizontalAlign": false
    //                     },
    //                     {
    //                         "id": 6,
    //                         "code": "Slurred speech or difficulty speaking (new or worsening)",
    //                         "title": "Slurred speech or difficulty speaking (new or worsening)",
    //                         "mlref": "94",
    //                         "isHorizontalAlign": false
    //                     },
    //                     {
    //                         "id": 7,
    //                         "code": "New or worsening seizures",
    //                         "title": "New or worsening seizures",
    //                         "mlref": "95",
    //                         "isHorizontalAlign": false
    //                     },
    //                     {
    //                         "id": 8,
    //                         "code": "Signs of low blood pressure (too weak to stand, dizziness, lightheaded, feeling cold, pale, clammy skin)",
    //                         "mlref": "96",
    //                         "title": "Signs of low blood pressure (too weak to stand, dizziness, lightheaded, feeling cold, pale, clammy skin)",
    //                         "isHorizontalAlign": false
    //                     },
    //                     {
    //                         "id": 9,
    //                         "code": "Dehydration (dry lips and mouth, not urinating much, sunken eyes)",
    //                         "mlref": "97",
    //                         "title": "Dehydration (dry lips and mouth, not urinating much, sunken eyes)",
    //                         "isHorizontalAlign": false
    //                     },
    //                     {
    //                         "id": 9,
    //                         "code": " No life threatening conditions",
    //                         "mlref": "98",
    //                         "title": " No life threatening conditions",
    //                         "isHorizontalAlign": false
    //                     }
    //                 ]
    //             }
    //         ],
    //         "current": 5,
    //         "total": 6
    //     },
    //     {
    //         "stepId": 13,
    //         "title": "Residence Info",
    //         "progressInfo": {
    //             progress: 100
    //         },
    //         "assetUrl": "https://tericsoftsdinewgk.blob.core.windows.net/static-images/Residence Info.svg",
    //         "toolTipInfo": "<div>Contact tracing helps protect you, your family, and your community by helping people that have come into close contact with someone diagnosed with COVID-19. For more information read at  <a href='https://www.cdc.gov/coronavirus/2019-ncov/daily-life-coping/contact-tracing.html' rel='noreferrer' target='_blank'>Source(CDC)</a></div>",
    //         "canNavigateBack": true,
    //         "proceedButtonText": "Next",
    //         "canSkipTheStep": false,
    //         "questions": [
    //             {
    //                 "id": 1,
    //                 "title": "Which best describes your residence?",
    //                 "name": "Which best describes your residence?",
    //                 "subTitle": "",
    //                 "formControlType": "RadioButton",
    //                 "isMultiSelection": true,
    //                 "isRequired": true,
    //                 "options": [
    //                     {
    //                         "id": 1,
    //                         "code": "house",
    //                         "title": "A house",
    //                         "mlref": "83",
    //                         "isHorizontalAlign": false
    //                     },
    //                     {
    //                         "id": 2,
    //                         "code": "condo",
    //                         "title": "A Condo",
    //                         "mlref": "84",
    //                         "isHorizontalAlign": false
    //                     },
    //                     {
    //                         "id": 3,
    //                         "code": "apartment",
    //                         "title": "An Apartment",
    //                         "mlref": "85",
    //                         "isHorizontalAlign": false
    //                     },
    //                     {
    //                         "id": 4,
    //                         "code": "living-facility",
    //                         "mlref": "86",
    //                         "title": "Assisted living facility",
    //                         "isHorizontalAlign": false
    //                     },
    //                     {
    //                         "id": 5,
    //                         "code": "nursing-home",
    //                         "mlref": "87",
    //                         "title": "Nursing Home",
    //                         "isHorizontalAlign": false
    //                     },
    //                     {
    //                         "id": 6,
    //                         "code": "residence-other",
    //                         "mlref": "88",
    //                         "title": "Other",
    //                         "isHorizontalAlign": false
    //                     }
    //                 ]
    //             }
    //         ],
    //         "current": 6,
    //         "total": 6
    //     },
    //     {
    //         "stepId": 14,
    //         "title": "Residence Info",
    //         "progressInfo": {
    //             progress: 100
    //         },
    //         "assetUrl": "https://tericsoftsdinewgk.blob.core.windows.net/static-images/Residence Info.svg",
    //         "toolTipInfo": "<div>Contact tracing helps protect you, your family, and your community by helping people that have come into close contact with someone diagnosed with COVID-19. For more information read at  <a href='https://www.cdc.gov/coronavirus/2019-ncov/daily-life-coping/contact-tracing.html' rel='noreferrer' target='_blank'>Source(CDC)</a></div>",
    //         "canNavigateBack": true,
    //         "proceedButtonText": "Submit",
    //         "canSkipTheStep": false,
    //         "questions": [
    //             {
    //                 "id": 1,
    //                 "title": "How many people live in your household?",
    //                 "name": "How many people live in your household?",
    //                 "subTitle": "",
    //                 "formControlType": "CheckBox",
    //                 "isMultiSelection": true,
    //                 "isRequired": true,
    //                 "options": [
    //                     {
    //                         "id": 1,
    //                         "code": "Age from 0 to 19",
    //                         "title": "Age from 0 to 19",
    //                         "isHorizontalAlign": false,
    //                         "questions": [
    //                             {
    //                                 "id": 1,
    //                                 "title": "Age from 0 to 19 No of members",
    //                                 "name": "Age from 0 to 19 No of members",
    //                                 "subTitle": "",
    //                                 "mlref": "72",
    //                                 "formControlType": "SelectDropDown",
    //                                 "isFormControlFullWidth": false,
    //                                 "isMultiSelection": false,
    //                                 "isRequired": true,
    //                                 "options": [
    //                                     {
    //                                         "id": 1,
    //                                         "code": "1",
    //                                         "title": "1 member",
    //                                         "isHorizontalAlign": true
    //                                     },
    //                                     {
    //                                         "id": 2,
    //                                         "code": "2",
    //                                         "title": "2 member",
    //                                         "isHorizontalAlign": true
    //                                     },
    //                                     {
    //                                         "id": 3,
    //                                         "code": "3",
    //                                         "title": "3 member",
    //                                         "isHorizontalAlign": true
    //                                     },
    //                                     {
    //                                         "id": 4,
    //                                         "code": "4",
    //                                         "title": "4 member",
    //                                         "isHorizontalAlign": true
    //                                     },
    //                                     {
    //                                         "id": 5,
    //                                         "code": "5",
    //                                         "title": "5 member",
    //                                         "isHorizontalAlign": true
    //                                     },
    //                                     {
    //                                         "id": 6,
    //                                         "code": "6",
    //                                         "title": "6 member",
    //                                         "isHorizontalAlign": true
    //                                     },
    //                                     {
    //                                         "id": 7,
    //                                         "code": "7",
    //                                         "title": "7 member",
    //                                         "isHorizontalAlign": true
    //                                     },
    //                                     {
    //                                         "id": 8,
    //                                         "code": "8",
    //                                         "title": "8 member",
    //                                         "isHorizontalAlign": true
    //                                     },
    //                                     {
    //                                         "id": 9,
    //                                         "code": "9",
    //                                         "title": "9 member",
    //                                         "isHorizontalAlign": true
    //                                     },
    //                                     {
    //                                         "id": 10,
    //                                         "code": "10",
    //                                         "title": "10 member",
    //                                         "isHorizontalAlign": true
    //                                     }
    //                                 ]
    //                             }
    //                         ]
    //                     },
    //                     {
    //                         "id": 2,
    //                         "code": "age-20-39",
    //                         "title": "Age from 20 to 39",
    //                         "isHorizontalAlign": false,
    //                         "questions": [
    //                             {
    //                                 "id": 1,
    //                                 "title": "Age from 20 to 39 No of members",
    //                                 "name": "Age from 20 to 39 No of members",
    //                                 "subTitle": "",
    //                                 "mlref": "73",
    //                                 "isFormControlFullWidth": false,
    //                                 "formControlType": "SelectDropDown",
    //                                 "isMultiSelection": false,
    //                                 "isRequired": true,
    //                                 "options": [
    //                                     {
    //                                         "id": 1,
    //                                         "code": "1",
    //                                         "title": "1 member",
    //                                         "isHorizontalAlign": true
    //                                     },
    //                                     {
    //                                         "id": 2,
    //                                         "code": "2",
    //                                         "title": "2 member",
    //                                         "isHorizontalAlign": true
    //                                     },
    //                                     {
    //                                         "id": 3,
    //                                         "code": "3",
    //                                         "title": "3 member",
    //                                         "isHorizontalAlign": true
    //                                     },
    //                                     {
    //                                         "id": 4,
    //                                         "code": "4",
    //                                         "title": "4 member",
    //                                         "isHorizontalAlign": true
    //                                     },
    //                                     {
    //                                         "id": 5,
    //                                         "code": "5",
    //                                         "title": "5 member",
    //                                         "isHorizontalAlign": true
    //                                     },
    //                                     {
    //                                         "id": 6,
    //                                         "code": "6",
    //                                         "title": "6 member",
    //                                         "isHorizontalAlign": true
    //                                     },
    //                                     {
    //                                         "id": 7,
    //                                         "code": "7",
    //                                         "title": "7 member",
    //                                         "isHorizontalAlign": true
    //                                     },
    //                                     {
    //                                         "id": 8,
    //                                         "code": "8",
    //                                         "title": "8 member",
    //                                         "isHorizontalAlign": true
    //                                     },
    //                                     {
    //                                         "id": 9,
    //                                         "code": "9",
    //                                         "title": "9 member",
    //                                         "isHorizontalAlign": true
    //                                     },
    //                                     {
    //                                         "id": 10,
    //                                         "code": "10",
    //                                         "title": "10 member",
    //                                         "isHorizontalAlign": true
    //                                     }
    //                                 ]
    //                             }
    //                         ]
    //                     },
    //                     {
    //                         "id": 3,
    //                         "code": "age-40-59",
    //                         "title": "Age from 40 to 59",
    //                         "isHorizontalAlign": false,
    //                         "questions": [
    //                             {
    //                                 "id": 1,
    //                                 "title": "Age from 40 to 59 No of members",
    //                                 "name": "Age from 40 to 59 No of members",
    //                                 "subTitle": "",
    //                                 "mlref": "74",
    //                                 "isFormControlFullWidth": false,
    //                                 "formControlType": "SelectDropDown",
    //                                 "isMultiSelection": false,
    //                                 "isRequired": true,
    //                                 "options": [
    //                                     {
    //                                         "id": 1,
    //                                         "code": "1",
    //                                         "title": "1 member",
    //                                         "isHorizontalAlign": true
    //                                     },
    //                                     {
    //                                         "id": 2,
    //                                         "code": "2",
    //                                         "title": "2 member",
    //                                         "isHorizontalAlign": true
    //                                     },
    //                                     {
    //                                         "id": 3,
    //                                         "code": "3",
    //                                         "title": "3 member",
    //                                         "isHorizontalAlign": true
    //                                     },
    //                                     {
    //                                         "id": 4,
    //                                         "code": "4",
    //                                         "title": "4 member",
    //                                         "isHorizontalAlign": true
    //                                     },
    //                                     {
    //                                         "id": 5,
    //                                         "code": "5",
    //                                         "title": "5 member",
    //                                         "isHorizontalAlign": true
    //                                     },
    //                                     {
    //                                         "id": 6,
    //                                         "code": "6",
    //                                         "title": "6 member",
    //                                         "isHorizontalAlign": true
    //                                     },
    //                                     {
    //                                         "id": 7,
    //                                         "code": "7",
    //                                         "title": "7 member",
    //                                         "isHorizontalAlign": true
    //                                     },
    //                                     {
    //                                         "id": 8,
    //                                         "code": "8",
    //                                         "title": "8 member",
    //                                         "isHorizontalAlign": true
    //                                     },
    //                                     {
    //                                         "id": 9,
    //                                         "code": "9",
    //                                         "title": "9 member",
    //                                         "isHorizontalAlign": true
    //                                     },
    //                                     {
    //                                         "id": 10,
    //                                         "code": "10",
    //                                         "title": "10 member",
    //                                         "isHorizontalAlign": true
    //                                     }
    //                                 ]
    //                             }
    //                         ]
    //                     },
    //                     {
    //                         "id": 4,
    //                         "code": "age-60",
    //                         "title": "Age 60 and above",
    //                         "isHorizontalAlign": false,
    //                         "questions": [
    //                             {
    //                                 "id": 1,
    //                                 "title": "Age 60 and above No of members",
    //                                 "name": "Age 60 and above No of members",
    //                                 "isFormControlFullWidth": false,
    //                                 "subTitle": "",
    //                                 "formControlType": "SelectDropDown",
    //                                 "isMultiSelection": false,
    //                                 "isRequired": true,
    //                                 "mlref": "75",
    //                                 "options": [
    //                                     {
    //                                         "id": 1,
    //                                         "code": "1",
    //                                         "title": "1 member",
    //                                         "isHorizontalAlign": true
    //                                     },
    //                                     {
    //                                         "id": 2,
    //                                         "code": "2",
    //                                         "title": "2 member",
    //                                         "isHorizontalAlign": true
    //                                     },
    //                                     {
    //                                         "id": 3,
    //                                         "code": "3",
    //                                         "title": "3 member",
    //                                         "isHorizontalAlign": true
    //                                     },
    //                                     {
    //                                         "id": 4,
    //                                         "code": "4",
    //                                         "title": "4 member",
    //                                         "isHorizontalAlign": true
    //                                     },
    //                                     {
    //                                         "id": 5,
    //                                         "code": "5",
    //                                         "title": "5 member",
    //                                         "isHorizontalAlign": true
    //                                     },
    //                                     {
    //                                         "id": 6,
    //                                         "code": "6",
    //                                         "title": "6 member",
    //                                         "isHorizontalAlign": true
    //                                     },
    //                                     {
    //                                         "id": 7,
    //                                         "code": "7",
    //                                         "title": "7 member",
    //                                         "isHorizontalAlign": true
    //                                     },
    //                                     {
    //                                         "id": 8,
    //                                         "code": "8",
    //                                         "title": "8 member",
    //                                         "isHorizontalAlign": true
    //                                     },
    //                                     {
    //                                         "id": 9,
    //                                         "code": "9",
    //                                         "title": "9 member",
    //                                         "isHorizontalAlign": true
    //                                     },
    //                                     {
    //                                         "id": 10,
    //                                         "code": "10",
    //                                         "title": "10 member",
    //                                         "isHorizontalAlign": true
    //                                     }
    //                                 ]
    //                             }
    //                         ]
    //                     }
    //                 ]
    //             }
    //         ],
    //         "current": 6,
    //         "total": 6
    //     }
    // ]
}