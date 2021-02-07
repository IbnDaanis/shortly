import { useEffect, useState } from 'react'

import {
  Container,
  Form,
  FormButton,
  FormInput,
  FormInputContainer,
} from './UrlInputStyles'

const UrlInput = ({ data, setData }) => {
  const [url, setUrl] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    console.log(data)
  }, [data])

  const handleSubmit = async e => {
    e.preventDefault()
    if (!url.trim()) {
      setError(true)
      setErrorMessage('Please add a link')
      return
    } else if (
      !/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi.test(
        url.trim()
      )
    ) {
      setError(true)
      setErrorMessage('Please add a a valid URL')
      return
    } else {
      setError(false)
      setErrorMessage('')
      console.log('Submitted')
      setLoading(true)
      const fetchData = await fetch(
        `https://api.shrtco.de/v2/shorten?url=${url.trim()}`
      )
      const response = await fetchData.json()
      setData(data => [...data, response.result])
      setLoading(false)
      setUrl('')
    }
  }

  return (
    <div>
      <Container>
        <Form onSubmit={e => handleSubmit(e)}>
          <FormInputContainer>
            <FormInput
              type='text'
              placeholder='Shorten a link here...'
              value={url}
              onChange={({ target }) => {
                setUrl(target.value)
                setError(false)
                setErrorMessage('')
              }}
              error={error}
              disabled={loading}
            />
            <h4>{errorMessage}</h4>
          </FormInputContainer>
          <FormButton type='submit' disabled={loading}>
            {loading ? 'Loading' : 'Shorten It!'}
          </FormButton>
        </Form>
      </Container>
    </div>
  )
}

export default UrlInput