import React from 'react'
import '../../../App.css'
import { SideBarData } from './SideBarData'
import { Link } from 'react-router-dom'

const SideBarGDV = () => {
  return (
    <div className='SideBar'>
      <div className="avatar-section">
        <img src={process.env.PUBLIC_URL + '/avatar.png'} alt="Web Avatar" className="avatar" />
        <h2 className="web-name">Magic Post</h2>
      </div>
      <hr />
      <div className="navigation">
        <ul className='SideBarList'>
          {SideBarData.map((val, key) => {
            return (
              <Link to={val.link} className='route-link'>
                <li
                  key={key}
                  className='row'
                >
                  <div id='icon'>{val.icon}</div>
                  <div id='title'>{val.title}</div>
                </li>
              </Link>

            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default SideBarGDV
