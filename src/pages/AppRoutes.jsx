import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import HomePage from './HomePage/index';
import LoginPage from './LoginPage/index';

const AppRoutes = () =>{
    return(
        <Router>
            <Routes>
                <Route exact path="/login" element={<LoginPage/>}/>
                <Route exact path="/" element={<HomePage/>}/>
            </Routes>
        </Router>
    )
}

export default AppRoutes;