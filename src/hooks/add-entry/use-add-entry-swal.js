import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import useAddDiaryEntryToFirestore from "./categories/use-add-diary-entry-to-firestore";
import useAddLessonEntryToFirestore from "./categories/use-add-lesson-entry-to-firestore";
import useAddIncomeEntryToFirestore from "./categories/use-add-income-entry-to-firestore";
import useAddExpensesEntryToFirestore from "./categories/use-add-expenses-entry-to-firestore";
import useAddTotalExpensesWeekEntryToFirestore from "./categories/use-add-total-expenses-week-entry-to-firestore";
import useAddTotalExpensesMonthEntryToFirestore from "./categories/use-add-total-expenses-month-entry-to-firestore";
import useAddTotalExpensesYearEntryToFirestore from "./categories/use-add-total-expenses-year-entry-to-firestore";
import useAddPupilEntryToFirestore from "./categories/use-add-pupil-entry-to-firestore";
import useAddBlockBookingEntryToFirestore from "./categories/use-add-block-booking-entry-to-firestore";
// import useAddPupilProgressEntryToFirestore from "./categories/use-add-pupil-progress-entry-to-firestore";

import { addEntryText, confirmAddEntryMessage } from "../../strings/strings";

// receives the entry from the redux store where it was added in the diary save and return buttons component.
// conditionally update firestore  depending on what page we're on by checking what path we're on and the deleting the corresponding entry from firestore.
// This useAddEntrySwal function is then used in the add save and return buttons components.

const useAddEntrySwal = () => {
  const { addDiaryEntryToFirestore } = useAddDiaryEntryToFirestore();
  const { addLessonEntryToFirestore } = useAddLessonEntryToFirestore();
  const { addIncomeEntryToFirestore } = useAddIncomeEntryToFirestore();
  const { addExpensesEntryToFirestore } = useAddExpensesEntryToFirestore();
  const { addTotalExpensesWeekEntryToFirestore } =
    useAddTotalExpensesWeekEntryToFirestore();
  const { addTotalExpensesMonthEntryToFirestore } =
    useAddTotalExpensesMonthEntryToFirestore();
  const { addTotalExpensesYearEntryToFirestore } =
    useAddTotalExpensesYearEntryToFirestore();
  const { addPupilEntryToFirestore } = useAddPupilEntryToFirestore();
  const { addBlockBookingEntryToFirestore } =
    useAddBlockBookingEntryToFirestore();
  // const { addPupilProgressEntryToFirestore } =
  //   useAddPupilProgressEntryToFirestore();

  const swal = withReactContent(Swal);

  const addEntry = () => {
    addDiaryEntryToFirestore();
    addLessonEntryToFirestore();
    addIncomeEntryToFirestore();
    addExpensesEntryToFirestore();
    addTotalExpensesWeekEntryToFirestore();
    addTotalExpensesMonthEntryToFirestore();
    addTotalExpensesYearEntryToFirestore();
    addPupilEntryToFirestore();
    addBlockBookingEntryToFirestore();
    // addPupilProgressEntryToFirestore();
  };

  const addEntrySwal = () => {
    swal
      .fire({
        title: confirmAddEntryMessage,
        icon: "question",
        showCancelButton: true,
        cancelButtonColor: "red",
        confirmButtonText: addEntryText,
        allowOutsideClick: false,
        reverseButtons: true,
        confirmButtonColor: "#3085d6",
        background: "black",
        backdrop: `
        rgba(36, 122, 252, 0.8)`,
        customClass: "confirm",
      })
      .then((result) => {
        if (result.isConfirmed) {
          addEntry();
        }
      });
  };

  return { addEntrySwal };
};

export default useAddEntrySwal;
