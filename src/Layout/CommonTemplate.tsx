import React, { useState } from 'react'
import HeaderBar from './HeaderBar/HeaderBar'
import Drawer from './Drawer/Drawer'
import { CommonTemplateProps } from '../types'

import './CommonTemplate.scss'

const CommonTemplate = (props: CommonTemplateProps): React.ReactElement => {
  const {drawerChildren, children} = props;
  const [drawerActive, setDrawerActive] = useState(false)
  const toggleDrawer = () => setDrawerActive(prev => !prev)

  return (
    <>
      <HeaderBar {...{toggleDrawer, drawerActive}} />
      <Drawer {...{drawerActive}}>
        {drawerChildren}
      </Drawer>
      {drawerActive && <div onClick={() => setDrawerActive(false)} className="window-shade" />}
      <main>
        {children}
      </main>
    </>
  )
}

export default CommonTemplate
