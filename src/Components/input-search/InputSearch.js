import './InputSearch.css';

const InputSearch = (props) => {
  return (
    <input className='InputSearch' placeholder="Type to see changes" onChange={props.onChangeHandler}></input>
  )
}

export default InputSearch