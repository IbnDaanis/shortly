import { useState } from 'react'
import {
  CopyButton,
  OriginalLink,
  ShortenedLink,
  ShortenedLinkContainer,
  ShortLinkContainer,
} from './ShortLinkStyles'

const ShortLink = ({ link }) => {
  const [copied, setCopied] = useState(false)

  const handleClick = () => {
    const el = document.createElement('textarea')
    el.value = link.full_short_link
    document.body.appendChild(el)
    el.select()
    document.execCommand('copy')
    document.body.removeChild(el)
    setCopied(true)

    setTimeout(() => {
      setCopied(false)
    }, 3000)
  }

  return (
    <ShortLinkContainer>
      <OriginalLink href={link.original_link} target='_blank'>
        {link.original_link}
      </OriginalLink>
      <ShortenedLinkContainer>
        <ShortenedLink href={link.full_short_link} target='_blank'>
          {link.full_short_link}
        </ShortenedLink>
        <CopyButton onClick={handleClick} copied={copied}>
          {copied ? 'Copied!' : 'Copy'}
        </CopyButton>
      </ShortenedLinkContainer>
    </ShortLinkContainer>
  )
}

export default ShortLink
