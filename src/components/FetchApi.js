import React, { useState , useEffect} from 'react'
import { render } from '@testing-library/react';


function FetchApi() {
const [data,setData] = useState([])
const [inputs,setInputs] = useState({})

// get method used to fetch data from api and display it
const onClickHandler =(e)=>{
  // getting the number entered by user and then displaying the output 
var num = document.querySelector('input').value;
  fetch(`https://jsonplaceholder.typicode.com/posts/${num}`)
  .then((response) => response.json())
  .then((json) => {
    console.log(json)
    setData(json)
  });

}
const handleChange=(e)=>{
  setInputs((input)=>({
    ...inputs,
    [e.target.name]:e.target.value
  })
  )
}

const handleSubmit=(e)=>{
  e.preventDefault();
  console.log(inputs)
  render(
    <div>
      <p>Your name is: {inputs.title}</p>
    </div>
  )
}

  return (
    <div>
      <h2>An example to illustrate fetch api</h2>
      <input type="number" name="num" id="num" placeholder='enter number'/>
      <button onClick={onClickHandler}>Fetch Api</button> <br />
      {/* json data */}
      {/* {JSON.stringify(data, null, 2)} */}
      {/* printing fetch api data on dom */}
     <ol>
      <li>{data.id}</li>
      <li>{data.title}</li>
      <li>{data.body}</li>
      <li>{data.userId}</li>

     </ol>

      {/* form to create */}
      <form onSubmit={handleSubmit}>
        <input type="text" name='title' onChange={handleChange} />
        <input type="text" name='body' onChange={handleChange} />
        <input type="text" name='userId' onChange={handleChange} />
        <input type="submit" value={'submit'} onChange={handleChange} />
      </form>
         
    </div>
  )
}

export default FetchApi