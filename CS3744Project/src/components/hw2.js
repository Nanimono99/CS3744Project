import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";

const activeStyle = {
  color: 'red',
  borderBottom: '1em, solid, black',
}

function Tab() {
  return (
      <div style={{fontFamily: "Times New Roman, Times, serif", paddingTop: "20px",
          paddingBottom: "20px", fontSize: "2vw"}}>
            <nav>
                <Link to={"/project/1"}>Nasa Project</Link> {"| "}
                <Link to={"/project/2"}>GridFunction</Link> {"| "}
                <Link to={"/project/3"}>P5 Project</Link> {"| "}
                <Link to={"/project/4"}>D3 Project</Link> 
            </nav>
      </div>
  );
}

const GridComponent = ({ start, end, children }) => {
  return <div style={{ display: 'grid',
   width: 1050, gridTemplateColumns: 'repeat(8,200px)',
    gridTemplateRows: `repeat(${parseInt((end - start) / 8)},60px)` }}>{children}</div>
}

export function GridFunction() {

  const [arr, setArr] = useState([])
  const start = 1;
  const end = 80;
  const initArr = () => {
    let newStart = start
    let newEnd = end
    let newArr = []
    for (newStart; newStart < newEnd; newStart++) {
      newArr.push(newStart)
    }
    setArr(newArr)
  }
  useEffect(() => {
    initArr()
  }, [])
  function isPrime(n) {
    if (n == 1) {
      return false
    }
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        return false
      }
    }
    return true

  }

  const getBgColor = (number) => {
    if (isPrime(number)) {
      return 'red'
    }
    if (number % 2 == 0) {

      return 'green'

    } else {
      return 'yellow'
    }
  }
  return (
    <main style={{background:'lightpink', padding:"2%"}} textAlign="center">
      <div>
        <Tab/>
      </div>

    <div>
    
    <GridComponent start={start} end={end}>
      {
        arr.map((item) => {
          return <div style={{padding:"1%", margin:"1%", width: 190, 
            height: 40,  textAlign: 'center', 
            lineHeight: '40px', backgroundColor: getBgColor(item), 
            border: `2px solid ${isPrime(item) ? 'black' : undefined}` }}>{item}</div>
        })
      }
    </GridComponent>
    </div>
    </main>

  )
}

