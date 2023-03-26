import "./App.css";

import Addcustomer from './component/customer/Addcustomer';
import GetCustomerDetailsOnRequest from './component/customer/GetCustomerDetailsOnRequest';
import LoginForm from './component/customer/LoginForm';
import customerHome from './component/customer/customerHome';
import ChangeCustomerName from './component/customer/ChangeCustomerName';
import GetCustomerById from './component/customer/GetCustomerById';
import GetAllCustomers from './component/customer/GetAllCustomers';

import AddPlant from "./component/plant/AddPlant";
import GetAllPlants from "./component/plant/GetAllPlants";
import GetPlantByName from "./component/plant/GetPlantByName";
import GetPlantByNameRequest from "./component/plant/GetPlantByNameRequest";
import GetPlantToUpdate from "./component/plant/GetPlantToUpdate";
import plantHome from "./component/plant/plantHome";
import GetAllPlantsByType from "./component/plant/GetAllPlantsByType";

import AddPlanter from "./component/Planter/AddPlanter";
import GetAllPlanters from "./component/Planter/GetAllPlanters";
import GetPlanterByShape from "./component/Planter/GetPlanterByShape";
import GetPlanterById from "./component/Planter/GetPlanterById";
import PlanterHome from "./component/Planter/PlanterHome";
import GetPlanterByIdRequest from "./component/Planter/GetPlanterByIdRequest";
import GetPlanterByCost from "./component/Planter/GetPlanterByCost";
import UpdatePlanterStock from "./component/Planter/UpdatePlanterStock";

import SeedHome from "./component/seed/SeedHome";
import AddSeed from "./component/seed/AddSeed";
import GetAllSeeds from "./component/seed/GetAllSeeds";
import GetAllSeedsByType from "./component/seed/GetAllSeedsByType";
import GetSeedById from "./component/seed/GetSeedById";
import GetSeedByName from "./component/seed/GetSeedByName";
import GetSeedToUpdate from './component/seed/GetSeedToUpdate';

import GetOrderById from './component/Order/GetOrderById';
import AddOrder from './component/Order/AddOrder';
import GetAllOrders from './component/Order/GetAllOrders';
import orderHome from './component/Order/orderHome';
import GetOrderByIdOnRequest from './component/Order/GetOrderByIdOnRequest';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from './redux/store';
import { Provider } from 'react-redux';
import Navbar from './component/Navbar';
import Home from './component/Home';

function App() {

  return (
    <div>
      <Provider store={store}>
        <Router>
          <Navbar />         
          <div className="container mt-5">
            <Switch>
              <Route exact path="/" component={Home} />

              <Route exact path="/planthome" component={plantHome} />
              <Route exact path="/allplants" component={GetAllPlants} />
              <Route exact path="/addplant" component={AddPlant} />
              <Route exact path="/plantbyname/:name" component={GetPlantByName} />
              <Route exact path="/plantbynameonrequest" component={GetPlantByNameRequest} />
              <Route exact path="/plantsbytype" component={GetAllPlantsByType} />
              <Route exact path="/planttoupdate" component={GetPlantToUpdate} />

              <Route exact path="/planterhome" component={PlanterHome} />
              <Route exact path="/allplanters" component={GetAllPlanters} />
              <Route exact path="/addplanter" component={AddPlanter} />
              <Route exact path="/planterbyid/:planterId" component={GetPlanterById} />
              <Route exact path="/planterbyidonrequest" component={GetPlanterByIdRequest} />
              <Route exact path="/planterbyshape" component={GetPlanterByShape} />
              <Route exact path="/planterbycost" component={GetPlanterByCost} />
              <Route exact path="/planterstockupdate" component={UpdatePlanterStock} />

              <Route exact path="/seedHome" component={SeedHome} />
              <Route exact path="/addseed" component={AddSeed} />
              <Route exact path="/seedbyid/:seedId" component={GetSeedById} />
              <Route exact path="/seedbyname" component={GetSeedByName} />
              <Route exact path="/allseeds" component={GetAllSeeds} />
              <Route exact path="/seedsbytype" component={GetAllSeedsByType} />
              <Route exact path="/seedtoupdate" component={GetSeedToUpdate} />

              <Route exact path="/customerhome" component = {customerHome} />
              <Route exact path="/addcustomer" component = {Addcustomer} />
              <Route exact path="/login" component = {LoginForm} />
              <Route exact path="/getcustomerdetailsonrequest" component = {GetCustomerDetailsOnRequest} />
              <Route exact path="/changecustomername" component = {ChangeCustomerName} />
              <Route exact path="/getcustomerbyid/:id" component = {GetCustomerById} />
              <Route exact path="/changecustomername/:id" component = {ChangeCustomerName} />
              <Route exact path="/getallcustomers" component={GetAllCustomers}/>

              <Route exact path="/orderhome" component={orderHome} />
              <Route exact path="/allorders" component={GetAllOrders} />
              <Route exact path="/addorder" component={AddOrder} />
              <Route exact path="/getorderbyid/:bookingorderid" component={GetOrderById} />
              <Route exact path="/getorderbyidonrequest" component={GetOrderByIdOnRequest} />
            </Switch>
          </div>
        </Router>
      </Provider>
    </div>
  );
}
export default App;

