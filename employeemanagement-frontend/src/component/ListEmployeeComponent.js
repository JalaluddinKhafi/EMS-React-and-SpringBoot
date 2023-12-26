import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import EmployeeService from '../service/EmployeeService';

const ListEmployeeComponent = () => {
    const [employeeArray, setEmployeeArray] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getAllEmployee();
    }, []);

    function getAllEmployee() {
        EmployeeService.getAllEmployee()
            .then(res => { setEmployeeArray(res.data); console.log(res) })
            .catch(e => console.log(e));
    }

    function deleteEmployee(e, id) {
        e.preventDefault()
        EmployeeService.deleteEmployee(id)
            .then(() => getAllEmployee())
            .catch(e => console.log(e));
    }

    return (
        <div className='container'>
            <Link to={"/add-employee"} className='btn btn-primary mb-2 mt-3'>
                Add Employee
            </Link>

            {/* New "Show Departments" button */}
            <button
                className="btn btn-secondary mb-2 mt-3 ml-2"
                onClick={() => navigate('/department')}
            >
                Show Departments
            </button>

            <h2 className='text-center mb-4'>List Employee</h2>
            <table className='table table-bordered table striped'>
                <thead>
                    <tr>
                        <th>Employee ID</th>
                        <th>Employee First Name</th>
                        <th>Employee Last Name</th>
                        <th>Employee Email</th>
                        <th>Employee Department</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {employeeArray.map(employee => (
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email}</td>
                            <td>{employee.department}</td>
                            <td>
                                <Link
                                    to={`/add-employee/${employee.id}`}
                                    className='btn btn-info'
                                >
                                    Update
                                </Link>{" "}
                                <a
                                    onClick={(e) => deleteEmployee(e, employee.id)}
                                    className='btn btn-danger'
                                >
                                    Delete
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListEmployeeComponent;
