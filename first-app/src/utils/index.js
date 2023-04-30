export function getTotalPageCount(arr, itemsPerPage) {
  let totalCont = parseInt(arr.length / itemsPerPage);
  if (arr.length % itemsPerPage > 0) {
    totalCont++;
  }
  return totalCont;
}
