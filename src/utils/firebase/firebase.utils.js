import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  query,
  getDocs,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBosAHMRjyMgSm6O2ln5xsFqxV1loFj4So",
  authDomain: "adi-manager-netlify.firebaseapp.com",
  projectId: "adi-manager-netlify",
  storageBucket: "adi-manager-netlify.appspot.com",
  messagingSenderId: "506457580377",
  appId: "1:506457580377:web:7c605e9cec4f0a1a7be248"
};

initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();

export const getCollectionAndDocuments = async () => {
  const collectionRef = collection(db, "products");
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((docSnapshot) => docSnapshot.data());
};

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
         subscriptionData: {},
        diaryEntries: [
          {
            date: "2022-02-01",
            entry: "John Doe - 10am-12pm, Roundabouts.",
            id: 1,
          },
        ],
        lessonEntries: [
          {
            id: 2,
            date: "2022-02-01",
            name: "John Doe",
            startTime: "10:00",
            endTime: "12:00",
            paid: "Yes",
            lessonSummary: "We Worked On Roundabout Approach Speed.",
            nextLessonPlan:
              "Busier Roundabouts To Make Use Of Our New Approach Speed Skills",
            nextLessonDate: "2022-09-01",
            nextLessonTime: "10:00",
            nextLessonPickup: "Work",
          },
        ],
        incomeEntries: [
          {
            id: 3,
            date: "2022-02-01",
            name: "John Doe",
            incomeReceived: "50",
            blockBooking: "No",
            paymentMethod: "Cash",
          },
        ],
        expensesEntries: [
          {
            id: 4,
            date: "2022-02-01",
            description: "Fuel",
            amount: "40",
          },
        ],
        totalExpensesWeekEntries: [
          {
            id: 5,
            date: "2022-02-01",
            weeklyAmount: "300",
          },
        ],
        totalExpensesMonthEntries: [
          {
            id: 6,
            date: "2022-02-01",
            monthlyAmount: "1000",
          },
        ],
        totalExpensesYearEntries: [
          {
            id: 7,
            date: "2022-02-01",
            yearlyAmount: "20000",
          },
        ],
        pupilsEntries: [
          {
            id: 8,
            name: "John Doe",
            address: "Example Address",
            pickUpDropOffAddress: "",
            emailAddress: "john-doe@example.com",
            primaryPhoneNumber: "01234567890",
            dateOfBirth: "2003-04-01",
            licenceNumber: "",
            licenceExpiryDate: "",
            eyesightCheckedDate: "",
            glassesRequired: "no",
            medicalConditions: "",
            experienceLevel: "beginner",
            theoryTestPassed: "yes",
            theoryTestDate: "",
            theoryCertificateNumber: "",
            drivingTestDate: "",
            drivingTestTime: "",
            drivingTestLocation: "",
            drivingTestResult: "",
          },
        ],
        blockBookingEntries: [
          {
            id: 9,
            name: "John Doe",
            initialBlockBookingDate: "2022-02-01",
            hoursPurchased: "10",
            latestLessonDate: "2022-02-01",
            latestLessonLength: "2",
            balanceHoursRemaining: "8",
          },
        ],
        pupilProgressEntries: [
          {
            id: 10,
            name: "John Doe",
            latestLessonDate: "2022-02-01",
            latestLessonGrade: "1",
            latestLessonPerformanceSummary: "Introduced The Cockpit Drill.",
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
          },
        ],
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error creating user ", error);
    }
  }

  return userSnapshot;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (userAuth) => {
        unsubscribe();
        resolve(userAuth);
      },
      reject
    );
  });
};
