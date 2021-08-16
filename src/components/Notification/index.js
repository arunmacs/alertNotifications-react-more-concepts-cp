import {GrFormClose} from 'react-icons/gr'

import './index.css'

const Notification = props => {
  const {children} = props
  console.log(children)

  return (
    <div className="notification-container">
      <div className="icon-status-container">
        <div>{children[0]}</div>
        <p>{children[1]}</p>
      </div>
      <div className="description-icon-container">
        <p>{children[2]}</p>
        <div className="close-div">
          <GrFormClose className="close" />
        </div>
      </div>
    </div>
  )
}
export default Notification
