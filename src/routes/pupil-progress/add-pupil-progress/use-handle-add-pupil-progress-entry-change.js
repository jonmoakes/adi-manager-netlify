import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const useHandleAddPupilProgressEntryChange = () => {
  const [entry, setEntry] = useState({
    id: uuidv4(),
    name: "",
    latestLessonDate: "",
    latestLessonGrade: "1",
    latestLessonPerformanceSummary: "",
    cockpitDrillGrade: "1",
    cockpitDrillNotes: "",
    movingOffGrade: "1",
    movingOffNotes: "",
    turningLeftGrade: "1",
    turningLeftNotes: "",
    turningRightGrade: "1",
    turningRightNotes: "",
    emergingGrade: "1",
    emergingNotes: "",
    crossroadsGrade: "1",
    crossroadsNotes: "",
    boxJunctionsGrade: "1",
    boxJunctionsNotes: "",
    roundaboutsGrade: "1",
    roundaboutsNotes: "",
    miniRbGrade: "1",
    miniRbNotes: "",
    meetingGrade: "1",
    meetingNotes: "",
    adequateGrade: "1",
    adequateNotes: "",
    makingProgressGrade: "1",
    makingProgressNotes: "",
    tlGrade: "1",
    tlNotes: "",
    pedXGrade: "1",
    pedXNotes: "",
    oneWayGrade: "1",
    oneWayNotes: "",
    lanesGrade: "1",
    lanesNotes: "",
    dcGrade: "1",
    dcNotes: "",
    mwaysGrade: "1",
    mwaysNotes: "",
    indyGrade: "1",
    indyNotes: "",
    satGrade: "1",
    satNotes: "",
    pullGrade: "1",
    pullNotes: "",
    stopGrade: "1",
    stopNotes: "",
    tirGrade: "1",
    tirNotes: "",
    pParkGrade: "1",
    pParkNotes: "",
    fBayGrade: "1",
    fBayNotes: "",
    reverseBayGrade: "1",
    reverseBayNotes: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEntry({ ...entry, [name]: value });
  };

  return { entry, handleChange };
};

export default useHandleAddPupilProgressEntryChange;
