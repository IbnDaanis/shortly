import { Boost, Header } from './components'
import { Footer, Hero, Shortener, Statistics } from './containers'
import GlobalStyle from './styles/globalStyle'

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>
        <Hero />
        <Shortener />
        <Statistics />
        <Boost />
        <Footer />
      </main>
    </>
  )
}

export default App
