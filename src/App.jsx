import { Header } from './components'
import { Hero } from './containers'
import GlobalStyle from './styles/globalStyle'

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <main>
        <Hero />
      </main>
    </div>
  )
}

export default App
