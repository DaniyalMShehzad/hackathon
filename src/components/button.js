function Button(props) {
  return (
    <button className={`propsBtn ${props.className}`} {...props}>
      {props.children}
    </button>
  );
}
export default Button;
