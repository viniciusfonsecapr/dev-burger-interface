import React from "react";
import * as Yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import apiDevBuger from "../../services/api";
import { Link } from 'react-router-dom'
import { useHistory } from "react-router-dom";


import RegistersImage from '../../assets/carne-cadastro.svg'
import Logo from '../../assets/logo-cadastro.svg'
import { Container, RegisterImage, ContainerItens, Label, Input, SignUpLink } from './styles'
import { ErrorMessage } from "../../components";
import {Button} from "../../components";

export function Register() {

  const schema = Yup.object().shape({
    name: Yup.string().required("Nome é obrigatorio"),
    email: Yup.string().email("Digite um e-mail válido").required("O e-mail é obrigatorio"),
    password: Yup.string("Digite uma senha válida").required("A Senha é obrigatoria").min(6,"A senha deve ter pelo menos 6 digitos"),
    confirmPassword: Yup.string("Digite uma senha válida").required("A Senha é obrigatoria").oneOf([Yup.ref('password')], 'As senhas devem ser iguais'),
  })
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  let history = useHistory();

  function backToLogin() {
    history.push("/login");
  }
 

  const onSubmit = async clientData => {
    try {
      const { status } = await apiDevBuger.post('users', {
        name: clientData.name,
        email: clientData.email,
        password: clientData.password
      },{ validateStatus: () => true }
      )
      if(status === 201 || status === 200){
        toast.success('Cadastro criado com sucesso')
        backToLogin()
      } else if(status === 409 ){
        toast.error('Email já cadastrado! Faça login para acessar')
      } else {
        throw new Error ()
      }
      
    }catch(err){ 
       toast.error("Falha no sistema! Tente novamente")
      }
  
    
  }

 

  return (
    <Container>
      {/* <RegisterImage src={RegistersImage} alt="register-image" /> */}

      <ContainerItens>

        <img src={Logo} alt="logo-codeburger" width={250} style={{marginLeft: 75}}></img>
        <h1>Cadastre-se</h1>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>

          <Label>Nome</Label>
          <Input type="text"  {...register("name")} error={errors.name?.message} />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>


          <Label>Email</Label>
          <Input type="email"  {...register("email")} error={errors.email?.message} />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>

          <Label>Password</Label>
          <Input type="password" {...register("password")} error={errors.password?.message} />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>
          <Label>Confirm Password</Label>
          <Input type="password" {...register("confirmPassword")} error={errors.confirmPassword?.message} />
          <ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>

          <Button type="submit" style={{ marginTop: 28, marginLeft:'30%' , background:'yellow', color:'black' }}>Sign Up</Button>
        </form>
        <SignUpLink>Já possui conta? <Link  style={{color: 'green'}} to="/login">Login</Link></SignUpLink>
      </ContainerItens>

    </Container>
  );
}




