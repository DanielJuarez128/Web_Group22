function Counter() {
    //me permite actualizar counter
    const [counter, setCounter] = useState(0);
  
    return (
      <div>
        <h1>COUNTER :{counter} </h1>
        <button
          onClick={() => {
            setCounter (counter+ 1);
          }}
        >
          incrementar
        </button>

        <button
          onClick={() => {
            setCounter (counter- 1);
          }}
        >
          incrementar
        </button>
      </div>
    );
  }

  export default Counter;