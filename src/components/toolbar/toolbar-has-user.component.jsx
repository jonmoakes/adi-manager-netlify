// import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";

// import useLogout from "../../custom-hooks/logout/use-logout";

// import { selectCurrentUser } from "../../redux/user/user.selectors";

// import {
//   FooterNavigationItems,
//   LoggedInContactIcon,
//   LoggedInContactIconText,
//   LinksIcon,
//   LinksIconText,
//   AccountIcon,
//   AccountIconText,
//   LogoutIcon,
//   LogoutIconText,
// } from "./toolbar.styles";

// import {
//   contactPath,
//   usefulLinksPath,
//   myAccountPath,
// } from "../../resuable-messages/reusable-messages";

// const ToolbarHasUser = () => {
//   const { logoutConfirmBox } = useLogout();
//   const currentUser = useSelector(selectCurrentUser);

//   return (
//     <>
//       {currentUser && (
//         <FooterNavigationItems>
//           <ul>
//             <li>
//               <Link to={contactPath}>
//                 <LoggedInContactIcon />
//                 <LoggedInContactIconText>Contact</LoggedInContactIconText>
//               </Link>
//             </li>
//             <li>
//               <Link to={usefulLinksPath}>
//                 <LinksIcon />
//                 <LinksIconText>Links</LinksIconText>
//               </Link>
//             </li>
//             <li>
//               <Link to={myAccountPath}>
//                 <AccountIcon />
//                 <AccountIconText>Account</AccountIconText>
//               </Link>
//             </li>
//             <li>
//               <LogoutIcon onClick={logoutConfirmBox} />
//               <LogoutIconText>Logout</LogoutIconText>
//             </li>
//           </ul>
//         </FooterNavigationItems>
//       )}
//     </>
//   );
// };

// export default ToolbarHasUser;
