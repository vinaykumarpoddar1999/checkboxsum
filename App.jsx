import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
const data =[
  {
    "id": "1",
    "label": "12",
    "checked": false
  },
  {
    "id": "2",
    "label": "2",
    "checked": true
  },
  {
    "id": "3",
    "label": "8",
    "checked": false
  },
  {
    "id": "4",
    "label": "34",
    "checked": true
  }
]
function CheckBox({total,setTotal}){
const [check, setCheck]= useState({
  1:false,
  2:false,
  3:false,
  4:false
})

 
  const handleChange = (e) => {
    const { id, value } = e.target;
    const isChecked = !check[id]; // Determine if the checkbox is now checked

    setCheck({ ...check, [id]: isChecked });

    // Update the total based on the current state of the checkbox
    if (isChecked) {
      setTotal(total + Number(value));
    } else {
      setTotal(total - Number(value));
    }
  };
  return(
    data.map((checkbox)=>(<div>
      <input type='checkbox' onChange={handleChange} checked={check[checkbox.id]} id={checkbox.id} value={checkbox.label}  /><label>{checkbox.label}</label>
    </div>))
  )

}


function App() {
  const [total, setTotal] = useState(0)

  return (
    <>
      <h2>
        Select to get sum
      </h2>

      <CheckBox total={total} setTotal={setTotal}/>
      <h1>Sum is {total}</h1>
    </>
  )
}

export default App
