// import "./App.css";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Redirect,
// } from "react-router-dom";
// // import StackOverflow from "./components/AskQna/StackOverflow";
// import StackOverflow from "./components/AskQna/StackOverflow";
// //import Header from "./Header";
// import AddQuestion from "./components/AskQna/AddQuestion";
// import ViewQuestion from "./components/AskQna/ViewQuestion";
// import AskQna from "./components/AskQna/AskQna";
// import Auth from "./components/Auth";
// import { useDispatch, useSelector } from "react-redux";
// import { login, logout, selectUser } from "./feature/userSlice";
// import { useEffect } from "react";
// import { auth } from "./firebase";
// import HomeDetail from "./components/HomePage/header/HomeDetail/HomeDetail";
// import Home from "./components/Blogs/home/Home";
// import Header from "./components/HomePage/header/Header";
// import DetailView from "./components/Blogs/details/DetailView";
// import About from "./components/Blogs/about/About";
// import CreatePost from "./components/Blogs/create/CreatePost";
// import HostelUI from "./components/hostel/HostelUI";
// import HostelDetails from "./components/hostel/HostelDetails";
// import Footer from "./components/Blogs/footer/Footer";
// function Routes() {
//   const user = useSelector(selectUser);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     auth.onAuthStateChanged((authUser) => {
//       if (authUser) {
//         dispatch(
//           login({
//             uid: authUser.uid,
//             photo: authUser.photoURL,
//             displayName: authUser.displayName,
//             email: authUser.email,
//           })
//         );
//       } else {
//         dispatch(logout());
//       }
//       // console.log(authUser);
//     });
//   }, [dispatch]);

//   const PrivateRoute = ({ component: Component, ...rest }) => (
//     <Route
//       {...rest}
//       render={(props) =>
//         user ? (
//           <Component {...props} />
//         ) : (
//           <Redirect
//             to={{
//               pathname: "/auth",
//               state: {
//                 from: props.location,
//               },
//             }}
//           />
//         )
//       }
//     />
//   );

//   return (
//     // <div className="App">
//     //   <Router>
//     //     <Header />
//     //     <Switch>
//     //       <Route exact path="/" component={Auth} />
//     //       <Route exact path="/" component={StackOverflow} />
//     //       <Route exact path="/add-question" component={AddQuestion} />
//     //       <Route exact path="/question" component={ViewQuestion} />
//     //     </Switch>
//     //   </Router>
//     //   <div/>
//     <div className="App">
//       <Router>
//         <Header />
//         <Switch>
//           <Route exact path="/auth" component={Auth} />
//           <PrivateRoute exact path="/" component={HomeDetail} />
//           <PrivateRoute exact path="/ask" component={StackOverflow} />

//           <PrivateRoute exact path="/add-question" component={AddQuestion} />
//           <PrivateRoute exact path="/question" component={ViewQuestion} />
//           <PrivateRoute exact path="/ourhome" component={Home} />
//           <PrivateRoute exact path="/about" component={About} />
//           <PrivateRoute exact path="/details/:id" component={DetailView} />
//           <PrivateRoute exact path="/create" component={CreatePost} />
//           <PrivateRoute exact path="/hostel" component={HostelUI} />
//           <PrivateRoute
//             exact
//             path="/hostelDetails/:id"
//             component={HostelDetails}
//           />
//         </Switch>
//         <Footer />
//       </Router>
//     </div>
//   );
// }

// export default Routes;
