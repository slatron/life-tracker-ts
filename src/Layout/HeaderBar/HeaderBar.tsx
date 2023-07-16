import React from 'react'
import './HeaderBar.scss'

type HeaderBarProps = {
  toggleDrawer: Function,
  drawerActive:  boolean
};

const HeaderBar = (props: HeaderBarProps) => {
  const {toggleDrawer, drawerActive = false} = props
  return (
    <div className="header-bar">
      <div className="flex-left vertical-align-container">
        <div
            className={`hamburger ${drawerActive ? 'active' : ''}`}
            onClick={() => toggleDrawer()}
        > 
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </div>
      <div className="flex-center vertical-align-container">
        <span className="logo">LIFE</span>
        <span className="logo logo2">TRACKER</span>
      </div>
      <div className="flex-right vertical-align-container">
        <span>&nbsp;</span>
      </div>
    </div>
  )
}

export default HeaderBar
