import { Header } from './components'
import { Hero, Shortener } from './containers'
import GlobalStyle from './styles/globalStyle'

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <main>
        <Hero />
        <Shortener />
      </main>
    </div>
  )
}

export default App
