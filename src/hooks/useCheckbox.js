import {useState} from "react"

function useCheckbox() {
    const [checked, setChecked] = useState("No")
    const handlerCheck = (e) => {
        let name = e.target.name
        setChecked(name)
    }
    return {checked, handlerCheck}
}
export default useCheckbox;