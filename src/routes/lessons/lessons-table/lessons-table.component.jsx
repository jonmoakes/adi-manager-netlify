import { Link } from "react-router-dom";

import FloatingAddButton from "../../../components/floating-add-button/floating-add-button.component";
import HelpText from "../../../components/tables/help-text.component";
import LessTable from "./less-table.component";

import { Container } from "../../../styles/container/container.styles";
import { Div } from "../../../styles/div/div.styles";
import { Heading } from "../../../styles/h1/h1.styles";

import { addLessonEntryPath } from "../../../strings/strings";

const LessonsTableViewPage = () => (
  <Container>
    <Link to={addLessonEntryPath}>
      <FloatingAddButton />
    </Link>

    <Div>
      <Heading>Lessons</Heading>
      <HelpText />
    </Div>

    <LessTable />
  </Container>
);

export default LessonsTableViewPage;
