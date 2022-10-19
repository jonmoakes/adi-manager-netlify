import useShouldDisplayHeaderAndToolbar from "../../hooks/use-should-display-header-and-toolbar";
// import ToolbarHasUser from "./toolbar-has-user.component";
import ToolbarNoUser from "./toolbar-no-user.component";

const Toolbar = () => {
  const { shouldDisplayHeaderAndToolbar } = useShouldDisplayHeaderAndToolbar();
  return <>{shouldDisplayHeaderAndToolbar && <ToolbarNoUser />}</>;
};

export default Toolbar;
