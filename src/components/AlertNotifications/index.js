// Write your code here
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'

import './index.css'
import Notification from '../Notification'

const AlertNotifications = () => (
  <div className="main-container">
    <h1 className="main-title">Alert Notifications</h1>
    <ul className="notification-container">
      <Notification>
        <div className="card">
          <AiFillCheckCircle className="status-icon success" size="30" />
          <div className="details-card">
            <h1 className="title success">Success</h1>
            <p className="description">
              You can access all the files in the folder
            </p>
          </div>
        </div>
      </Notification>
      <Notification>
        <div className="card">
          <RiErrorWarningFill className="status-icon error" size="30" />
          <div className="details-card">
            <h1 className="title error">Error</h1>
            <p className="description">
              Sorry, you are not authorized to have access to delete the files
            </p>
          </div>
        </div>
      </Notification>
      <Notification>
        <div className="card">
          <MdWarning className="status-icon warning" size="30" />
          <div className="details-card">
            <h1 className="title warning"> Warning</h1>
            <p className="description">
              Viewers of this file can see comments and suggestions
            </p>
          </div>
        </div>
      </Notification>
      <Notification>
        <div className="card">
          <MdInfo className="status-icon info" size="30" />
          <div className="details-card">
            <h1 className="title info"> Info</h1>
            <p className="description">
              Anyone on the internet can view these files
            </p>
          </div>
        </div>
      </Notification>
    </ul>
  </div>
)
export default AlertNotifications
