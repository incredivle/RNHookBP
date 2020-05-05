import React, { useEffect } from "react";
import { Text, View, TextInput, Button, Alert } from "react-native";
import { useForm, ErrorMessage } from "react-hook-form";
import styles from './styles'

const index = (props) => {
    const name = props.route.params.name
    const { register, setValue, handleSubmit, errors } = useForm();
    const onSubmit = data => Alert.alert("Form Data", JSON.stringify(data));

    useEffect(() => {
        register({ name: "firstName" }, { required: true });
        register({ name: "lastName" });
        register({ name: "email" }, { required: true });
        register({ name: "phone" }, { minLength: 18, maxLength: 99, required: true });
    }, [register]);


    return (
        <View>
            <Text>First name</Text>
            <TextInput
                onChangeText={text => setValue("firstName", text, true)}  //(name: "firstName", value: any, shouldValidate?: boolean)
            />
            {errors.firstName && <Text>This is required.</Text>}

            <Text>Last name</Text>
            <TextInput
                onChangeText={text => setValue("lastName", text)}
            />

            <Text>Email</Text>
            <TextInput
                onChangeText={text => setValue("email", text, true)}
            />
            {errors.email && <Text>This is required.</Text>}

            <Text>Phone</Text>
            <TextInput
                onChangeText={text => setValue("phone", text, true)}
            />
            {errors.phone && <Text>This is required.</Text>}

            <Button title={name} onPress={handleSubmit(onSubmit)} />
        </View>
    );
}

export default index

