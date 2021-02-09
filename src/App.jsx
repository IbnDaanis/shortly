import { createRef, useEffect } from 'react'
import { Boost, Header } from './components'
import { Footer, Hero, Shortener, Statistics } from './containers'
import GlobalStyle from './styles/globalStyle'
import LocomotiveScroll from 'locomotive-scroll'

const App = () => {
  const scrollRef = createRef()

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    })
  })

  return (
    <div className='scroll' ref={scrollRef}>
      <GlobalStyle />
      <Header />
      <main>
        <Hero />
        <Shortener />
        <Statistics />
        <Boost />
      </main>
      <Footer />
    </div>
  )
}

export default App
