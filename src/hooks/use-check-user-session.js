import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { checkUserSession } from "../store/user/user.action";

const useCheckUserSession = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);
};

export default useCheckUserSession;
