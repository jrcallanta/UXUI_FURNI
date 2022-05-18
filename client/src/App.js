import classes from './App.module.scss';
import { Route, Routes, Outlet, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import CreditModal from './components/CreditModal';
import Home from './pages/Home';

function App() {
  return (
    <div className={classes.App}>
      <CreditModal useStorage={true}/>

      <NavBar fixed={true} />

      <Routes>
        <Route path={'/home'} element={<Outlet/>}>
          <Route path={''} element={<Home/>}/>
          <Route path={':section/*'} element={<Home/>}/>
        </Route>

        <Route path={'/about'} element={<Outlet/>}>
          <Route path={''} element={<Home/>}/>
          <Route path={':section/*'} element={<Home/>}/>
        </Route>

        <Route path={'/features'} element={<Outlet/>}>
          <Route path={''} element={<Home/>}/>
          <Route path={':section/*'} element={<Home/>}/>
        </Route>

        <Route path={'/contact'} element={<Outlet/>}>
          <Route path={''} element={<Home/>}/>
          <Route path={':section/*'} element={<Home/>}/>
        </Route>



        <Route path={''} element={
          <Navigate to={'/home'}/>
        }/>
        <Route path={'*'} element={
          <Navigate to={'/home'}/>
        }/>
      </Routes>
    </div>
  );
}

export default App;
