function Counter() {
    //me permite actualizar counter
    const [mensaje, setMensaje] = useState("");
    const [counter, setCounter] = useState(0);
  
    useEffect(() => {
      console.log("render");
    }, [mensaje]);
  
    return (
      <div>
        <input onChange={(e) => setMensaje(e.target.value)} />
        <button
          onClick={() => {
            alert("mensaje: " + mensaje);
          }}
        >
          save
        </button>
  
        <hr />
        <h1>COUNTER :{counter} </h1>
        <button
          onClick={() => {
            setCounter (counter+ 1);
          }}
        >
          incrementar
        </button>
      </div>
    );
  }

  export default Counter;