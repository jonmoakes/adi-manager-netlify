// import { useState, useEffect } from "react";
// import { useSelector } from "react-redux";

// import { selectSubscriptionData } from "../../../store/customer/customer.selector";
// import { selectCurrentUser } from "../../../store/user/user.selector";

// // import { auth } from "../../../firebase/firebase.utils";

// import EmailChangeDetected from "./email-change-detected.component";

// import { Data } from "../subscription-details.styles";

// const Emails = () => {
//   const [authEmail, setAuthEmail] = useState("");
//   const [emailFromStripe, setEmailFromStripe] = useState("");

//   const subscriptionData = useSelector(selectSubscriptionData);
//   const currentUser = useSelector(selectCurrentUser);

//   const { customerId } = subscriptionData;

//   useEffect(() => {
//     if (!currentUser) return;

//     async function fetchAndSetEmails() {
//       try {
//         setAuthEmail(currentUser.email);
//         const response = await fetch("/.netlify/functions/fetch-customer-id", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             customerId,
//           }),
//         });
//         const data = await response.json();
//         console.log(data);
//       } catch (error) {
//         console.log(error);
//       }
//     }
//     fetchAndSetEmails();
//   }, [customerId, currentUser]);

//   return (
//     <>
//       {emailFromStripe === authEmail ? (
//         <>
//           <p>
//             Your login & billing email address is:
//             <br />
//             <Data className="lowerc">{emailFromStripe}</Data>
//           </p>
//           <hr />
//         </>
//       ) : (
//         <>
//           <p>
//             Your login email address is:
//             <br />
//             <Data className="lowerc">{authEmail}</Data>
//           </p>
//           <hr />
//           <p>
//             Your billing email address is:
//             <br />
//             <Data className="lowerc">{emailFromStripe}</Data>
//           </p>
//           <hr />
//           <EmailChangeDetected />
//         </>
//       )}
//     </>
//   );
// };

// export default Emails;
