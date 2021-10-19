import React from 'react';
import Appointments from '../Appointments/Appointments';

import Clinic from '../Clinic/Clinic';
import Emergency from '../Emergency/Emergency';
import GeneralServices from '../GeneralServices/GeneralServices';
import Patient from '../Patient/Patient';
// import Login from '../LoginFrom/Login';
//import Register from '../LoginFrom/Register';

 import Banner from './Banner';

const Home = () => {
    
    return (
        <div>
            
          <Banner></Banner>
          <Emergency></Emergency>
          <Clinic></Clinic>
          <GeneralServices></GeneralServices>
          <Patient></Patient>
          <Appointments></Appointments>
          
         
        </div>
    );
};

export default Home;