import React, { useEffect, useState } from 'react'
import api from '../../../services/api'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import {
  Container,
  Label,
  Input,
  ButtonAddProduct,
  LabelUpload,
  ContainerInputCheckBox
} from './styles'
import ReactSelect from 'react-select'
import { useForm, Controller } from 'react-hook-form'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import { ErrorMessage } from '../../../components/ErrorMessage'
import { toast } from 'react-toastify'
import { useHistory } from 'react-router-dom'


function EditProduct() {
  const schema = Yup.object().shape({
    name: Yup.string().required('Nome Produto é Obrigatario'),
    price: Yup.string('Preço é Obrigatario').required('Preço é Obrigatario'),
    category: Yup.object().typeError('test').required('Escolha uma categoria'),
    offer: Yup.bool().typeError('test')


  })

  const [fileName, setFileName] = useState(null)
  const [categories, setCategories] = useState([])
  const { push, location: { state: { product } } } = useHistory()

  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories')

      setCategories(data)
    }

    loadCategories()
  }, [])

  const onSubmit = async data => {
    const productDataFormData = new FormData()

    productDataFormData.append('name', data.name)
    productDataFormData.append('price', data.price)
    productDataFormData.append('category', data.category.id)
    productDataFormData.append('file', data.file[0])
    productDataFormData.append('offer', data.offer)

    await toast.promise(
      api.put(`products/${product.id}`, productDataFormData), {
      pending: 'Editando um novo produto',
      success: 'Produto Editado com Sucesso',
      error: 'Falha ao Editar o produto',
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    }
    )
    setTimeout(() => {
      push('/listar-produtos')
    }, 2500)

  }

  return (
    <Container>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Label>Nome</Label>
          <Input type="text" {...register('name')} placeholder="Nome" defaultValue={product.name} />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>
        </div>

        <div>
          <Label>Preço</Label>
          <Input type="number" {...register('price')} placeholder="Preço" defaultValue={product.price} />
          <ErrorMessage>{errors.price?.message}</ErrorMessage>
        </div>

        <div>
          <Controller
            name="category"
            defaultValue={product.category}
            control={control}
            render={({ field }) => {
              return (
                <ReactSelect
                  {...field}
                  options={categories}
                  getOptionLabel={cat => cat.name}
                  getOptionValue={cat => cat.id}
                  placeholder="Categoria do Produto"
                  defaultValue={product.category}
                />
              )
            }}
          ></Controller>
          <ErrorMessage>{errors.category?.message}</ErrorMessage>
        </div>

        <div>
          <LabelUpload>
            {fileName || (
              <>
                <CloudUploadIcon />
                Carregue a imagem do produto
              </>
            )}
            <input
              type="file"
              accept="image/png, image/jpg"
              {...register('file')}
              onChange={value => {
                setFileName(value.target.files[0]?.name)
              }}
            />
            <ErrorMessage>{errors.file?.message}</ErrorMessage>
          </LabelUpload>
        </div>

        <ContainerInputCheckBox>
          <input type='checkbox'  {...register('offer')} defaultChecked={product.offer} />
          <p>Está em Oferta?</p>
        </ContainerInputCheckBox>

        <ButtonAddProduct type="submit">Editar Produto</ButtonAddProduct>
      </form>
    </Container>
  )
}

export default EditProduct
