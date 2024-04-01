import React from "react";
import GlobalStyle from "./globalStyles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Pages
import Home from "./pages/Home";
import SignUp from "./pages/SignupPage";
import ProtectedRoute from "./pages/ProtectedRoute";
import ComparisionPage from "./pages/ComparisonPage";
import Layout from "./components/AdminDashBoard/shared/Layout";
import Dashboard from "./pages/AdminDashboard/Dashboard";
import SharedLayout from "./pages/UserDashBoard/SharedLayout";
import ServiceRequirements from "./pages/UserDashBoard/ServiceRequirements";
import UserFormPage from "./pages/UserFormPage";
import ResourceControlPage from "./pages/UserDashBoard/ResourceControlPage";
import OverviewPage from "./pages/ProviderDashboard/OverviewPage";
import ProtectedAdminRoute from "./pages/ProtectedAdminRoute";
import IndexPage from "./pages/indexPage";
import Single from './components/UserDashBoard/ResourcePage/Single'

import Sla from './components/SLA/Slatemplate';
import Slaprovider from './pages/ProviderDashboard/Sla'

function App() {
  //const { user, provider } = useAppContext();
  return (
    <Router>
      <GlobalStyle />

      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route index  element = {<IndexPage/>}/>
          <Route path="/compare" element={<ComparisionPage />} />
          <Route path="/filter" element={<ServiceRequirements />} />
          <Route path="/cspDash" element={<OverviewPage />} />
          <Route path="/sla" element={<Slaprovider />} />
          <Route path="/slauser" element={<Sla />} />
          <Route path="/resource-control" element={<ResourceControlPage />} />
          <Route path="/resource/:id" element={<Single />} />
        </Route>

        <Route path="/signup" element={<SignUp userType="client" />} />
        <Route
          path="/signinProvider"
          element={<SignUp userType="provider" />}
        />
        <Route path="/signinAdmin" element={<SignUp userType="admin" />} />
        <Route path="/registerProvider" element={<UserFormPage />} />
        <Route path="/landing" element={<Home />} />
        <Route
          path="/admin"
          element={
            <ProtectedAdminRoute>
              <Layout />
            </ProtectedAdminRoute>
          }
        >
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
