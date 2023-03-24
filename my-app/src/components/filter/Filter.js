import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { activeFilterChanged, fetchFilters } from "../../reducers/filterReducer"
import './Filter.scss'

const Filter = () => {
    const dispatch = useDispatch()
    const {loadingStatus, filters, currentFilter} = useSelector((state) => state.filter)
    useEffect(() => {
        dispatch(fetchFilters())
    }, [])
    const content = loadingStatus === 'idle' ? <View filters={filters} currentFilter={currentFilter}/> : null
    return <nav className="Filter">
       {content}
    </nav>
}

const View = ({filters, currentFilter}) => {
    const dispatch = useDispatch()
    return <>
        <button className={currentFilter === 'all' ? "active" : null} onClick={() => dispatch(activeFilterChanged('all'))}>all</button>
        {filters.map((item) => <button className={currentFilter === item ? "active" : null}
         onClick={() => dispatch(activeFilterChanged(item))} key={item}>{item}</button>)}
    </>
}

export default Filter