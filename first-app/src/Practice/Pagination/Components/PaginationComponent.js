import { Button, Typography } from "@mui/material";

const PaginationCompponents = ({ totalPages }) => {
  return (
    <>
      <Typography>Number of page:{totalPages} </Typography>
      
      <Button variant="outlined" href="#outlined-buttons">
        1
      </Button>
      <Button variant="outlined" href="#outlined-buttons">
        2
      </Button>
    </>
  );
};

export default PaginationCompponents;
