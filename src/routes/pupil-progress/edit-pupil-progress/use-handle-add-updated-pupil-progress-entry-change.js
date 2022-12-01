import { useState } from "react";
import { useSelector } from "react-redux";

import { selectEntry } from "../../../store/entry/entry.selector";

const useHandleUpdatedPupilProgressEntryChange = () => {
  const entry = useSelector(selectEntry);

  const [updatedEntry, setUpdatedEntry] = useState({
    id: entry.id,
    name: entry.name,
    latestLessonDate: entry.latestLessonDate,
    latestLessonGrade: entry.latestLessonGrade,
    latestLessonPerformanceSummary: entry.latestLessonPerformanceSummary,
    cockpitDrillGrade: entry.cockpitDrillGrade,
    cockpitDrillNotes: entry.cockpitDrillNotes,
    movingOffGrade: entry.movingOffGrade,
    movingOffNotes: entry.movingOffNotes,
    turningLeftGrade: entry.turningLeftGrade,
    turningLeftNotes: entry.turningLeftNotes,
    turningRightGrade: entry.turningRightGrade,
    turningRightNotes: entry.turningRightNotes,
    emergingGrade: entry.emergingGrade,
    emergingNotes: entry.emergingNotes,
    crossroadsGrade: entry.crossroadsGrade,
    crossroadsNotes: entry.crossroadsNotes,
    boxJunctionsGrade: entry.boxJunctionsGrade,
    boxJunctionsNotes: entry.boxJunctionsNotes,
    roundaboutsGrade: entry.roundaboutsGrade,
    roundaboutsNotes: entry.roundaboutsNotes,
    miniRbGrade: entry.miniRbGrade,
    miniRbNotes: entry.miniRbNotes,
    meetingGrade: entry.meetingGrade,
    meetingNotes: entry.meetingNotes,
    adequateGrade: entry.adequateGrade,
    adequateNotes: entry.adequateNotes,
    makingProgressGrade: entry.makingProgressGrade,
    makingProgressNotes: entry.makingProgressNotes,
    tlGrade: entry.tlGrade,
    tlNotes: entry.tlNotes,
    pedXGrade: entry.pedXGrade,
    pedXNotes: entry.pedXNotes,
    oneWayGrade: entry.oneWayGrade,
    oneWayNotes: entry.oneWayNotes,
    lanesGrade: entry.lanesGrade,
    lanesNotes: entry.lanesNotes,
    dcGrade: entry.dcGrade,
    dcNotes: entry.dcNotes,
    mwaysGrade: entry.mwaysGrade,
    mwaysNotes: entry.mwaysNotes,
    indyGrade: entry.indyGrade,
    indyNotes: entry.indyNotes,
    satGrade: entry.satGrade,
    satNotes: entry.satNotes,
    pullGrade: entry.pullGrade,
    pullNotes: entry.pullNotes,
    stopGrade: entry.stopGrade,
    stopNotes: entry.stopNotes,
    tirGrade: entry.tirGrade,
    tirNotes: entry.tirNotes,
    pParkGrade: entry.pParkGrade,
    pParkNotes: entry.pParkNotes,
    fBayGrade: entry.fBayGrade,
    fBayNotes: entry.fBayNotes,
    reverseBayGrade: entry.reverseBayGrade,
    reverseBayNotes: entry.reverseBayNotes,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUpdatedEntry({ ...updatedEntry, [name]: value });
  };

  return {
    updatedEntry,
    handleChange,
  };
};

export default useHandleUpdatedPupilProgressEntryChange;
