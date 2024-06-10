import React, { useState } from 'react'

function CountPage() {
  // state変数の定義
  const [count, setCount] = useState(0);

  const countUpHandler = () => {
    console.log('Count up!!!')
  }

  return (
    <div>
      <h2>Count Page</h2>
      <p>{count}</p>
      <button onClick={countUpHandler}>Count up</button>
    </div>
  )
}

export default CountPage