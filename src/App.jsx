import { Boost, Header } from './components'
import { Footer, Hero, Shortener, Statistics } from './containers'
import GlobalStyle from './styles/globalStyle'
import LocomotiveScroll from 'locomotive-scroll'

const App = () => {
  const scroll = new LocomotiveScroll({})
  return (
    <div>
      <GlobalStyle />
      <Header />
      <main>
        <Hero />
        <Shortener />
        <Statistics />
        <Boost />
        <Footer />
      </main>
    </div>
  )
}

export default App
