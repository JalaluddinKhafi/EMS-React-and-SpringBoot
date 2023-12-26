import AddEmployeeComponent from "./component/AddEmployeeComponent";
import AddDepartmentComponent from "./component/Department/AddDepartmentComponent";
import HeaderComponent from "./component/HeaderComponent";
import ListEmployeeComponent from "./component/ListEmployeeComponent";
import ListDepartmentComponent from "./component/Department/ListDepartmentComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <HeaderComponent />
      <div className="container">
        <Routes>
          <Route path="/" element={<ListEmployeeComponent />} />
          <Route path="/employee" element={<ListEmployeeComponent />} />
          <Route path="/add-employee" element={<AddEmployeeComponent />} />
          <Route path="/add-employee/:id" element={<AddEmployeeComponent />} />

          {/* New Route for Department Table */}
          <Route path="/department" element={<ListDepartmentComponent />} />

          <Route path="/add-department" element={<AddDepartmentComponent />} />
          <Route path="/add-department/:id" element={<AddDepartmentComponent />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
