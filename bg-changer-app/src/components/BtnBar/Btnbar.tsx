import Button from '../Button/Button'
import styles from './Btnbar.module.scss'
import type { BtnbarProps } from './Btnbar.types'

const Btnbar = ({ changeBgFn }: BtnbarProps) => {
  return (
    <div className={styles.Btnbar}>
        <Button  onClick={()=>{
          changeBgFn("Green")
        }} className={styles.Green}>Green</Button>
        <Button onClick={()=>{
          changeBgFn("Blue")
        }}  className={styles.Blue}>Blue</Button>
        <Button onClick={()=>{
          changeBgFn("Red")
        }}  className={styles.Red}>Red</Button>
        <Button onClick={()=>{
          changeBgFn("Orange") 
        }}  className={styles.Orange}>Orange</Button>
        <Button onClick={()=>{
          changeBgFn("Purple")
        }}  className={styles.Purple}>Purple</Button>
        
    </div>
  )
}

export default Btnbar