
const paginate = (items, pageNumber, pageSize) => {
  const startIndex = (pageNumber -1)*pageSize;
  const endIndex = pageNumber*pageSize;
  const result = items.slice(startIndex,endIndex);
  return result;
}

export default paginate;