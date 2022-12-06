import { useDispatch } from "react-redux";

import { setTablePageSize } from "../../store/table/table.action";

const useChooseTablePageSize = () => {
  const dispatch = useDispatch();

  const chooseTablePageSize = (setPageSize, e) => {
    setPageSize(Number(e.target.value));
    dispatch(setTablePageSize(Number(e.target.value)));
  };

  return { chooseTablePageSize };
};

export default useChooseTablePageSize;
