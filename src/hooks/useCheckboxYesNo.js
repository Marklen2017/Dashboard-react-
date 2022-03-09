import {useState} from "react"

function useCheckbox() {
    const [checked, setChecked] = useState('No')
    const [checkedName, setCheckedName] = useState(false)
    const handlerCheck = (e) => {
        let name = e.target.name
        setChecked(name)
        setCheckedName(checked === 'No')
    }
    return {checked, checkedName,handlerCheck}
}
export default useCheckbox;