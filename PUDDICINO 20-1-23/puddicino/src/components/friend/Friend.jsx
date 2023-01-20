
import './index.css';

const Friend = ( {data} ) => {
    return (
        <div className="Friend">
            <div className="friendImageContainer">
            <img src={data.image} alt={data.firstName} />
            </div>
            <div className="friendDataContainer">
                <span>@{data.firstName}</span>
                <span>{data.gender === 'male' ? '🟢' :  '🔴'}</span>
            </div>
        </div>
    )
}


export default Friend;