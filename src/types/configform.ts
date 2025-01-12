export interface ValidatorFunction {
    (value: any): any;
}

export interface UserFormField {
    name: string;
    value?: any;
    data?: string[];
    type: "textinput" | "textarea" | "select" | "checkbox";
    validators: ValidatorFunction;
}

export interface UserForm {
    fields: UserFormField[];
}
