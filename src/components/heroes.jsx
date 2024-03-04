import './heroes.css';


function Heroes(props) {
    return (
        <div className="heroes-card">
            <div className="heroes-name">{props.name}</div>
            <div className='heroes-universe'>{props.universe}</div>
            <div className='heroes-alterego'>{props.alterego}</div>
            <div className='heroes-occupation'>{props.occupation}</div>
            <div className="heroes-text">{props.info}</div>
            <img src={props.url} />
        </div>
    )
}


export default Heroes;