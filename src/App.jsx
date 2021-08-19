import Style from './Style'
import {useState, useEffect} from 'react'
import repos from './assets/data/repos.json'
import axios from 'axios'
import clsx from 'clsx'
import delay from 'delay'
import millify from "millify"

function App() {
  const style = Style()

  const [counter, setCounter] = useState(0)
  const [currentRepo, setCurrentRepo] = useState({full_name: 'Loading', description: 'Loading', stargazers_count:''})
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCurrentRepo(counter)
  }, [counter]);

  /**
   *
   * @param {number} index index of the requested repo
   */
  function getCurrentRepo(index){
    setLoading(true)
    // using index not from `counter` brings a possibility of the states
    // not synching properly, but it allows us to avoid callbacks
    Promise.allSettled([
      // We're gonna resolve the promise no earlier than in .5 second
      // to finish the animation
      axios.get(`https://api.github.com/repos/${repos[index]}`),
      delay(500)
    ])
      .then(([{value:{data:{full_name, description, stargazers_count}}}])=>{
        setCurrentRepo({
          full_name,
          description,
          stargazers_count
        })
      })
      // This is indeed a very questionable way of displaying errors
      // but I don't want to create another state for a simple exercise
      .catch(()=>setCurrentRepo({
        full_name: 'Oh no! :[',
        description: `Something went wrong. Does the repo really exist?`,
        stargazers_count: ''
      }))
      .finally(()=>setLoading(false))
  }

  /**
   * Modify the counter and clamp it to viable values
   * @param {number} changeBy the number to add to the current counter state
   */
  function changeCounter(changeBy){
    const newCounter = Math.min(Math.max(counter + changeBy, 0), repos.length - 1)
    setCounter(newCounter)
    getCurrentRepo(newCounter)
  }

  return (
    <div className = "App" >
      <div className={style.container}>
            <div className={style.counterContainer}>
              <button
                className={counter?style.btnSec:style.btnSecDisabled}
                onClick={()=>changeCounter(-1)}>
                <b>−</b> Decrement
              </button>
              <div className={style.count}>Counter: {counter}</div>
              <button
                className={(counter<repos.length-1)?style.btn:style.btnDisabled}
                onClick={()=>changeCounter(1)}>
                <b>+</b> Increment
              </button>
            </div>

          <div className={clsx(style.result, loading&&style.loadingResult)}>
            <h1>{currentRepo.full_name}</h1>
            <div className={style.description}>{currentRepo.description}</div>
            <div>★ <span className={style.stargazers}>{millify(parseInt(currentRepo.stargazers_count||0))}</span></div>
          </div>

      </div>
    </div>
  );
}

export default App;
