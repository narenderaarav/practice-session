import { Typography } from "@mui/material";

const ReduceExample = () => {
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
      prevData[postOwner][currData.id].push(post.id);
    });
    prevData[userKey][currData.id].push(usersData);

    return prevData;
  }, {});

  console.log("userFilterData", userFilterData);

  return <Typography>Reduce</Typography>;
};

export default ReduceExample;
