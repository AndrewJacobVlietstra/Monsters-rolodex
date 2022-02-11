import './Card.css';

const Card = (props) => {
  return (
    <div className="card-container">
      <img alt='monster' src={`https://robohash.org/${props.user.id}?set=set2`} />
      <h1>{props.user.name}</h1>
      <p>{props.user.email}</p>
    </div>
  )
}

export default Card