import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchWeather } from '../store/actions/weatherActions'
const Header = () => {

  const dispatch = useDispatch();
  const [city, setCity] = useState("delhi");
  function handleSearch(e) {
    e.preventDefault()
    dispatch(fetchWeather(city))
  }
  useEffect(() => {
    dispatch(fetchWeather(city))
  }, []);
  return (
    <header className="w-full pt-10">
      <form onSubmit={handleSearch}>
        <div className="flex flex-col sm:flex-row gap-3 items-center">
          <input
            type="text"
            value={city}
            onChange={e => setCity(e.target.value)}
            className="px-4 py-2 border border-blue-700 rounded-xl text-xl tracking-wide w-full text-gray-200"
          />
          <button
            type="submit"
            className="px-4 py-2 border bg-blue-700 hover:bg-blue-900 active:scale-[.97] rounded-xl text-xl tracking-wide max-sm:w-full cursor-pointer text-zinc-900"
          >
            Search
          </button>
        </div>
      </form>
    </header>
  )
}

export default Header;

