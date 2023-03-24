import BounceLoader from "react-spinners/BounceLoader";
import './Spiner.scss'

const Spiner = () => {
    return  <div className="Spiner">
        <BounceLoader
            color="#FE5F1E"
            size={100}/>
    </div>
}

export default Spiner