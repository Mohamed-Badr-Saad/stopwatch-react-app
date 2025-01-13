import './button.css'; 

function Button({text,onClickHandler}){

    return(
        <button onClick={onClickHandler} className="btn">{text}</button>
    );
}
export default Button;