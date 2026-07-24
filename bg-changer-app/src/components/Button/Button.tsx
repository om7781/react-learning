import styles from './Button.module.scss'
import type { BtnProps } from './Button.types'

const Button = ({ children, className, ...props} : BtnProps) => {
  return (
    <button className={[styles.Button, className].join(" ")} {...props}>{children}</button>
  )
}

export default Button