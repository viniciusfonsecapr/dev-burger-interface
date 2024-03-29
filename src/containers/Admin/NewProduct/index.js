import React, { useEffect, useState } from 'react'
import api from '../../../services/api'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import {
  Container,
  Label,
  Input,
  ButtonAddProduct,
  LabelUpload
} from './styles'
import ReactSelect from 'react-select'
import { useForm, Controller } from 'react-hook-form'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import { ErrorMessage } from '../../../components/ErrorMessage'
import { toast } from 'react-toastify'
import { useHistory } from 'react-router-dom'


function NewProduct() {
  const schema = Yup.object().shape({
    name: Yup.string().required('Nome Produto é Obrigatario'),
    price: Yup.string('Preço é Obrigatario').required('Preço é Obrigatario'),
    category: Yup.object().typeError('test').required('Escolha uma categoria'),
    file: Yup.mixed()
      .test('required', 'Carregue um arquivo', value => {
        return value?.length > 0
      }).test('fileSize', 'Carrega arquivos até 2mb', value => { return value[0]?.size <= 200000 })


  })

  const [fileName, setFileName] = useState(null)
  const [categories, setCategories] = useState([])
  const { push } = useHistory()

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
    productDataFormData.append('category_id', data.category.id)
    productDataFormData.append('file', data.file[0])

    await toast.promise(
      api.post('products', productDataFormData), {
      pending: 'Criando um novo produto',
      success: 'Produto criado com Sucesso',
      error:'Falha ao criar o produto',
      position: "bottom-center",
      autoClose: 3500,
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
    },3500)

  }

  return (
    <Container>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Label>Nome</Label>
          <Input type="text" {...register('name')} placeholder="Nome" />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>
        </div>

        <div>
          <Label>Preço</Label>
          <Input type="number" {...register('price')} placeholder="Preço" />
          <ErrorMessage>{errors.price?.message}</ErrorMessage>
        </div>

        <div>
          <Controller
            name="category"
            control={control}
            render={({ field }) => {
              return (
                <ReactSelect
                  {...field}
                  options={categories}
                  getOptionLabel={cat => cat.name}
                  getOptionValue={cat => cat.id}
                  placeholder="Categoria do Produto"
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


        <ButtonAddProduct type="submit">Adicionar Produto</ButtonAddProduct>
      </form>
    </Container>
  )
}

export default NewProduct
