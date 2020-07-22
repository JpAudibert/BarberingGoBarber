import React from 'react';
import { FiLogIn, FiMail, FiUser, FiLock, FiArrowLeft } from 'react-icons/fi';

import logoSvg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => (
  <Container>
    <Background />

    <Content>
      <img src={logoSvg} alt="GoBarber" />
      <form>
        <h1>Faça seu cadastro</h1>

        <Input name="email" icon={FiUser} placeholder="Nome" />
        <Input name="email" icon={FiMail} placeholder="E-mail" />

        <Input
          name="password"
          icon={FiLock}
          type="password"
          placeholder="Senha"
        />

        <Button type="submit">Cadastrar</Button>

        <a href="forgot">Esqueci minha senha</a>
      </form>
      <a href="login">
        <FiArrowLeft />
        Voltar para logon
      </a>
    </Content>
  </Container>
);

export default SignUp;
