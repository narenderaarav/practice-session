import { Typography } from "@mui/material";

const Reduce = () => {
  const number = [2, 3, 4, 5];

  const sum = number.reduce((total, num) => {
    return total + num;
  }, 0);

  console.log("sum", sum);

  //   ----------------------------

  const list = {
    a: { value: 4 },
    b: { value: 2 },
    c: { value: 3 },
  };

  const sumValue = Object.keys(list).reduce((prev, key) => {
    prev += list[key].value;
    return prev;
  }, 0);

  console.log("sumValue", sumValue);

  //   ----------------------------

  const genderList = [
    {
      name: "aarti",
      age: 22,
      gender: "female",
    },
    {
        name: "rani",
        age: 22,
        gender: "female",
      },
    {
      name: "amar",
      age: 24,
      gender: "male",
    },
    {
      name: "ravi",
      age: 26,
      gender: "male",
    },
    {
      name: "nikita",
      age: 21,
      gender: "female",
    },
  ];

  const filterGender = genderList.reduce((accumulator, currentValue) => {
    const key = currentValue.gender;
    if (!accumulator[key]) {
      accumulator[key] = [];
    }
    accumulator[key].push(currentValue);
    return accumulator;
  }, {});
  console.log("filterGender", filterGender);

  // -----------------------------------------------

  const filterData = genderList.reduce((acc, curr) => {
    const genderKey = curr.gender;
    const ageKey = curr.age;

    if (!acc[genderKey]) {
      acc[genderKey] = {};
    }
    if (!acc[genderKey][ageKey]) {
        acc[genderKey][ageKey] = [];
      }
      acc[genderKey][ageKey].push(curr);
      return acc;
  }, {});

  console.log("filterData", filterData);


  
  return <Typography>Reduce</Typography>;
};

export default Reduce;
