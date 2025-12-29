const Weather = () => {
  return (
    <section className="w-full p-2 bg-black text-gray-200">
      <div>
        <div className="flex gap-3">
          <div className="p-5 w-1/4 rounded-xl bg-zinc-900">
            <h1 className="text-3xl">
              24
              <sub className="text-sm">o</sub>
              <sup className="text-sm">C</sup>
            </h1>
          </div>
          <div className="p-5 w-3/4 bg-zinc-800">

          </div>
        </div>
        <div className="w-full px-4 py-2 bg-zinc-800">

        </div>
      </div>
    </section>
  );
}

export default Weather;