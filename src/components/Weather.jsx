import { useEffect } from "react";
import { useSelector } from "react-redux";
import Loading from "./Loading";
import Card from "./Card";
const Weather = () => {

  const city = useSelector(state => state.city)
  const weather = useSelector(state => state.weather)
  const forecast = useSelector(state => state.forecast)
  const loading = useSelector(state => state.loading);
  const errors = useSelector(state => state.errors);

  useEffect(() => {
    if (city) document.title = `${city} - Weather condition`;
  }, [city])

  if (loading) return <Loading />
  if (errors) return <h2 className="text-red-600">No records founded</h2>
  if (weather && forecast)
    return (
      <section className="w-full my-4 p-2 bg-black text-gray-200 rounded-md">
        <div>
          <h2 className="text-xl my-2 font-bold tracking-wider capitalize">
            City: {city ?? "Delhi"}
          </h2>
          <div className="flex gap-3 flex-col sm:flex-row">
            <div className="px-5 py-4 w-full sm:w-1/4 rounded-xl bg-zinc-900">
              <h2>
                Temperature
              </h2>
              <h1 className="text-4xl text-center">
                {tempatureConverter(weather.main.temp) ?? null}
                <sub className="text-sm">o</sub>
                <sub className="text-sm">C</sub>
              </h1>
            </div>
            <div className="flex justify-evenly px-3  py-5 sm:p-5 w-full sm:w-3/4 bg-zinc-900 rounded-xl">
              <Card title="Max" value={tempatureConverter(weather.main.temp_max)} />
              <Card title="Min" value={tempatureConverter(weather.main.temp_min)} />
              <Card title="Humidity" value={weather.main.humidity} />
              <Card title="Feels Like" value={tempatureConverter(weather.main.feels_like)} />
            </div>
          </div>
          <div className="w-full px-4 py-2 mt-2">
            <div className="bg-zinc-800 rounded-xl p-4 overflow-x-auto scroll-smooth" style={{ scrollSnapAlign: "start" }}>
              <div className="flex gap-4 min-w-max">
                {forecast.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-zinc-900 rounded-lg p-4 w-44 shrink-0 text-center"
                  >
                    <p className="text-2xl font-bold">
                      {tempatureConverter(item.main.temp)}°C
                    </p>
                    <div className="flex justify-between text-sm text-zinc-300 mt-2">
                      <span>
                        Min {tempatureConverter(item.main.temp_min)}°
                      </span>
                      <span>
                        Max {tempatureConverter(item.main.temp_max)}°
                      </span>
                    </div>
                    <p className="mt-3 text-sm capitalize text-zinc-400">
                      {item.weather?.[0]?.description}
                    </p>
                    <p className="my-3 text-sm text-gray-400">{item.dt_txt}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section >
    )
}

export default Weather;

function tempatureConverter(temp) {
  return Math.floor(temp - 273.15);
}