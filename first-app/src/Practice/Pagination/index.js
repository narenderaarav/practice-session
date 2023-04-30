import ListItemComponent from "./Components/ListItemsComponent";
import PaginationCompponents from "./Components/PaginationComponent";
import {getTotalPageCount} from "../../utils"
import { PRODUCT_LIST } from "./constent";

const itemsPerPage = 3;

const PaginationIndex = () => {
  return (
    <>

      <ListItemComponent PRODUCT_LIST={PRODUCT_LIST} />
      <PaginationCompponents totalPages={getTotalPageCount(PRODUCT_LIST, itemsPerPage)}/>
    </>
  );
};

export default PaginationIndex;
