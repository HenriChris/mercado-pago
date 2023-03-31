import React from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage, ErrorMessageInvisible, Form, InputButton, InputContainer, InputTextCpf, InputTextEmail, InputTextNome, InputTextSenha, InputTextTelefone } from "./style";

type RegisterValues = {
    nome: string,
    email: string,
    cpf: string,
    telefone: string,
    senha: string,
    senhaVerificada: string,
};

export default function RegisterWrapper() {
    
    const {register, handleSubmit, getValues, formState: {errors}} = useForm<RegisterValues>({
        defaultValues: {
            nome : '',
            email: '',
            cpf: '',
            telefone: '',
            senha: '',
            senhaVerificada: '',
        },
    });

    const onSubmit = (data: RegisterValues) => {
        console.log(data);
    };
    
    console.log(errors);
    
    return (

        <Form onSubmit={handleSubmit(onSubmit)}>

            <InputContainer>
                <p>Nome</p>
                
                <InputTextNome
                {...register('nome', {
                    required: {
                        value: true,
                        message: 'Este campo é obrigatório.',
                    },
                    maxLength: {
                        value: 30,
                        message: 'Este campo aceita no máximo 30 caracteres.',
                    },
                    minLength: {
                        value: 4,
                        message: 'Este campo aceita no mínimo 4 caracteres.',
                    },
                    pattern: {
                        value: /^[A-Za-z]+$/i,
                        message: 'Este campo aceita somente caracteres do alfabeto.',
                    },
                })}
                />
                {
                    errors?.nome?.message === undefined ? 
                    <ErrorMessageInvisible>a</ErrorMessageInvisible> : 
                    <ErrorMessage>{errors?.nome?.message}</ErrorMessage>
                }
                
                
            </InputContainer>

            <InputContainer>
                <p>E-mail</p>
                
                <InputTextEmail
                {...register('email', {
                    required: {
                        value: true,
                        message: 'Este campo é obrigatório.',
                    },
                    maxLength: {
                        value: 100,
                        message: 'Este campo aceita no máximo 100 caracteres.',
                    },
                    minLength: {
                        value: 15,
                        message: 'Este campo aceita no mínimo 15 caracteres.',
                    },
                    pattern: {
                        value: /^\S+@\S+$/i,
                        message: 'Formato de e-mail inválido',
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
                <p>CPF</p>
                
                <InputTextCpf
                mask = {"999.999.999-99"}
                {...register('cpf', {
                    required: {
                        value: true,
                        message: 'Este campo é obrigatório.',
                    },
                })}
                />
                {
                    errors?.cpf?.message === undefined ? 
                    <ErrorMessageInvisible>a</ErrorMessageInvisible> : 
                    <ErrorMessage>{errors?.cpf?.message}</ErrorMessage>
                }
            </InputContainer>

            <InputContainer>
                <p>Telefone</p>
                
                <InputTextTelefone
                mask = {"(99) 99999-9999"}
                {...register('telefone', {
                    required: {
                        value: true,
                        message: 'Este campo é obrigatório.',
                    },
                })}
                />
                {
                    errors?.telefone?.message === undefined ? 
                    <ErrorMessageInvisible>a</ErrorMessageInvisible> : 
                    <ErrorMessage>{errors?.telefone?.message}</ErrorMessage>
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
                    maxLength: {
                        value: 32,
                        message: 'Sua senha deve ter entre 8 e 32 caracteres.',
                    },
                    minLength: {
                        value: 8,
                        message: 'Sua senha deve ter entre 8 e 32 caracteres.',
                    },
                    pattern: {
                        value: /^(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z])(?=\D*\d)(?=[^!#%]*[!#%])[A-Za-z0-9!#%]{8,32}$/,
                        message: 'Sua senha deve conter uma letra maiúscula, um símbolo e um número.',
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
                <p>Verificar a senha</p>
                
                <InputTextSenha
                type='password'
                {...register('senhaVerificada', {
                    required: {
                        value: true,
                        message: 'Este campo é obrigatório.',
                    },
                    maxLength: {
                        value: 32,
                        message: 'Sua senha deve ter entre 8 e 32 caracteres.',
                    },
                    minLength: {
                        value: 8,
                        message: 'Sua senha deve ter entre 8 e 32 caracteres.',
                    },
                    validate: {
                        matchesPreviousPassword: (value) => {
                            const senha = getValues("senha");
                            return senha === value || 'As duas senhas não são iguais';
                        }
                    },
                })}
                />
                {
                    errors?.senhaVerificada?.message === undefined ? 
                    <ErrorMessageInvisible>a</ErrorMessageInvisible> : 
                    <ErrorMessage>{errors?.senhaVerificada?.message}</ErrorMessage>
                }
            </InputContainer>
            
            <InputContainer>
                <InputButton type="submit" value="Cadastre-se"/>
            </InputContainer>
        
        </Form>
    );
};
