import { useState } from "react";
import { Button } from "..";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Button onClick={() => setCount((prev) => prev + 1)}>
      Hello World {count}
    </Button>
  );
}

export default App;
