import { Button } from "@/components/ui/button";
import "./index.css";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

function App() {
  const [displayValue, setDisplayValue] = useState('');

  const label = document.querySelector('#label');

  const appendToDisplay = (value: string) => {
    const updatedValue = value === '÷' ? '/' : value;
    setDisplayValue(displayValue + updatedValue);

    if (label) {
      label.textContent = displayValue + updatedValue;
    }
  }

  function calculate() {
    try {
      const result = eval(displayValue);
      setDisplayValue(result.toString());
    } catch (error) {
      if (label) {
        label.textContent = 'Invalid expression';
      }
    }
  }

  function clear() {
    setDisplayValue('');
    if (label) {
      label.textContent = displayValue;
    }
  }



  return (
    <>
    <div className="flex w-screen h-screen justify-center items-center "> 
      <Card className="w-[350px] flex flex-col">
        <CardHeader>
          <CardTitle className="flex justify-center text-lg">Calculator</CardTitle>
          <label id="label" className="w-full bg-slate-600 size-14 text-white text-lg font-bold px-2 flex justify-end items-center">{displayValue}</label>
        </CardHeader>

        <div className="grid justify-center grid-cols-4 gap-2 px-4">
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded" onClick={() => appendToDisplay('÷')}>÷</button>
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded" onClick={() => appendToDisplay('*')}>*</button>
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded" onClick={() => appendToDisplay('-')}>-</button>  
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded" onClick={() => appendToDisplay('+')}>+</button>

          <button className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded" onClick={() => appendToDisplay('9')}>9</button>
          <button className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded" onClick={() => appendToDisplay('8')}>8</button>
          <button className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded" onClick={() => appendToDisplay('7')}>7</button>  
          <button className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded" onClick={() => appendToDisplay('6')}>6</button>
 
          <button className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded" onClick={() => appendToDisplay('5')}>5</button>
          <button className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded" onClick={() => appendToDisplay('4')}>4</button>
          <button className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded" onClick={() => appendToDisplay('3')}>3</button>  
          <button className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded" onClick={() => appendToDisplay('2')}>2</button>

          <button className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded" onClick={() => appendToDisplay('1')}>1</button>
          <button className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded" onClick={() => appendToDisplay('0')}>0</button>
          <button className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded" onClick={() => appendToDisplay('.')}>.</button>  
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" onClick={calculate}>=</button>
        </div>

        <div className="flex justify-center py-4">
          <Button className="flex justify-center w-2/3 " onClick={clear}>Clear</Button>
        </div>

      </Card>
    </div>


    </>
  )
}

export default App;
