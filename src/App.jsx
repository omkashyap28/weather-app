import Container from "./components/Container"
import Header from "./components/Header"
import Weather from "./components/Weather"

const App = () => {
  return (
    <div className="container mx-auto">
      <Container>
        <>
          <Header />
          <Weather />
        </>
      </Container>
    </div>
  )
}

export default App