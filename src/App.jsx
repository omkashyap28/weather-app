import Container from "./components/Container"
import Header from "./components/Header"
import Weather from "./components/Weather"

const App = () => (
  <div className="w-full h-screen bg-zinc-950 text-gray-200">
    <div className="container mx-auto">
      <Container>
        <div className="pt-10">
          <h1 className="text-3xl font-semibold tracking-wide py-2">
            Weather App
          </h1>
          <p className="text-xl font-medium tracking-wide">Simple way to get your city weather</p>
        </div>
        <Header />
        <Weather />
      </Container>
    </div>
  </div>
);

export default App;