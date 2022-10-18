// import { doc, getDoc, updateDoc } from "firebase/firestore";
// import { db } from "../../utils/firebase/firebase.utils";

// import { errorAddingOrderToDatabaseMessage } from "../../strings/strings";

// const useAddSubscriptionDataToFirestore = () => {
//   const addOrderToFirestore = async () => {
//     const ownerOrdersRef = doc(db, "users", process.env.REACT_APP_APP_OWNER_ID);
//     const ownerSnapshot = await getDoc(ownerOrdersRef);
//     const userOrdersRef = doc(db, "users", currentUser.id);
//     const userSnapshot = await getDoc(userOrdersRef);

//     try {
//       if (!ownerSnapshot.exists || !userSnapshot) return;
//       const ownerData = await ownerSnapshot.data();
//       const { orders } = ownerData;
//       const userData = await userSnapshot.data();
//       const { userOrders } = userData;

//       await updateDoc(ownerOrdersRef, {
//         orders: [...orders, firestoreOrderDetails],
//       })
//         .then(
//           await updateDoc(ownerOrdersRef, {
//             newOrder: true,
//           })
//         )
//         .then(
//           await updateDoc(ownerOrdersRef, {
//             newOrder: false,
//           })
//         )
//         .then(
//           await updateDoc(userOrdersRef, {
//             userOrders: [...userOrders, firestoreOrderDetails],
//           })
//         );
//     } catch (error) {
//       fireSwal(
//         "error",
//         errorAddingOrderToDatabaseMessage,
//         error.message,
//         0,
//         true,
//         false
//       );
//     }
//   };

//   return { addOrderToFirestore };
// };

// export default useAddOrderTofirestore;
