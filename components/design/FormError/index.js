import React from 'react'
import PropTypes from 'prop-types'

import Error from 'components/design/Error'


const FormError = ({ error, minLength, maxLength }) => {
  if (!error) {
    return null
  }

  if (error.message) {
    return <Error>{error.message}</Error>
  }

  if (error.type === 'required') {
    return <Error>This field is required</Error>
  }

  if (error.type === 'minLength') {
    return (
      <Error>
        This field has a minimum length restriction of
        {' '}
        <b>{minLength}</b>
      </Error>
    )
  }

  if (error.type === 'maxLength') {
    return (
      <Error>
        This field has a maximum length restriction of
        {' '}
        <b>{maxLength}</b>
      </Error>
    )
  }

  return null
}


FormError.propTypes = {
  error: PropTypes.object,
  minLength: PropTypes.number,
  maxLength: PropTypes.number,
}

FormError.defaultProps = {
  error: {},
  minLength: 0,
  maxLength: 0,
}

FormError.displayName = 'FormError'


export default FormError
