import RomanNumberSelector from "./RomanNumberSelector";
import { romanToInt } from "../utils/roman-conversion.utils";
import { isRomanNumberValid } from "../utils/roman-nums-validation.utils";
import { useState } from "react";
const RomanEmpireNumbers = () => {
  const [romanStrig, setRomanString] = useState("")
  const [numberInt, setNumberInter] = useState<number>()
  const [items, setItems] =useState<{numberInt:number, numberRoman:string}[]>([])
  const handleAddRomanNum = (rNum: string) => {
    const sumNumber = romanStrig.concat(rNum)
    if(isRomanNumberValid(sumNumber)) {
      setRomanString(prevState=>prevState.concat(rNum))
      const resp = romanToInt(sumNumber)
      setNumberInter(resp)
    }else{
      alert("Numero incorrecto")
    }
   
  }

  const addItemTable= ()=>{
    if(items.find(el=>el.numberInt===numberInt)) return
    setItems(prevState=>[...prevState, {numberInt:numberInt || 0,numberRoman:romanStrig} ])
    setRomanString("")
    setNumberInter(undefined)
  }
  
  console.log("items", items)

  console.log("romanStrig",romanStrig)

  const handleDelete =(item:{numberInt:number, numberRoman:string})=>{
   const deleteItem= items.filter(el=>el.numberInt !==item.numberInt)
   setItems(deleteItem)
  }

  return <div style={{
    width: '700px',
    margin: 'auto'
  }}>
    <RomanNumberSelector onNumberSelected={handleAddRomanNum} />
    <div>{romanStrig}</div>
    <div>{numberInt}</div>
    {romanStrig && <div><button onClick={()=>addItemTable()}>agregar a tabla</button></div>}
    {romanStrig && <div><button onClick={()=>{
      setRomanString("")
      setNumberInter(undefined)
      }}>limpiar</button></div>}
    <section>
      <h2 className="title">
        Current stored numbers
      </h2>
      <div className="result-table-container" >
        <div className="result-table-header">
          Roman
        </div>
        <div className="result-table-header">
          Integer
        </div>
        <div className="result-table-header">
          Action
        </div>
      </div>
      
        {items.length> 0 && items.map((el, index)=>
        <div className="result-table-container" key={index}>
          <div className="result-table-row">
            {el.numberRoman}
          </div>
          <div className="result-table-row" >
            {el.numberInt}
          </div>
          
          <div className="result-table-row" >
            <button
              style={{
                width: '90%',
                height: '40px'
              }}
            onClick={()=>handleDelete(el)}
            >
              Delete
            </button>
          </div>
          </div>
          )}
    </section>
  </div>
};

export default RomanEmpireNumbers;