import { Typography } from "@mui/material";

const ReduceEx = () => {
  const array = [
    {
      type: "shoe",
      price: 1000,
      quantity: 5,
      size: ["9", "10"],
      category: "mens",
    },
    {
      type: "shoe",
      price: 1000,
      quantity: 5,
      size: ["7", "6"],
      category: "women",
    },
    {
      type: "lipstick",
      price: 5000,
      quantity: 5,
      size: [],
      category: "women",
      colors: ["red", "pink"],
    },
    {
      type: "pant",
      price: 3000,
      quantity: 5,
      size: ["36", "38"],
      category: "mens",
    },
  ];

  const GenderList = array.reduce((prev, currValue) => {
    // console.log("prev", prev);
    const gender = currValue.category;
    if (!prev[gender]) {
      prev[gender] = [];
    }
    prev[gender].push(currValue);
    return prev;
  }, {});
  //   console.log(GenderList);

  //   -------------------------

  const typeList = array.reduce((prev, currValue) => {
    const type = currValue.type;
    if (!prev[type]) {
      prev[type] = [];
    }
    prev[type].push(currValue);
    return prev;
  }, {});

  //   console.log("typeList", typeList);

  let drive = [
    { id: "f001", type: "file", name: "abc.txt", size: 1983, parent: "root" },
    { id: "d001", type: "directory", name: "study", size: 0, parent: "root" },
    { id: "f002", type: "file", name: "xyz.txt", size: 2048, parent: "d001" },
    {
      id: "f003",
      type: "file",
      name: "test.txt",
      size: 569482,
      parent: "d001",
    },
    { id: "d002", type: "directory", name: "pervez", size: 0, parent: "root" },
    { id: "d002", type: "folder", name: "pervez", size: 0, parent: "root" },
  ];

  /**
   * Need the following output
   * { fileCount: 3, directoryCount: 1}
   */

  const result = drive.reduce(
    (previousResult, currentObject) => {
      if (currentObject.type === "file") {
        previousResult.fileCount += 1;
      } else if (currentObject.type === "directory") {
        previousResult.directoryCount += 1;
      } else {
        previousResult.folder += 1;
      }
      return previousResult;
    },
    { fileCount: 0, directoryCount: 0, folder: 0 }
  );

  //   console.log("result", result);

  //------------------------------------------------------

  const driveData = drive.reduce((prev, currValue) => {
    const type = currValue.type;
    if (prev[type]) {
      prev[type] = prev[type] + 1;
    } else {
      prev[type] = prev[type] = 1;
    }
    return prev;
  }, {});

  //   console.log("driveData", [driveData]);

  //-----------------------------------------------------

  const data = [
    {
      id: "u001",
      name: "Ram",
      posts: [
        { id: "p001", text: "This is a post on my wall" },
        { id: "p002", text: "this is my second post" },
      ],
    },
    {
      id: "u002",
      name: "Narender",
      posts: [
        { id: "p003", text: "This a post on javascript" },
        { id: "p004", text: "this is post on react" },
      ],
    },
  ];

  //   output
  //  {
  //      users: {
  //        u001: { id:'u001', name:'Ram'}
  //        u002: {id:'u002', name: 'Narender'}
  //      }
  //      posts: {
  //        p001: { id:'p001', text:'This is a post on my wall' },
  //        p002: { id:'p002', text:'this is my second post' },
  //        p003: { id:'p003', text:'This a post on javascript' },
  //        p004: { id:'p004', text:'this is post on react' }
  //      }
  //      postOwner: {
  //        u001: ['p001', 'p002'],
  //        u002: ['p003', 'p004']
  //      }
  //   }

  const userFilterData = data.reduce((prevData, currData) => {
    const userKey = "users";
    const postKey = "posts";
    const postOwner = "postOwner";

    const usersData = {
      name: currData.name,
      id: currData.id,
    };

    if (!prevData[userKey]) {
      prevData[userKey] = {};
    }

    if (!prevData[userKey][currData.id]) {
      prevData[userKey][currData.id] = [];
    }

    currData.posts.forEach((post) => {
        
      // for post
      if (!prevData[postKey]) {
        prevData[postKey] = {};
      }
      if (!prevData[postKey][post.id]) {
        prevData[postKey][post.id] = [];
      }
      prevData[postKey][post.id].push(post);

      // for postOwner
      if (!prevData[postOwner]) {
        prevData[postOwner] = {};
      }
      if (!prevData[postOwner][currData.id]) {
        prevData[postOwner][currData.id] = [];
      }
      prevData[postOwner][currData.id].push(post.id)

    });
    prevData[userKey][currData.id].push(usersData);

    return prevData;
  }, {});

  console.log("userFilterData", userFilterData);

  return <Typography>Reduce</Typography>;
};

export default ReduceEx;
