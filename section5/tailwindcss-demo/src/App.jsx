import "./App.css";

function App() {
  return (
    <>
      <h1 className="text-4xl font-bold underline">Titulo de exemplo</h1>
      <p className="text-xl mt-7">Paragrafo de exemplo</p>

      <div className="flex justify-center gap-5 m-4 text-xl text-white">
        <div className="bg-blue-600 px-5 py-8 rounded-2xl w-64">
          Lorem ipsum dolor sit amet consectetur adipisi!
        </div>
        <div className="bg-blue-800 px-5 py-8 rounded-2xl w-48">Sla 2</div>
        <div className="bg-blue-950 px-5 py-8 rounded-2xl w-24">Sla 3</div>
      </div>

      <button className="mt-10 bg-black text-white px-5 py-3 rounded-2xl hover:bg-gray-500 duration-200 cursor-pointer hover:scale-110 ease-in-out">
        Click me
      </button>

      <div className="flex justify-center">
        <div className="mt-20 bg-blue-500 px-12 py-6 text-white font-bold w-80">
          <p className="text-center lg:text-left 2xl:text-right">Ola</p>
        </div>
      </div>
    </>
  );
}

export default App;
