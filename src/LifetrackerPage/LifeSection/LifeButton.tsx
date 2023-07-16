import React from 'react'

import { LifeButtonProps } from '../../types'

const LifeButton = (props: LifeButtonProps) => {
  const {
    change,
    life,
    cls,
    dispatch,
    id
  } = props;
  return (
    <button
      className={cls + ' life-button'}
      onClick={() => dispatch({type: 'CHANGE_LIFE', payload: {id, life}})}
      type="button"
    >
      {change}
    </button>
  )
}

export default LifeButton