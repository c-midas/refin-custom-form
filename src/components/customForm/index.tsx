import { 
    Button,
    Select,
    Textarea,
    TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";

import { UserForm, ValidatorFunction } from "../../types";

export const CustomForm = (config: UserForm) => {

    const initialValues: { [key: string]: any } = {};
    const validators: { [key: string]:  ValidatorFunction} = {};

    config.fields.forEach((field) => {
        
        if ("value" in field) {
            initialValues[field.name] = field.value;
        }

        validators[field.name] = field.validators

    })

    const form = useForm({
        initialValues: initialValues,
        validate: validators
    })

    return (
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
            {
                config.fields.map(field => {
                    switch (field.type) {
                        case "textinput":
                            return (
                                <TextInput 
                                    label={field.name}
                                    error={`Invalid ${field.name}`}
                                    {...form.getInputProps(field.name)}
                                />
                            );
                        case "textarea":
                            return (
                                <Textarea 
                                    label={field.name}
                                    error={`Invalid ${field.name}`}
                                    {...form.getInputProps(field.name)}
                                />
                            )
                        case "select":
                            return (
                                <Select 
                                    label={field.name}
                                    data={ "data" in field ? field.data : ["USA", "CAD"]}
                                    error={`Invalid ${field.name}`}
                                    {...form.getInputProps(field.name)}
                                />
                            )
                    }
                })
            }
            <Button type="submit" variant="outline" color="blue">
                Submit
            </Button>
        </form>
    )
}