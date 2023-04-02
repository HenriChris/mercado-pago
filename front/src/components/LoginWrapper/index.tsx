import React from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage, ErrorMessageInvisible, Form, InputButton, InputContainer, InputTextEmail, InputTextSenha } from "./style";

type LoginValues = {
    nome: string,
    email: string,
    cpf: string,
    telefone: string,
    senha: string,
    senhaVerificada: string,
};

export default function LoginWrapper() {
    
    const {register, handleSubmit, formState: {errors}} = useForm<LoginValues>({
        defaultValues: {
            nome : '',
            email: '',
            cpf: '',
            telefone: '',
            senha: '',
            senhaVerificada: '',
        },
    });

    const onSubmit = (data: LoginValues) => {
        console.log(data);
    };
    
    console.log(errors);
    
    return (

        <Form onSubmit={handleSubmit(onSubmit)}>

            <InputContainer>
                <p>E-mail</p>
                
                <InputTextEmail
                {...register('email', {
                    required: {
                        value: true,
                        message: 'Este campo é obrigatório.',
                    },
                })}
                />
                {
                    errors?.email?.message === undefined ? 
                    <ErrorMessageInvisible>a</ErrorMessageInvisible> : 
                    <ErrorMessage>{errors?.email?.message}</ErrorMessage>
                }
            </InputContainer>

            <InputContainer>
                <p>Senha</p>
                
                <InputTextSenha
                type='password' 
                {...register('senha', {
                    required: {
                        value: true,
                        message: 'Este campo é obrigatório.',
                    },
                })}
                />
                {
                    errors?.senha?.message === undefined ? 
                    <ErrorMessageInvisible>a</ErrorMessageInvisible> : 
                    <ErrorMessage>{errors?.senha?.message}</ErrorMessage>
                }
            </InputContainer>

            <InputContainer>
                <InputButton type="submit" value="Login"/>
            </InputContainer>
        
        </Form>
    );
};
