import styled, { css } from 'styled-components';
import EmailIcon from '../../assets/email.png'
import SenhaIcon from '../../assets/senha.png'

type Icon = {
  path: string,
};

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  border: 1px black solid;
  border-radius: 10px;
  width: 400px;
  margin: auto;
  /* gap: 10px; */
  padding: 10px;

  box-shadow:
    0 4px 4px rgba(0, 0, 0, 0.1),
    0 12px 8px rgba(0, 0, 0, 0.06),
    0 20px 20px rgba(0, 0, 0, 0.04),
    0 20px 40px rgba(0, 0, 0, 0.02);
`

export const InputContainer = styled.div`
  margin: auto;
`

export const Input = css`
  width: 80%;
  border: none;
  outline: 1px black solid;
  padding: 10px 10px 10px 10px;
  border-radius: 5px;
  background-color: white;
  background-size: 20px;
  background-position: 10px 9px;
  background-repeat: no-repeat;

  padding-left: 40px;

  &:focus {
    outline: 1px blue solid;
  };

  font-size:14px;
`;
  
export const InputText = styled.input<Icon>`
  ${Input}
`;

export const InputTextEmail = styled(InputText)`
  background-image: url(${EmailIcon});
`

export const InputTextSenha = styled(InputText)`
  background-image: url(${SenhaIcon});
`

export const ErrorMessage = styled.p`
  inline-size: 320px; 
  font-size: 10px;
  color: red;
  overflow: hidden;
`

export const ErrorMessageInvisible = styled(ErrorMessage)`
  visibility: hidden;
`

export const InputButton = styled.input`
  padding: 5px;
  border-radius: 5px;
  background-color: blue;
  color: white
`