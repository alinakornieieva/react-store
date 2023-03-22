import { useEffect, useState } from "react"
import './Filter.scss'

const Filter = () => {
    const [state, setState] = useState([])
    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/categories')
        .then((data) => data.json())
        .then((json) => setState(json))

    }, [])
    return <nav className="Filter">
        <button className="active">All</button>
        {state.map((item) => <button key={item.id}>{item.name}</button>)}
    </nav>
}

export default Filter