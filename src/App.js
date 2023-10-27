import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useState } from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import ButtonAppBar from "./Appbar";
import { Paper } from "@material-ui/core";

import Questions from "./components/AskQna/Questions";
//import Header from "./Header";
import AddQuestion from "./components/AskQna/AddQuestion/AddQuestion";

import ViewQuestion from "./components/AskQna/ViewQuestion";
//import AskQna from "./components/AskQna/AskQna";
import Auth from "./components/Auth";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./feature/userSlice";
import { useEffect } from "react";
import { auth } from "./firebase";
import HomeDetail from "./components/HomePage/header/HomeDetail/HomeDetail";
import Home from "./components/Blogs/home/Home";
import Header from "./components/HomePage/header/Header";
import AuthHeader from "./components/HomePage/header/AuthHeader";
import DetailView from "./components/Blogs/post-detail/DetailView";
import About from "./components/Blogs/about-info/AskCUIAbout";
import CreatePost from "./components/Blogs/create-blog/CreatePost";
import Update from "./components/Blogs/create-blog/Update";
import HostelUI from "./components/hostel/HostelUI";
import HostelDetail from "./components/hostel/HostelDetails";
import Footer from "./components/Blogs/footer/Footer";
//import Document from "./components/Documents/Document";
import Register from "./components/Auth/register";
import Document from "./components/Documents/Document";
//import HomeDoc from "./components/Documents/DepHome";
//import Archit from "./components/Documents/Departments/Archit";
import UserBlogs from "./components/Blogs/UserBlogs/UserBlogs";
import ScrollToTop from "./ScrollToTop";
import HostelContact from "./components/hostel/HostelContact";
import FoodDetails from "./components/food/FoodDetails";
import Food from "./components/food/Food";
import Myprofile from "./components/Auth/myprofile";
/////////

