import Style from './Style'
import {useState} from 'react'
import repos from './assets/data/repos.json'

function App() {
  const style = Style()
  const [counter, setCounter] = useState(0);

  return (
    <div className = "App" >
      <div className={style.container}>

        <button
          className={counter?style.btnSec:style.btnSecDisabled}
          onClick={()=>setCounter(counter?counter-1:0)}>
          <b>−</b> Decrement
        </button>

        <div className={style.count}>Counter: {counter}</div>

        <button
          className={(counter<repos.length-1)?style.btn:style.btnDisabled}
          onClick={()=>setCounter(counter<repos.length-1?counter+1:repos.length-1)}>
          <b>+</b> Increment
        </button>

      </div>
    </div>
  );
}

export default App;
