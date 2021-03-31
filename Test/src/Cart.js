import React, { useState } from 'react'
const Cart = () => {
  const [state, setState] = useState([])
  const [input, setInput] = useState({
    name: '',
    count: 0,
    id: new Date().getTime().toString(),
  })
  const inputHandle = (e) => {
    //debugger
    const name = e.target.name
    const value = e.target.value

    setInput({ ...input, [name]: value, id: new Date().getTime().toString() })
  }
  const removeItem = (id) => {
    let temState = [...state]
    temState = temState.filter((item) => item.id !== id)
    setState(temState)
    console.log('remove')
  }
  const addItem = () => {
    setState([...state, { ...input }])
    setInput({ name: '', count: 0 })
  }
  return (
    <div className='App'>
      <select name='name' value={input.name} onChange={inputHandle}>
        <option></option>
        <option>List-A</option>
        <option>List-B</option>
        <option>List-C</option>
      </select>
      <div className='form'>
        <input name='count' value={input.count} onChange={inputHandle} />
        <button onClick={() => addItem()}>Add</button>
      </div>
      {state.length > 0 ? (
        <table>
          <tbody>
            <tr>
              <th>List</th>
              <th>Count</th>
            </tr>
          </tbody>
          <tbody>
            {state.map((item) => {
              const { name, count, id } = item
              return (
                <tr key={id}>
                  <td> {name}</td>
                  <td>
                    {count}
                    <button onClick={() => removeItem(id)}>Remove</button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      ) : (
        <h3>Your cart is empty</h3>
      )}
    </div>
  )
}
export default Cart
