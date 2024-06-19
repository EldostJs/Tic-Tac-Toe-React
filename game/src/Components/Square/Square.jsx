import React , {useState} from 'react'
import StyleSquare from './Square.module.css'

function Square({value , onSquareClick}) {

  return (
    <div>
        <button className={StyleSquare.btn} onClick={onSquareClick}>{value}</button>
    </div>
  )
}

export default Square
