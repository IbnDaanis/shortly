import { UrlInput } from '../../components'
import { ShortenerContainer, Container } from './ShortenerStyles'

const Shortener = () => {
  return (
    <ShortenerContainer>
      <Container>
        <UrlInput />
      </Container>
    </ShortenerContainer>
  )
}

export default Shortener
