import { useState } from 'react'
import styles from './App.module.scss'
import Btnbar from './components/BtnBar/Btnbar'

const App = () => {
  const [bgColor, setbgColor] = useState('');

  return (
    <div className={bgColor ? [styles[bgColor.toString()], styles.App].join(" ") : styles.App}>
      <Btnbar changeBgFn={setbgColor}/>
    </div>
  )
}

export default App