
import './App.css';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Header from './components/Header';
import Footer from './components/Footer';
import SideBar from './components/SideBar';
import Overview from './components/Overview';
import Cards from './components/Cards';
import Charts from './components/Charts';
import AgentsTables from './components/Agents';
import CustomerTable from './components/customersTable';
import ProductTable from './components/productTable';
import OrderTable from './components/OrderTable';
import UserTable from './components/UserTable';
import AddNewOrder from './components/crud-orders/AddNewOrder';
import SignOut from './components/SignOut';
import ProtectRoutes from './components/protectRoutes';
import AddOrder from './components/crud-orders/AddOrder';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (

    <BrowserRouter>

    {/* <Routes>
    <Route path='/signin' element={<SignIn />}></Route>
    <Route path='/signup' element={<SignUp/>}></Route>
    <Route element={<ProtectRoutes />} >
      <Route path='/'  element={[<SideBar />, <Header />,<Overview />,  <Cards /> ,<Charts />,<Footer />]}></Route>
      <Route path='/customers' element={[<SideBar />, <Header />,<CustomerTable />]}></Route>
      <Route path='/agents' element={[<SideBar />, <Header />,<AgentsTables />]}></Route>
      <Route path='/product' element={[<SideBar />, <Header />, <ProductTable />]}></Route>
      <Route path='/order' element={[<SideBar />, <Header />,<OrderTable />]}></Route>
      <Route path='/user' element={[<SideBar />, <Header />,<UserTable />]}></Route>
     
      <Route path='/SignOut' element={<SignOut/>}></Route>
      </Route>
    </Routes> */}
        {/* <AddOrder /> */}
         <AddNewOrder />
    </BrowserRouter>
  );
}

export default App;
