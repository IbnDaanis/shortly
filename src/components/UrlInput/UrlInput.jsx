import { useEffect, useState } from 'react'
import {
  Container,
  Form,
  FormButton,
  FormInput,
  FormInputContainer,
} from './UrlInputStyles'

const UrlInput = () => {
  const [url, setUrl] = useState(null)
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    console.log(data)
  }, [data])

  const handleSubmit = async e => {
    e.preventDefault()
    console.log('Submitted')
    setLoading(true)
    const fetchData = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`)
    const response = await fetchData.json()
    setData(response.result)
    setLoading(false)
  }

  return (
    <div>
      <Container>
        <Form onSubmit={e => handleSubmit(e)}>
          <FormInputContainer>
            <FormInput
              type='text'
              placeholder='Shorten a link here...'
              onChange={({ target }) => setUrl(target.value)}
            />
            <h4>Please add a link</h4>
          </FormInputContainer>
          <FormButton type='submit'>
            {loading ? 'Loading' : 'Shorten It!'}
          </FormButton>
        </Form>
      </Container>
    </div>
  )
}

export default UrlInput
