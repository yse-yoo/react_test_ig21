import React, { useState } from 'react'

function CountPage() {
  // state変数の定義
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count Page</h2>
      <p>{count}</p>
    </div>
  )
}

export default CountPage