import { useContext } from "react"
import { ListContext } from "../../contexts/ListsContext"

function SubsButton({info}) {
    const {dispatch} = useContext(ListContext);

  return (
    <button onClick={() => {
        dispatch({type:"SUBS", payload: info});
    }}>
      -
    </button>
  )
}

export default SubsButton
