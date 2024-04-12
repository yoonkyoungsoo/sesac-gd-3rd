// export default function CharactorInfo(props) {
// const charactorData = props.charactorData
// const {charactorData} = props
export default function CharactorInfo({ charactorData }) {
  console.log(charactorData);

  return (
    <>
      <div>Name: {charactorData.name}</div>
      <div>Age: {charactorData.age}</div>
      <div>NickName: {charactorData.nickName}</div>
    </>
  );
}
