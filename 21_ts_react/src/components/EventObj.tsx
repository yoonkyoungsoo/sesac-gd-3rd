export default function EventObj() {
  return (
    <>
      <h2>ts react에서 e 객체 타입</h2>
      <button onClick={() => alert("클릭")}>그냥 사용</button>
      <button onClick={(event) => alert("클릭")}>바로 event 객체 사용</button>
    </>
  );
}
