// Write your code here
import './index.css'
import {GrFormClose} from 'react-icons/gr'

const Notification = props => {
  const {children} = props
  console.log(children)
  return (
    <li className="notification-item">
      {children}
      <GrFormClose className="close-icon" size="20" />
    </li>
  )
}
export default Notification
