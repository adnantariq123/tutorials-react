import Data from './data';

export default function filterData(searchText, getList) {
  return Data.filter(xyz => {
      if (xyz.name.toLowerCase().includes(searchText.toLowerCase())) {
        return true;
      }
      if (xyz.tags.includes(searchText)) {
        return true;
      }
      return false;
    })
    .slice(0, getList);
}
