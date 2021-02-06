import React from 'react'
import {
  Container,
  Form,
  FormButton,
  FormInput,
  FormInputContainer,
} from './UrlInputStyles'

const UrlInput = () => {
  return (
    <div>
      <Container>
        <Form>
          <FormInputContainer>
            <FormInput type='text' placeholder='Shorten a link here...' />
            <h4>Please add a link</h4>
          </FormInputContainer>
          <FormButton disabled>Shorten It!</FormButton>
        </Form>
      </Container>
    </div>
  )
}

export default UrlInput
