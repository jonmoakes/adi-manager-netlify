import { useSelector } from "react-redux";

import { selectErrorMessage } from "../../../store/error/error.selector";

import useHandleAddPupilProgressEntryChange from "./use-handle-add-pupil-progress-entry-change";

import FetchError from "../../../components/fetch-error/fetch-error.component";
import AddEntryHeading from "../../../components/add-entry-heading/add-entry-heading.component";
import AddPupilProgressSaveReturnButtons from "./add-pupil-progress-save-return-buttons.component";
import AddPupilProgressInstructions from "./add-pupil-progress-instructions.component";
import LatestLessonForm from "./subjects/latest-lesson-form.component";
import CockpitDrillForm from "./subjects/cockpit-drill-form.component";
import MovingOffForm from "./subjects/moving-off-form.component";
import TurningLeftForm from "./subjects/turning-left-form.component";
import TurningRightForm from "./subjects/turning-right-form.component";
import EmergingForm from "./subjects/emerging-form.component";
import CrossroadsForm from "./subjects/crossroads-form.component";
import BoxJunctionsForm from "./subjects/box-junctions-form.component";
import RoundaboutsForm from "./subjects/roundabouts-form.component";
import MiniRoundaboutsForm from "./subjects/mini-roundabouts-form.component";
import MeetingTrafficForm from "./subjects/meeting-traffic-form.component";
import AdequateClearanceForm from "./subjects/adequate-clearance-form.component";
import MakingProgressForm from "./subjects/making-progress-form.component";
import TrafficLightsForm from "./subjects/traffic-lights-form.component";
import PedestrianCrossingsForm from "./subjects/pedestrian-crossings-form.component";
import OneWayForm from "./subjects/one-way-form.component";
import CountryLanesForm from "./subjects/country-lanes-form.component";
import DualCarriagewaysForm from "./subjects/dual-carriageways-form.component";
import MotorwaysForm from "./subjects/motorways-form.component";
import IndependentDrivingForm from "./subjects/independent-driving-form.component";
import SatNavForm from "./subjects/sat-nav-form.component";
import PullUpRightForm from "./subjects/pull-up-right-form.component";
import EmergencyStopForm from "./subjects/emergency-stop-form.component";
import TirForm from "./subjects/tir-form.component";
import ParallelParkForm from "./subjects/parallel-park-form.component";
import ForwardBayParkForm from "./subjects/forward-bay-park-form.component";
import ReverseBayParkForm from "./subjects/reverse-bay-park-form.component";

import { NoHeaderFooterContainer } from "../../../styles/container/container.styles";
import { DataDiv } from "../../../styles/div/div.styles";
import { AnimatedForm } from "../../../styles/form/form.styles";

const AddPupilProgressEntryPage = () => {
  const { entry, handleChange } = useHandleAddPupilProgressEntryChange();
  const errorMessage = useSelector(selectErrorMessage);

  return (
    <NoHeaderFooterContainer>
      <>
        {errorMessage ? (
          <FetchError />
        ) : (
          <>
            <AddEntryHeading />
            <AddPupilProgressSaveReturnButtons {...{ entry }} />
            <DataDiv>
              <AddPupilProgressInstructions />
              <AnimatedForm>
                <LatestLessonForm {...{ entry, handleChange }} />
                <CockpitDrillForm {...{ entry, handleChange }} />
                <MovingOffForm {...{ entry, handleChange }} />
                <TurningLeftForm {...{ entry, handleChange }} />
                <TurningRightForm {...{ entry, handleChange }} />
                <EmergingForm {...{ entry, handleChange }} />
                <CrossroadsForm {...{ entry, handleChange }} />
                <BoxJunctionsForm {...{ entry, handleChange }} />
                <RoundaboutsForm {...{ entry, handleChange }} />
                <MiniRoundaboutsForm {...{ entry, handleChange }} />
                <MeetingTrafficForm {...{ entry, handleChange }} />
                <AdequateClearanceForm {...{ entry, handleChange }} />
                <MakingProgressForm {...{ entry, handleChange }} />
                <TrafficLightsForm {...{ entry, handleChange }} />
                <PedestrianCrossingsForm {...{ entry, handleChange }} />
                <OneWayForm {...{ entry, handleChange }} />
                <CountryLanesForm {...{ entry, handleChange }} />
                <DualCarriagewaysForm {...{ entry, handleChange }} />
                <MotorwaysForm {...{ entry, handleChange }} />
                <IndependentDrivingForm {...{ entry, handleChange }} />
                <SatNavForm {...{ entry, handleChange }} />
                <PullUpRightForm {...{ entry, handleChange }} />
                <EmergencyStopForm {...{ entry, handleChange }} />
                <TirForm {...{ entry, handleChange }} />
                <ParallelParkForm {...{ entry, handleChange }} />
                <ForwardBayParkForm {...{ entry, handleChange }} />
                <ReverseBayParkForm {...{ entry, handleChange }} />
              </AnimatedForm>
            </DataDiv>
          </>
        )}
      </>
    </NoHeaderFooterContainer>
  );
};

export default AddPupilProgressEntryPage;
