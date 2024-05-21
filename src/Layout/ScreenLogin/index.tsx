
import Login from "../../components/Login/Login";
import imgRickyMorty from "../../data/1330376.png"


const Loginn = ()=>  {
  return (
    <>
      <div className="relative h-screen w-screen overflow-hidden">
        <img src={imgRickyMorty} alt="Background" className="absolute top-0 left-0 w-full h-full object-cover" />
        <div className="absolute inset-0 flex items-center justify-center">
          <Login/>
        </div>
      </div>
    </>
  );
}

export default Loginn;
