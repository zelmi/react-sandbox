export default function Star(props) {
    let starIcon = props.isFilled ? "https://cdn3.vectorstock.com/i/1000x1000/31/77/star-icon-isolated-on-background-modern-simple-sp-vector-21073177.jpg" : "https://www.kindpng.com/picc/m/131-1313967_star-symbol-text-transparent-background-star-icon-hd.png"
  return (
    //   passing a function as a prop 
    <img src={starIcon} className="card--favorite" onClick={props.handleClick} />
  );
}
