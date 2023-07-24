import React, { useEffect, useState } from 'react'
import './App.css'

const Game = () => {
  const [marks, setMarks] = useState([0,0,0,0,0,0,0,0,0])
  const [player, setPlayer] = useState(1)

  useEffect(() => {
    const combinations = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6],
    ]

    for(let c of combinations){
      if(marks[c[0]] === 1 && marks[c[1]] === 1 && marks[c[2]] === 1){
        console.log("player 1 is win");
      }
      if(marks[c[0]] === 2 && marks[c[1]] === 2 && marks[c[2]] === 2){
        console.log("player 2 is win");
      }
    }
  }, [marks]);

  function changeMark(i){ // here i = position
    const m = [...marks];
    if(m[i] === 0){
      m[i] = player;
      setMarks(m);
      setPlayer(player===1 ? 2 : 1)
    }else{
      alert("Please Select Empty container")
    }
  }
  return (
    <div className="Board">
      <div>
        <Block mark={marks[0]} changeMark={changeMark} position={0}/>
        <Block mark={marks[1]} changeMark={changeMark} position={1}/>
        <Block mark={marks[2]} changeMark={changeMark} position={2}/>
      </div>
      <div>
        <Block mark={marks[3]} changeMark={changeMark} position={3}/>
        <Block mark={marks[4]} changeMark={changeMark} position={4}/>
        <Block mark={marks[5]} changeMark={changeMark} position={5}/>
      </div>
      <div>
        <Block mark={marks[6]} changeMark={changeMark} position={6}/>
        <Block mark={marks[7]} changeMark={changeMark} position={7}/>
        <Block mark={marks[8]} changeMark={changeMark} position={8}/>
      </div>
    </div>
  )
}

function Block({mark, changeMark, position}){
  return(
    <div className={`Block mark${mark}`} onClick={(e) => changeMark(position)}></div>
  )
}

export default Game