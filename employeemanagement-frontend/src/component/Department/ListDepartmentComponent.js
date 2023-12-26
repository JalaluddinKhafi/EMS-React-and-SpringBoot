import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DepartmentService from '../../service/DepartmentService';

const ListDepartmentComponent = () => {
    const [departmentArray, setDepartmentArray] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getAllDepartment();
    }, []);

    function getAllDepartment() {
        DepartmentService.getAllDepartment()
            .then(res => { setDepartmentArray(res.data); console.log(res) })
            .catch(e => console.log(e));
    }

    function deleteDepartment(e, id) {
        e.preventDefault();
        DepartmentService.deleteDepartment(id)
            .then(() => getAllDepartment())
            .catch(e => console.log(e));
    }

    return (
        <div className='container'>
            <Link to={"/add-department"} className='btn btn-primary mb-2 mt-3'>
                Add Department
            </Link>

            {/* New "Go Back to Employees" button */}
            <button
                className="btn btn-secondary mb-2 mt-3 ml-2"
                onClick={() => navigate('/employee')}
            >
                Go Back to Employees
            </button>

            <h2 className='text-center mb-4'>List Department</h2>
            <table className='table table-bordered table-striped'>
                <thead>
                    <tr>
                        <th>Department ID</th>
                        <th>Department Name</th>
                        <th>Department Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {departmentArray.map(department => (
                        <tr key={department.id}>
                            <td>{department.id}</td>
                            <td>{department.name}</td>
                            <td>{department.description}</td>
                            <td>
                                <Link
                                    to={`/add-department/${department.id}`}
                                    className='btn btn-info'
                                >
                                    Update
                                </Link>{" "}
                                <a
                                    onClick={(e) => deleteDepartment(e, department.id)}
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

export default ListDepartmentComponent;
