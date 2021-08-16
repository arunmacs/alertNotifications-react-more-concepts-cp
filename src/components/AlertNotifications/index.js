import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'

import Notification from '../Notification'

import './index.css'

const AlertNotifications = () => (
  <div className="container">
    <h1>Alert Notifications</h1>
    <Notification>
      <AiFillCheckCircle className="success" />
      <h1 className="success">Success</h1>
      <p className="description">You can access all the files in the folder</p>
    </Notification>
    <Notification>
      <RiErrorWarningFill className="error" />
      <h1 className="error">Error</h1>
      <p className="description">
        Sorry, you are not authorized to have access to delete the file
      </p>
    </Notification>
    <Notification>
      <MdWarning className="warning" />
      <h1 className="warning">Warning</h1>
      <p className="description">
        Viewers of this file can see comments and suggestions
      </p>
    </Notification>
    <Notification>
      <MdInfo className="info" />
      <h1 className="info">Info</h1>
      <p className="description">Anyone on the internet can view these files</p>
    </Notification>
  </div>
)

export default AlertNotifications
