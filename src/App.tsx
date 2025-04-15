import { useAtomValue } from "jotai"
import Worlds from "./Components/WorldComponent"
import { themeAtom } from "./jotai/atoms"

function App() {

  const theme = useAtomValue(themeAtom);

  return (
    <div data-theme={`${theme}`}>
      <Worlds />
    </div>
  )
}

export default App