import React from 'react';
import './Drawer.scss'
import { DrawerProps } from '../../types';

const Drawer = (props: DrawerProps): React.ReactElement => {
  const {children, drawerActive = false} = props

  return (
    <nav
      id="drawer"
      className={`${drawerActive ? 'active' : ''}`}
    >
      <ul>
        <li >
          <a href="https://slatron.github.io/">Home</a>
        </li>
      </ul>
      {children}
    </nav>
  )
}

export default Drawer
