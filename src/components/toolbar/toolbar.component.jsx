import useShouldDisplayHeaderAndToolbar from "../../hooks/use-should-display-header-and-toolbar";

import ToolbarNoUser from "./toolbar-no-user.component";
import ToolbarHasUser from "./toolbar-has-user.component";

const Toolbar = () => {
  const { shouldDisplayHeaderAndToolbar } = useShouldDisplayHeaderAndToolbar();
  return (
    <>
      {shouldDisplayHeaderAndToolbar && (
        <>
          <ToolbarNoUser />
          <ToolbarHasUser />
        </>
      )}
    </>
  );
};

export default Toolbar;
