import React, {useReducer} from 'react'
import {useState} from 'react'

import './lifeSection.scss'

import LifeButton from './LifeButton'
import CounterSection from './CounterSection'
import Pawn from './Pawn'

import { reducer, initialCountersState } from './lifeSectionReducer'

type LifeSectionProps = {
  id: number,
  flip?: boolean,
  life: number,
  name: string,
  dispatch: Function,
  playerCount: number
}

const LifeSection = (props: LifeSectionProps) => {
  const {id, flip, life, name, dispatch, playerCount} = props;
  
  const [viewCounters, setViewCounters] = useState(false)
  const [state, counterDispatch] = useReducer(reducer, initialCountersState(playerCount, id))

  return (
    <div className={`full-height-layout life-section ${flip ? 'flip' : ''}`}>
      <div className="header-row align-row align-header">
        <section>
          <span>{name}</span>
        </section>
      </div>

      <section className={`counter-area${viewCounters ? ' active': ''}`}>
        <span className="counter-area-control-icon" onClick={() => setViewCounters(!viewCounters)}>
          <Pawn />
        </span>
        <section className="counter-sections">
          <CounterSection available={state.colors} counters={state.counters} counterDispatch={counterDispatch} />
        </section>
      </section>
      <div
        className="align-content centered align-row align-footer"
        onClick={() => dispatch({type: 'CHANGE_LIFE', payload: {id, life: life - 1}})}
      >
        {life}
      </div>
      <div className="double-col-row">
        <section className="centered">
          <LifeButton cls="down" change={-1} life={life - 1} dispatch={dispatch} id={id} />
          <LifeButton cls="down-big" change={-5} life={life - 5} dispatch={dispatch} id={id} />
        </section>
        <section className="centered">
          <LifeButton cls="up-big" change={5} life={life + 5} dispatch={dispatch} id={id} />
          <LifeButton cls="up" change={1} life={life + 1} dispatch={dispatch} id={id} />
        </section>
      </div>
    </div>
  )
}

export default LifeSection

