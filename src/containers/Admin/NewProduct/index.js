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
import { red } from '@mui/material/colors'

function NewProduct() {
  const schema = Yup.object().shape({
    name: Yup.string().required('Nome Produto é Obrigatario'),
    price: Yup.string('Preço é Obrigatario').required('Preço é Obrigatario'),
    category_id: Yup.object().required('Escolha uma categoria'),
    file: Yup.mixed()
      .test('required', 'Carregue um arquivo', value => {
        return value?.length > 0
      }).test('fileSize', 'Carrega arquivos até 2mb', value => { return value[0]?.size <= 200000 })


  })

  const [fileName, setFileName] = useState(null)
  const [categories, setCategories] = useState([])
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

  const onSubmit = data => console.log(data)

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
            name="category_id"
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
          <ErrorMessage>{errors.category_id?.message}</ErrorMessage>
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
