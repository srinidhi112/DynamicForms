import { Iform } from "../interface/form.interface";

export const employeeInfoConfig : Iform = {
    formTitle : "Shiksha Lokam Form",
    saveBtnTitle : "Save",
    resetBtnTitle : "Reset",
    formControls : [
        {
            "name": "firstName",
            "label": "First Name",
            "value": "",
            "placeholder": "Enter your first name",
            "class": "col-md-6",
            "type": "text",
            "validators": [
                {
                    "validatorName": "required",
                    "required": true,
                    "message": "*First Name is Required"
                },
                {
                    "validatorName": "pattern",
                    "pattern": "^[A-Za-z'-]+$",
                }
            ]
        },
        {
            "name": "lastName",
            "label": "Last Name",
            "value": "",
            "placeholder": "Enter your last name",
            "class": "col-md-6",
            "type": "text",
            "validators": [
                {
                    "validatorName": "required",
                    "required": true,
                    "message": "*Last Name is Required"
                },
                {
                    "validatorName": "pattern",
                    "pattern": "^[A-Za-z'-]+$",
                }
            ]
        },
        {
            "name": "dob",
            "label": "Date of Birth",
            "value": "",
            "class": "col-md-6",
            "type": "date",
            "validators": [
                {
                    "validatorName": "required",
                    "required": true,
                    "message": "*Date is Required"
                }
            ]
        },
        {
            "name": "gender",
            "label": "Gender",
            "value": "",
            "class": "col-md-6",
            "type": "radio",
            "radioOptions": [
                "Male",
                "Female",
                "Others"
            ],
            "validators": [
                {
                    "validatorName": "required",
                    "required": true,
                    "message": "*Gender is Required"
                }
            ]
        },
        {
            "type": "select",
            "label": "Interests",
            "name": "interests",
            "class": "col-md-6",
            "options": [
                {
                    "id": 1,
                    "value": "reading"
                },
                {
                    "id": 2,
                    "value": "sports"
                },
                {
                    "id": 3,
                    "value": "cooking"
                }
            ],
            "validators": [
                {
                    "validatorName": "notrequired",
                    "required": false,
                    "message": "*Gender is Required"
                }
            ]
        },
        {
            "type": "select",
            "label": "State",
            "name": "state",
            "class": "col-md-6",
            "options": [
                {
                    "id": 1,
                    "value": "Karnataka"
                },
                {
                    "id": 2,
                    "value": "Maharastra"
                },
                {
                    "id": 3,
                    "value": "Kerala"
                }
            ],
            "validators": [
                {
                    "validatorName": "notrequired",
                    "required": false,
                    "message": "*Gender is Required"
                }
            ]
        },
        {
            "type": "select",
            "label": "Skills",
            "name": "skill",
            "class": "col-md-6",
            "options": [
                {
                    "id": 1,
                    "value": "angular"
                },
                {
                    "id": 2,
                    "value": "nodejs"
                },
                {
                    "id": 3,
                    "value": "flutter"
                }
            ],
            "validators": [
                {
                    "validatorName": "required",
                    "required": true,
                    "message": "*Skills are Required"
                }
            ]
        },
        {
            "type": "date",
            "label": "Date of Joining",
            "name": "doj",
            "class": "col-md-6",
            "validators": [
                {
                    "validatorName": "required",
                    "required": true,
                    "message": "*Date of Joining is Required"
                }
            ]
        },
            
    ]
}