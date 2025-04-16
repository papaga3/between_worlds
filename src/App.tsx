import { useAtomValue } from "jotai"
import Worlds from "./Components/WorldComponent"
import { worldAtom } from "./jotai/atoms"

function App() {

  const theme = useAtomValue(worldAtom);

  return (
    <div data-theme={`${theme}`}>
      <Worlds />
    </div>
  )
}

export default App