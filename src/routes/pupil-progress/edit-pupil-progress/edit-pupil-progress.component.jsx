import { useSelector } from "react-redux";
import { selectErrorMessage } from "../../../store/error/error.selector";

import useHandleUpdatedPupilProgressEntryChange from "./use-handle-add-updated-pupil-progress-entry-change";

import FetchError from "../../../components/fetch-error/fetch-error.component";
import EditEntryHeading from "../../../components/edit-entry-heading/edit-entry-heading.component";
import EditPupilProgressSaveReturnButtons from "./edit-pupil-progress-save-return-buttons.component";
import UpdateEntryInfo from "../../../components/tables/update-entry-info.component";
// import EditLatestLessonForm from "./edit-subjects/edit-latest-lesson-form.component";
import EditCockpitDrillForm from "./edit-subjects/edit-cockpit-drill-form.component";
// import EditMovingOffForm from "./edit-subjects/edit-moving-off-form.component";
// import EditTurningLeftForm from "./edit-subjects/edit-turning-left-form.component";
// import EditTurningRightForm from "./edit-subjects/edit-turning-right-form.component";
import EditEmergingForm from "./edit-subjects/edit-emerging-form.component";
import EditCrossroadsForm from "./edit-subjects/edit-crossroads-form.component";
import EditBoxJunctionsForm from "./edit-subjects/edit-box-junctions-form.component";
// import EditRoundaboutsForm from "./edit-subjects/edit-roundabouts-form.component";
// import EditMiniRoundaboutsForm from "./edit-subjects/edit-mini-roundabouts-form.component";
// import EditMeetingTrafficForm from "./edit-subjects/edit-meeting-traffic-form.component";
import EditAdequateClearanceForm from "./edit-subjects/edit-adequate-clearance-form.component";
// import EditMakingProgressForm from "./edit-subjects/edit-making-progress-form.component";
// import EditTrafficLightsForm from "./edit-subjects/edit-traffic-lights-form.component";
// import EditPedestrianCrossingsForm from "./edit-subjects/edit-pedestrian-crossings-form.component";
// import EditOneWayForm from "./edit-subjects/edit-one-way-form.component";
import EditCountryLanesForm from "./edit-subjects/edit-country-lanes-form.component";
import EditDualCarriagewaysForm from "./edit-subjects/edit-dual-carriageways-form.component";
// import EditMotorwaysForm from "./edit-subjects/edit-motorways-form.component";
// import EditIndependentDrivingForm from "./edit-subjects/edit-independent-driving-form.component";
// import EditSatNavForm from "./edit-subjects/edit-sat-nav-form.component";
// import EditPullUpRightForm from "./edit-subjects/edit-pull-up-right-form.component";
import EditEmergencyStopForm from "./edit-subjects/edit-emergency-stop-form.component";
// import EditTirForm from "./edit-subjects/edit-tir-form.component";
// import EditParallelParkForm from "./edit-subjects/edit-parallel-park-form.component";
// import EditForwardBayParkForm from "./edit-subjects/edit-forward-bay-park-form.component";
// import EditReverseBayParkForm from "./edit-subjects/edit-reverse-bay-park-form.component";

import { NoHeaderFooterContainer } from "../../../styles/container/container.styles";
import { DataDiv } from "../../../styles/div/div.styles";
import { AnimatedForm } from "../../../styles/form/form.styles";

const EditPupilProgressEntryPage = () => {
  const { handleChange, updatedEntry } =
    useHandleUpdatedPupilProgressEntryChange();

  const errorMessage = useSelector(selectErrorMessage);

  return (
    <NoHeaderFooterContainer>
      {errorMessage ? (
        <FetchError />
      ) : (
        <>
          <EditEntryHeading />
          <EditPupilProgressSaveReturnButtons {...{ updatedEntry }} />
          <DataDiv className="edit">
            <UpdateEntryInfo />
            <AnimatedForm>
              {/* <EditLatestLessonForm {...{ handleChange, updatedEntry }} /> */}
              <EditCockpitDrillForm {...{ handleChange, updatedEntry }} />
              {/* <EditMovingOffForm {...{ handleChange, updatedEntry }} />
              <EditTurningLeftForm {...{ handleChange, updatedEntry }} />
              <EditTurningRightForm {...{ handleChange, updatedEntry }} /> */}
              <EditEmergingForm {...{ handleChange, updatedEntry }} />
              <EditCrossroadsForm {...{ handleChange, updatedEntry }} />
              <EditBoxJunctionsForm {...{ handleChange, updatedEntry }} />
              {/* <EditRoundaboutsForm {...{ handleChange, updatedEntry }} />
              <EditMiniRoundaboutsForm {...{ handleChange, updatedEntry }} />
              <EditMeetingTrafficForm {...{ handleChange, updatedEntry }} /> */}
              <EditAdequateClearanceForm {...{ handleChange, updatedEntry }} />
              {/* <EditMakingProgressForm {...{ handleChange, updatedEntry }} />
              <EditTrafficLightsForm {...{ handleChange, updatedEntry }} />
              <EditPedestrianCrossingsForm
                {...{ handleChange, updatedEntry }}
              />
              <EditOneWayForm {...{ handleChange, updatedEntry }} /> */}
              <EditCountryLanesForm {...{ handleChange, updatedEntry }} />
              <EditDualCarriagewaysForm {...{ handleChange, updatedEntry }} />

              {/* <EditMotorwaysForm {...{ handleChange, updatedEntry }} />
              <EditIndependentDrivingForm {...{ handleChange, updatedEntry }} />
              <EditSatNavForm {...{ handleChange, updatedEntry }} />
              <EditPullUpRightForm {...{ handleChange, updatedEntry }} /> */}
              <EditEmergencyStopForm {...{ handleChange, updatedEntry }} />
              {/* <EditTirForm {...{ handleChange, updatedEntry }} />
              <EditParallelParkForm {...{ handleChange, updatedEntry }} />
              <EditForwardBayParkForm {...{ handleChange, updatedEntry }} />
              <EditReverseBayParkForm {...{ handleChange, updatedEntry }} /> */}
            </AnimatedForm>
          </DataDiv>
        </>
      )}
    </NoHeaderFooterContainer>
  );
};

export default EditPupilProgressEntryPage;
