import { Container, HeroContainer, HeroCTA, HeroImage } from './HeroStyles'
import {
  useViewportScroll,
  motion,
  useTransform,
  useMotionValue,
} from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Hero = () => {
  const { scrollY } = useViewportScroll()
  const y1 = useTransform(scrollY, [0, 300], [0, 200])
  const y2 = useTransform(scrollY, [0, 300], [0, -100])

  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 0.5,
    triggerOnce: false,
  })

  return (
    <HeroContainer>
      <Container>
        <HeroCTA
          style={{ y: y2, x: 0 }}
          transition={{ duration: 2, ease: 'easeOut' }}
        >
          <h1 className='title'>More than just shorter links</h1>
          <p className='description'>
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </p>
          <button className='cta-button'>Get Started</button>
        </HeroCTA>
        <HeroImage style={{ y: y2, x: 0 }}>
          <img src='./images/illustration-working.svg' alt='Hero Image' />
        </HeroImage>
      </Container>
    </HeroContainer>
  )
}

export default Hero
