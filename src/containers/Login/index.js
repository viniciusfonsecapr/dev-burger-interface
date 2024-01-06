import React from 'react'
import * as Yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { toast } from 'react-toastify'
import apiDevBuger from '../../services/api'
import { Link, useHistory } from 'react-router-dom'
import { useUser } from '../../hooks/UserContext'

import LoginImg from '../../assets/hamburger-login.svg'
import Logo from '../../assets/logo.svg'
import {
  Container,
  LoginImage,
  ContainerItens,
  Label,
  Input,
  SignInLink
} from './styles'
import { Button } from '../../components'
import {ErrorMessage} from '../../components/ErrorMessage'

export function Login() {
  const history = useHistory()
  const { putUserData } = useUser()

  const schema = Yup.object().shape({
    email: Yup.string()
      .email('Digite um e-mail válido')
      .required('O e-mail é obrigatorio'),
    password: Yup.string('Digite uma senha válida')
      .required('A Senha é obrigatoria')
      .min(6, 'A senha deve ter pelo menos 6 digitos')
  })
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async clientData => {
    const { data } = await toast.promise(
      apiDevBuger.post('sessions', {
        email: clientData.email,
        password: clientData.password
      }),
      {
        pending: 'Verificando seus dados',
        success: 'Seja vindo(a)',
        error: 'Verifique seu email e senha🤯'
      }
    )

    putUserData(data)


    setTimeout(() => {
      if(data.admin) {
        history.push('/pedidos')
      } else {
        history.push('/')
      }
      
    }, 1000)
  }

  return (
    <Container>
      {/* <LoginImage src={LoginImg} alt="login-image" /> */}

      <ContainerItens>
        <img
          src={Logo}
          alt="logo-codeburger"
          width={250}
          style={{ marginLeft: 75 }}
        ></img>
        <h1>Login</h1>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Label>Email</Label>
          <Input
            type="email"
            {...register('email')}
            error={errors.email?.message}
          />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>
          <Label>Password</Label>
          <Input
            type="password"
            {...register('password')}
            error={errors.password?.message}
          />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>
          <Button type="submit" style={{ marginTop: 37, marginLeft:'30%', background:'green' }}>
            Sign In
          </Button>
        </form>
        <SignInLink>
          Não possui conta?{' '}
          <Link style={{ color: '#ffdc00', }} to="/register">
            Registrar
          </Link>
        </SignInLink>
      </ContainerItens>
    </Container>
  )
}
