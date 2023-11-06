import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { useDispatch } from "react-redux";
import {
  toggleFullPageLoader,
  useAppStateSelector,
} from "../store/appStateReducer";
import { AppDispatch } from "../store";

type FullPageLoaderProps = {
  closable?: boolean;
};

function FullPageLoader({ closable = false }: FullPageLoaderProps) {
  const { isFullPageLoaderVisible } = useAppStateSelector();
  const dispatch: AppDispatch = useDispatch();

  const handleClose = () => {
    if (!closable) return;
    dispatch(toggleFullPageLoader(false));
  };

  return (
    <div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isFullPageLoaderVisible}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}

export default FullPageLoader;
