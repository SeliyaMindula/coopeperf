import './App.css';
import React, { Component }  from 'react';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Hierarchy from './pages/Hierarchy';
import Configurations from './pages/Configurations';
import HierStru from './pages/HierStru';
import CreateNotification from './pages/CreateNotification';
import EditEmployee from './pages/EditEmployee';
import EditValue from './pages/EditValue';
import AddValue from './pages/AddValue';
import AddGraph from './pages/AddGraph';
import Dashboard1 from './pages/Dashboard1';
import CompanyConfig from './pages/CompanyConfig';
import Strategyies from './pages/Strategyies';
import KPI from './pages/KPI';
import Perspectives from './pages/Perspectives';
import Goals from './pages/Goals';
import CreateDepartment from './pages/CreateDepartment'
import CreateSubDepartment from './pages/CreateSubDepartment'
import CreateSector from './pages/CreateSector'
import CreateCompany from './pages/CreateCompany'
import CreateGoal from './pages/CreateGoal'
import CreateStrategy from './pages/CreateStrategy'
import CreateKPI from './pages/CreateKPI'
import CreateActionPlan from './pages/CreateActionPlan'
import Login from './pages/Login'
import Register from './pages/Register'
import test from './pages/test'
import Reset from './pages/Reset';
import HierarchyTable from './pages/HierarchyTable'

function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
      <Route path='/Dashboard1' exact component={Dashboard1} />
      <Route path='/Goals' exact component={Goals} />
      <Route path='/KPI' exact component={KPI} />
      <Route path='/Strategyies' exact component={Strategyies} />
      <Route path='/Perspectives' exact component={Perspectives} />
      <Route path='/CompanyConfig' exact component={CompanyConfig} />
        <Route path='/AddGraph' exact component={AddGraph} />
        <Route path='/EditValue' exact component={EditValue} />
        <Route path='/AddValue' exact component={AddValue} />
        <Route path='/EditEmployee' exact component={EditEmployee} />
        <Route path='/CreateNotification' exact component={CreateNotification} />
        <Route path='/HierStru' exact component={HierStru} />
        <Route path='/HierarchyTable' exact component={HierarchyTable} />
        <Route path='/Hierarchy' exact component={Hierarchy} />
        <Route path='/Configurations' exact component={Configurations} />
        <Route path='/CreateDepartment' exact component={CreateDepartment} />
        <Route path='/CreateSubDepartment' exact component={CreateSubDepartment} />
        <Route path='/CreateSector' exact component={CreateSector} />
        <Route path='/CreateCompany' exact component={CreateCompany} />
        <Route path='/CreateGoal' exact component={CreateGoal} />
        <Route path='/CreateStrategy' exact component={CreateStrategy} />
        <Route path='/CreateKPI' exact component={CreateKPI} />
        <Route path='/CreateActionPlan' exact component={CreateActionPlan} />
        <Route path='/Login' exact component={Login} />
        <Route path='/Register' exact component={Register} />
        <Route path='/test' exact component={test} />
        <Route path='/Reset' exact component={Reset} />
      </Switch>
    </Router>
  );
}

export default App;
