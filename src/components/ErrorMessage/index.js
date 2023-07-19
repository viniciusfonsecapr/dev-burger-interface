import React from "react";
import PropTypes from 'prop-types'
import { ErrorMensagem } from './styles'

 export function ErrorMessage({children}) {

  
    return (
        <>
         <ErrorMensagem>{children}</ErrorMensagem>
        </>
    )
}


ErrorMessage.propTypes = {
    children: PropTypes.string
}