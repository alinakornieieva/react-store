import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { activeFilterChanged, fetchFilters } from "../../reducers/filterReducer"
import './Filter.scss'

const Filter = () => {
    const dispatch = useDispatch()
    const {loadingStatus, filters} = useSelector((state) => state.filter)
    useEffect(() => {
        dispatch(fetchFilters())
    }, [])
    const content = loadingStatus === 'idle' ? <View filters={filters}/> : null
    return <nav className="Filter">
       {content}
    </nav>
}

const View = ({filters}) => {
    const dispatch = useDispatch()
    return <>
        <button className="active" onClick={() => dispatch(activeFilterChanged('all'))}>All</button>
        {filters.map((item) => <button onClick={() => dispatch(activeFilterChanged(item.name))} key={item.id}>{item.name}</button>)}
    </>
}

export default Filter