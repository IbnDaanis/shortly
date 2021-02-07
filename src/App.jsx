import { Boost, Header } from './components'
import { Hero, Shortener, Statistics } from './containers'
import GlobalStyle from './styles/globalStyle'

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <main>
        <Hero />
        <Shortener />
        <Statistics />
        <Boost />
      </main>
    </div>
  )
}

export default App
