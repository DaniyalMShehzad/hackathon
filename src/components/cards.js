function Cards(props) {
    return (
      <div className={`propsCards ${props.className}`} {...props}>
        {props.children}
      </div>
    );
  }
  export default Cards;