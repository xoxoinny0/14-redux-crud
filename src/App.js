import React, { memo } from "react";
import { Routes, Route } from 'react-router-dom';

import DepartmentList from "./pages/DepartmentList";
import DepartmentAdd from "./pages/DepartmentAdd";
import DepartmentEdit from "./pages/DepartmentEdit";

const App = memo(() => {
  return(
    <div>
      <h1>Redux-CRUD</h1>
      
      <hr />
      
      <Routes>
        <Route path='/' exapt={true} element={<DepartmentList />} />
        <Route path='/department-add' element={<DepartmentAdd />} />
        <Route path='/department-edit/:deptno' element={<DepartmentEdit />} />
      </Routes>
    </div>
  );
});

export default App;
