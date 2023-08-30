import { useState } from "react"
function App () {
  const [num, setNum] = useState (0)
  const [num2, setNum2] = useState (0)
  const [operator, setOperator] = useState ()

  const handleNumber = (e)=>{
    const input = e.target.innerText 
    if (num===0){
      setNum (input)
    } else {
      setNum(num + input)
      
    }
  }

  const clear =()=>{
    setNum(0)
  }

  const percentage =()=>{
    setNum(num/100)
  }

  const operatorHandler =(e)=>{
    setOperator(e.target.innerText)
    setNum2(num)
    setNum(0)
  }

  const calculate =()=>{
    switch(operator){
      case '+':
        setNum(parseFloat(num2) + parseFloat(num))
        break
        case '-':
        setNum(parseFloat(num2) - parseFloat(num)) 
        break
        case '*':
        setNum(parseFloat(num2) * parseFloat(num)) 
        break
        case '/':
        setNum(parseFloat(num2) / parseFloat(num)) 
        break
        default:
        break
    }
  }

  return (
<div className="App w-full h-full flex justify-centre bg-cyan-700">

  <div className='w-1/4 h-1/2 bg-black text-gray-100 rounded-lg mt-10 p-2'>
     <div className='text-right mr-12 mt-20 mb-10 text-3xl'>{num}</div>
     <div className='flex flex-wrap'>

      <button onClick={clear} className='w-20 h-20 rounded-full bg-gray-500 text-gray-900 font-bold'>AC</button>
      <button onClick={operatorHandler} className='w-20 h-20 rounded-full bg-gray-500 text-gray-900 font-bold'>+/-</button>
      <button onClick={percentage} className='w-20 h-20 rounded-full bg-gray-500 text-gray-900 font-bold'>%</button>
      <button onClick={operatorHandler} className='w-20 h-20 rounded-full bg-orange-500'>/</button>
      <button onClick={handleNumber} className='w-20 h-20 rounded-full bg-gray-900'>7</button>
      <button onClick={handleNumber} className='w-20 h-20 rounded-full bg-gray-900'>8</button>
      <button onClick={handleNumber} className='w-20 h-20 rounded-full bg-gray-900'>9</button>
      <button onClick={operatorHandler} className='w-20 h-20 rounded-full bg-orange-500'>*</button>
      <button onClick={handleNumber} className='w-20 h-20 rounded-full bg-gray-900'>4</button>
      <button onClick={handleNumber} className='w-20 h-20 rounded-full bg-gray-900'>5</button>
      <button onClick={handleNumber} className='w-20 h-20 rounded-full bg-gray-900'>6</button>
      <button onClick={operatorHandler} className='w-20 h-20 rounded-full bg-orange-500'>-</button>
      <button onClick={handleNumber} className='w-20 h-20 rounded-full bg-gray-900'>1</button>
      <button onClick={handleNumber} className='w-20 h-20 rounded-full bg-gray-900'>2</button>
      <button onClick={handleNumber} className='w-20 h-20 rounded-full bg-gray-900'>3</button>
      <button onClick={operatorHandler} className='w-20 h-20 rounded-full bg-orange-500'>+</button>
      <button onClick={handleNumber} className='w-20 h-20 rounded-full bg-gray-900'>0</button>
      <button onClick={handleNumber} className='w-20 h-20 rounded-full bg-gray-900'>/</button>
      <button onClick={handleNumber} className='w-20 h-20 rounded-full bg-gray-900'>.</button>
      <button onClick={calculate} className='w-20 h-20 rounded-full bg-orange-500'>=</button>
     </div>
  </div>
</div>
  )
}

export default App
