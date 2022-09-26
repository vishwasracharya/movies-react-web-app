import { logout } from "../../redux/actions/userAction";
import { useDispatch } from "react-redux";


const Signout = () => {
  const dispatch = useDispatch();
  dispatch(logout());
  window.location.href = "/auth/signin";
  return null;
};

export default Signout;
