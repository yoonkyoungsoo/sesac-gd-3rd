interface Props {
  name: string;
  age?: number; // age props를 옵셔널하게받을 수 있음
}

// export default function PropsTypes({ name, age }: Props) {
//   return (
//     <>
//       <h2>props로 전달받은 데이터의 타입 interface로 지정하기</h2>
//       <div>name: {name}</div>

//       <div>age: {age}</div>
//     </>
//   );
// }

export default function PropsType(props: Props) {
  const name = props.name;
  const age = props.age;

  return (
    <>
      <h2>props로 전달받은 데이터의 타입 interface로 지정하기</h2>
      <div>name: {props.name}</div>
      <div>age: {props.age}</div>
    </>
  );
}
