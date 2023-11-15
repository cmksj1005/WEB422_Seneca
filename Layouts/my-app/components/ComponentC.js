export default function ComponentC(props) {
  return (
    <button onClick={(e) => props.setCount((n) => n + 1)}>
      Increase Value
    </button>
  );
}
