export default function Button({ content, btnStyles, onclick }) {
  return (
    <button className={btnStyles} onClick={onclick}>
      {content}
    </button>
  );
}
