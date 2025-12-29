import { useState } from "react";

const Header = () => {

  const [city, setCity] = useState("delhi")
  const handleSearch = function () {

  }

  return (
    <header className="w-full pt-10">
      <div className="flex gap-3 items-center">
        <input
          type="text"
          value={city}
          onChange={e => setCity(e.target.value)}
          className="px-4 py-2 border border-blue-700 rounded-xl text-xl tracking-wide w-full text-gray-200"
        />
        <button
          className="px-4 py-2 border bg-blue-700 hover:bg-blue-900 active:scale-[.97] rounded-xl text-xl tracking-wide w-full text-zinc-900"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </header>
  )
}

export default Header;