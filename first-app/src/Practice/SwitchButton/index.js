import React, { useState, useEffect } from "react";
import Switch from "@mui/material/Switch";
import axios from "axios";
import { Typography } from "@mui/material";

export default function BasicSwitches() {
  const [checked, setChecked] = useState(true);
  const [post, setPost] = useState();
  const [performance, setPerformance] = useState();

  const baseURL =
    "https://dev-api-pluang.pluang.org/api/v3/asset/gold/performance";
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data.data);
      setPerformance(response.data.data["oneYear"]);
    });
  }, []);

  const handleChange = (e) => {
    setChecked(e.target.checked);
    if (e.target.checked) {
      setPerformance(post["oneYear"]);
    } else {
      setPerformance(post["fiveYear"]);
    }
  };
  console.log('post', post);
  return (
    <div>
      <Switch checked={checked} onChange={handleChange} />
      <div>
        <div>
          <Typography>{checked === true ? "One Year" : "Five Year"}</Typography>
        </div>
        <div>{performance?.athDate}</div>
        <div>{performance?.timeframe}</div>
      </div>
    </div>
  );
}
