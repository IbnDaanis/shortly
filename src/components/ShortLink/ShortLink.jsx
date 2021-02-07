import { useState } from 'react'
import {
  CopyButton,
  OriginalLink,
  ShortenedLink,
  ShortLinkContainer,
} from './ShortLinkStyles'

const ShortLink = ({ link }) => {
  const [copied, setCopied] = useState(false)

  const handleClick = () => {}

  return (
    <ShortLinkContainer>
      <OriginalLink href={link.original_link} target='_blank'>
        {link.original_link}
      </OriginalLink>
      <ShortenedLink href={link.full_short_link} target='_blank'>
        {link.full_short_link}
      </ShortenedLink>
      <CopyButton onClick={handleClick}>
        {copied ? 'Copied!' : 'Copy'}
      </CopyButton>
    </ShortLinkContainer>
  )
}

export default ShortLink
