import { useEffect } from "react"

const Filter = () => {
    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/categories')
        .then((data) => data.json())
        .then((json) => console.log(json))

    }, [])
    return <div>Filter</div>
}

export default Filter