import Cs from "./components/Documents/Departments/Cs";
import Chemical from "./components/Documents/Departments/Chemical";
import Archit from "./components/Documents/Departments/Archit";
import Accounting from "./components/Documents/Departments/Accounting";
import Business from "./components/Documents/Departments/Business";
import Electrical from "./components/Documents/Departments/Electrical";
import Mathematics from "./components/Documents/Departments/Mathematics";
import Physics from "./components/Documents/Departments/Physics";
import Psychology from "./components/Documents/Departments/Psychology";
import Media from "./components/Documents/Departments/Media";
import Pharmacy from "./components/Documents/Departments/Pharmacy";
import CsFirst from "./components/Documents/CSsemesters/CsFirst";
import CsSecond from "./components/Documents/CSsemesters/CsSecond";
import CsThird from "./components/Documents/CSsemesters/CsThird";
import CsForth from "./components/Documents/CSsemesters/CsForth";
import CsFifth from "./components/Documents/CSsemesters/CsFifth";
import CsSixth from "./components/Documents/CSsemesters/CsSixth";
import CsSeventh from "./components/Documents/CSsemesters/CsSeventh";
import CsEighth from "./components/Documents/CSsemesters/CsEighth";
import ChemFirst from "./components/Documents/ChemicalSemesters/ChemFirst";
import ChemSecond from "./components/Documents/ChemicalSemesters/ChemSecond";
import ChemThird from "./components/Documents/ChemicalSemesters/ChemThird";
import ChemForth from "./components/Documents/ChemicalSemesters/ChemForth";
import ChemFifth from "./components/Documents/ChemicalSemesters/ChemFifth";
import ChemSixth from "./components/Documents/ChemicalSemesters/ChemSixth";
import ChemSeventh from "./components/Documents/ChemicalSemesters/ChemSeventh";
import ChemEighth from "./components/Documents/ChemicalSemesters/ChemEighth";
import AccFirst from "./components/Documents/AccountingSemesters/AccFirst";
import AccSecond from "./components/Documents/AccountingSemesters/AccSecond";
import AccThird from "./components/Documents/AccountingSemesters/AccThird";
import AccForth from "./components/Documents/AccountingSemesters/AccForth";
import AccFifth from "./components/Documents/AccountingSemesters/AccFifth";
import AccSixth from "./components/Documents/AccountingSemesters/AccSixth";
import AccSeventh from "./components/Documents/AccountingSemesters/AccSeventh";
import AccEighth from "./components/Documents/AccountingSemesters/AccEighth";
import ArchitFirst from "./components/Documents/ArchitectureSemesters/ArchitFirst";
import ArchitSecond from "./components/Documents/ArchitectureSemesters/ArchitSecond";
import ArchitThird from "./components/Documents/ArchitectureSemesters/ArchitThird";
import ArchitForth from "./components/Documents/ArchitectureSemesters/ArchitForth";
import ArchitFifth from "./components/Documents/ArchitectureSemesters/ArchitFifth";
import ArchitSixth from "./components/Documents/ArchitectureSemesters/ArchitSixth";
import ArchitSeventh from "./components/Documents/ArchitectureSemesters/ArchitSeventh";
import ArchitEighth from "./components/Documents/ArchitectureSemesters/ArchitEighth";
import BusinFirst from "./components/Documents/BusinessSemesters/BusinFirst";
import BusinSecond from "./components/Documents/BusinessSemesters/BusinSecond";
import BusinThird from "./components/Documents/BusinessSemesters/BusinThird";
import BusinForth from "./components/Documents/BusinessSemesters/BusinForth";
import BusinFifth from "./components/Documents/BusinessSemesters/BusinFifth";
import BusinSixth from "./components/Documents/BusinessSemesters/BusinSixth";
import BusinSeventh from "./components/Documents/BusinessSemesters/BusinSeventh";
import BusinEighth from "./components/Documents/BusinessSemesters/BusinEighth";
import ElectFirst from "./components/Documents/ElectricalSemesters/ElectFirst";
import ElectSecond from "./components/Documents/ElectricalSemesters/ElectSecond";
import ElectThird from "./components/Documents/ElectricalSemesters/ElectThird";
import ElectForth from "./components/Documents/ElectricalSemesters/ElectForth";
import ElectFifth from "./components/Documents/ElectricalSemesters/ElectFifth";
import ElectSixth from "./components/Documents/ElectricalSemesters/ElectSixth";
import ElectSeventh from "./components/Documents/ElectricalSemesters/ElectSeventh";
import ElectEighth from "./components/Documents/ElectricalSemesters/ElectEighth";
import MathsEighth from "./components/Documents/MathematicsSemesters/MathsEighth";
import MathsFirst from "./components/Documents/MathematicsSemesters/MathsFirst";
import MathsSecond from "./components/Documents/MathematicsSemesters/MathsSecond";
import MathsThird from "./components/Documents/MathematicsSemesters/MathsThird";
import MathsForth from "./components/Documents/MathematicsSemesters/MathsForth";
import MathsFifth from "./components/Documents/MathematicsSemesters/MathsFifth";
import MathsSixth from "./components/Documents/MathematicsSemesters/MathsSixth";
import MathsSeventh from "./components/Documents/MathematicsSemesters/MathsSeventh";
import MediaFirst from "./components/Documents/MediaSemesters/MediaFirst";
import MediaSecond from "./components/Documents/MediaSemesters/MediaSecond";
import MediaThird from "./components/Documents/MediaSemesters/MediaThird";
import MediaForth from "./components/Documents/MediaSemesters/MediaForth";
import MediaFifth from "./components/Documents/MediaSemesters/MediaFifth";
import MediaSixth from "./components/Documents/MediaSemesters/MediaSixth";
import MediaSeventh from "./components/Documents/MediaSemesters/MediaSeventh";
import MediaEighth from "./components/Documents/MediaSemesters/MediaEighth";
import PharmFirst from "./components/Documents/PharmacySemesters/PharmFirst";
import PharmSecond from "./components/Documents/PharmacySemesters/PharmSecond";
import PharmThird from "./components/Documents/PharmacySemesters/PharmThird";
import PharmForth from "./components/Documents/PharmacySemesters/PharmForth";
import PharmFifth from "./components/Documents/PharmacySemesters/PharmFifth";
import PharmSixth from "./components/Documents/PharmacySemesters/PharmSixth";
import PharmSeventh from "./components/Documents/PharmacySemesters/PharmSeventh";
import PharmEighth from "./components/Documents/PharmacySemesters/PharmEighth";
import PhysFirst from "./components/Documents/PhysicsSemesters/PhysFirst";
import PhysSecond from "./components/Documents/PhysicsSemesters/PhysSecond";
import PhysThird from "./components/Documents/PhysicsSemesters/PhysThird";
import PhysForth from "./components/Documents/PhysicsSemesters/PhysForth";
import PhysFifth from "./components/Documents/PhysicsSemesters/PhysFifth";
import PhysSixth from "./components/Documents/PhysicsSemesters/PhysSixth";
import PhysSeventh from "./components/Documents/PhysicsSemesters/PhysSeventh";
import PhysEighth from "./components/Documents/PhysicsSemesters/PhysEighth";
import PsychFirst from "./components/Documents/PsychologySemesters/PsychFirst";
import PsychSecond from "./components/Documents/PsychologySemesters/PsychSecond";
import PsychThird from "./components/Documents/PsychologySemesters/PsychThird";
import PsychForth from "./components/Documents/PsychologySemesters/PsychForth";
import PsychFifth from "./components/Documents/PsychologySemesters/PsychFifth";
import PsychSixth from "./components/Documents/PsychologySemesters/PsychSixth";
import PsychSeventh from "./components/Documents/PsychologySemesters/PsychSeventh";
import PsychEighth from "./components/Documents/PsychologySemesters/PsychEighth";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            displayName: authUser.displayName,

            email: authUser.email,
          })
        );
      } else {
        dispatch(logout());
      }
      //console.log(authUser.displayName);
    });
  }, [dispatch]);

  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        user ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/auth",
              state: {
                from: props.location,
              },
            }}
          />
        )
      }
    />
  );
  const [darkMode, setDarkMode] = useState(false);

  const theme = createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light",
    },
  });
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Paper style={{ height: "100%" }}>
          <Router>
            <ScrollToTop />
            <ButtonAppBar
              check={darkMode}
              change={() => setDarkMode(!darkMode)}
            />
            {user ? <Header /> : <AuthHeader />}

            <Switch>
              <Route exact path="/auth" component={Auth} />
              <PrivateRoute exact path="/" component={HomeDetail} />
              <PrivateRoute
                exact
                path="/add-question"
                component={AddQuestion}
              />
              <PrivateRoute exact path="/myblogs" component={UserBlogs} />
              <PrivateRoute
                exact
                path="/create/:category?"
                component={CreatePost}
              />
              <PrivateRoute exact path="/details/:id" component={DetailView} />
            </Switch>

            {/* <Route exact path="/" component={Auth} /> */}
            <Route exact path="/question" component={ViewQuestion} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/about" component={About} />
            <Route exact path="/home" component={HomeDetail} />
            <Route exact path="/hostel" component={HostelUI} />
            <Route exact path="/hostelDetails/:id" component={HostelDetail} />
            <Route exact path="/docs" component={Document} />
            <Route exact path="/ourhome" component={Home} />
            <Route exact path="/ask" component={Questions} />
            <Route exact path="/update/:id" component={Update} />
            <Route exact path="/hostelcontact" component={HostelContact} />
            <Route exact path="/food" component={Food} />
            <Route exact path="/fooddetails/:id" component={FoodDetails} />
            <Route exact path="/myprofile" component={Myprofile} />

            <Route path="/Cs" component={Cs} />
            <Route path="/Chemical" component={Chemical} />
            <Route path="/Archit" component={Archit} />
            <Route path="/Accounting" component={Accounting} />
            <Route path="/Business" component={Business} />
            <Route path="/Electrical" component={Electrical} />
            <Route path="/Mathematics" component={Mathematics} />
            <Route path="/Physics" component={Physics} />
            <Route path="/Psychology" component={Psychology} />
            <Route path="/Media" component={Media} />
            <Route path="/Pharmacy" component={Pharmacy} />

            <Route path="/CsFirst" component={CsFirst} />
            <Route path="/CsSecond" component={CsSecond} />
            <Route path="/CsThird" component={CsThird} />
            <Route path="/CsForth" component={CsForth} />
            <Route path="/CsFifth" component={CsFifth} />
            <Route path="/CsSixth" component={CsSixth} />
            <Route path="/CsSeventh" component={CsSeventh} />
            <Route path="/CsEighth" component={CsEighth} />

            <Route path="/ChemFirst" component={ChemFirst} />
            <Route path="/ChemSecond" component={ChemSecond} />
            <Route path="/ChemThird" component={ChemThird} />
            <Route path="/ChemForth" component={ChemForth} />
            <Route path="/ChemFifth" component={ChemFifth} />
            <Route path="/ChemSixth" component={ChemSixth} />
            <Route path="/ChemSeventh" component={ChemSeventh} />
            <Route path="/ChemEighth" component={ChemEighth} />

            <Route path="/AccFirst" component={AccFirst} />
            <Route path="/AccSecond" component={AccSecond} />
            <Route path="/AccThird" component={AccThird} />
            <Route path="/AccForth" component={AccForth} />
            <Route path="/AccFifth" component={AccFifth} />
            <Route path="/AccSixth" component={AccSixth} />
            <Route path="/AccSeventh" component={AccSeventh} />
            <Route path="/AccEighth" component={AccEighth} />

            <Route path="/ArchitFirst" component={ArchitFirst} />
            <Route path="/ArchitSecond" component={ArchitSecond} />
            <Route path="/ArchitThird" component={ArchitThird} />
            <Route path="/ArchitForth" component={ArchitForth} />
            <Route path="/ArchitFifth" component={ArchitFifth} />
            <Route path="/ArchitSixth" component={ArchitSixth} />
            <Route path="/ArchitSeventh" component={ArchitSeventh} />
            <Route path="/ArchitEighth" component={ArchitEighth} />

            <Route path="/BusinFirst" component={BusinFirst} />
            <Route path="/BusinSecond" component={BusinSecond} />
            <Route path="/BusinThird" component={BusinThird} />
            <Route path="/BusinForth" component={BusinForth} />
            <Route path="/BusinFifth" component={BusinFifth} />
            <Route path="/BusinSixth" component={BusinSixth} />
            <Route path="/BusinSeventh" component={BusinSeventh} />
            <Route path="/BusinEighth" component={BusinEighth} />

            <Route path="/ElectFirst" component={ElectFirst} />
            <Route path="/ElectSecond" component={ElectSecond} />
            <Route path="/ElectThird" component={ElectThird} />
            <Route path="/ElectForth" component={ElectForth} />
            <Route path="/ElectFifth" component={ElectFifth} />
            <Route path="/ElectSixth" component={ElectSixth} />
            <Route path="/ElectSeventh" component={ElectSeventh} />
            <Route path="/ElectEighth" component={ElectEighth} />

            <Route path="/MathsFirst" component={MathsFirst} />
            <Route path="/MathsSecond" component={MathsSecond} />
            <Route path="/MathsThird" component={MathsThird} />
            <Route path="/MathsForth" component={MathsForth} />
            <Route path="/MathsFifth" component={MathsFifth} />
            <Route path="/MathsSixth" component={MathsSixth} />
            <Route path="/MathsSeventh" component={MathsSeventh} />
            <Route path="/MathsEighth" component={MathsEighth} />

            <Route path="/MediaFirst" component={MediaFirst} />
            <Route path="/MediaSecond" component={MediaSecond} />
            <Route path="/MediaThird" component={MediaThird} />
            <Route path="/MediaForth" component={MediaForth} />
            <Route path="/MediaFifth" component={MediaFifth} />
            <Route path="/MediaSixth" component={MediaSixth} />
            <Route path="/MediaSeventh" component={MediaSeventh} />
            <Route path="/MediaEighth" component={MediaEighth} />

            <Route path="/PharmFirst" component={PharmFirst} />
            <Route path="/PharmSecond" component={PharmSecond} />
            <Route path="/PharmThird" component={PharmThird} />
            <Route path="/PharmForth" component={PharmForth} />
            <Route path="/PharmFifth" component={PharmFifth} />
            <Route path="/PharmSixth" component={PharmSixth} />
            <Route path="/PharmSeventh" component={PharmSeventh} />
            <Route path="/PharmEighth" component={PharmEighth} />

            <Route path="/PhysFirst" component={PhysFirst} />
            <Route path="/PhysSecond" component={PhysSecond} />
            <Route path="/PhysThird" component={PhysThird} />
            <Route path="/PhysForth" component={PhysForth} />
            <Route path="/PhysFifth" component={PhysFifth} />
            <Route path="/PhysSixth" component={PhysSixth} />
            <Route path="/PhysSeventh" component={PhysSeventh} />
            <Route path="/PhysEighth" component={PhysEighth} />

            <Route path="/PsychFirst" component={PsychFirst} />
            <Route path="/PsychSecond" component={PsychSecond} />
            <Route path="/PsychThird" component={PsychThird} />
            <Route path="/PsychForth" component={PsychForth} />
            <Route path="/PsychFifth" component={PsychFifth} />
            <Route path="/PsychSixth" component={PsychSixth} />
            <Route path="/PsychSeventh" component={PsychSeventh} />
            <Route path="/PsychEighth" component={PsychEighth} />

            <Footer />
          </Router>
        </Paper>
      </ThemeProvider>
    </div>
  );
}

export default App;
