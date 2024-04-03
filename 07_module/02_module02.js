//es6
//바로 export 시키기

export const animals = ["dog", "cat", "rabbit"];

export function showAnimals() {
  animals.forEach((ani) => console.log(ani));
}

export const addAnimal = (newAni) => {
  // animals 배열에 인자로 전달받는 newAni를 추가한 후
  // 해당 배열을 반환하는 함수 만들기
  const newAnimalsArr = animals;
  newAnimalsArr.push(newAni);

  return newAnimalsArr;
};
