import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import EmployeeService from '../service/EmployeeService';

const AddEmployeeComponent = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [departmentId, setDepartmentId] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();

    // Define employeeData here
    const employeeData = { firstName, lastName, email, departmentId };

    // Static list of departments
    const staticDepartments = [
        { id: '1', name: 'Department 1' },
        { id: '2', name: 'Department 2' },
        { id: '3', name: 'Department 3' },
        // Add more departments as needed
    ];

    function saveEmployee(e) {
        e.preventDefault();

        if (employeeData.firstName && employeeData.lastName && employeeData.email && employeeData.departmentId) {
            setLoading(true);

            const apiRequest = id
                ? EmployeeService.updateEmployee(id, employeeData)
                : EmployeeService.saveEmployee(employeeData);

            apiRequest
                .then(() => {
                    navigate("/employee");
                })
                .catch((error) => {
                    console.error('API Request Failed:', error);
                    alert('Failed to save/update employee. Please try again.');
                })
                .finally(() => {
                    setLoading(false);
                });
        } else {
            alert("Please fill in all fields.");
        }
    }

    function getTitle() {
        return id ? "Update Employee" : "Add Employee";
    }

    useEffect(() => {
        if (id) {
            setLoading(true);

            EmployeeService.getEmployeeById(id)
                .then(res => {
                    setFirstName(res.data.firstName);
                    setLastName(res.data.lastName);
                    setEmail(res.data.email);
                    setDepartmentId(res.data.department.id);
                })
                .catch(e => console.log(e))
                .finally(() => {
                    setLoading(false);
                });
        }
    }, [id]);

    return (
        <div>
            <div className='container mt-5'>
                <div className='row'>
                    <div className='card col-md-6 offset-md-3'>
                        <h2 className='text-center'>{getTitle()}</h2>
                        <div className='card-body'>
                            <form>
                                
                                <div className='form-group mb-2'>
                                    <input
                                        className='form-control'
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        type="text"
                                        placeholder='Enter First Name'
                                    />
                                </div>
                                <div className='form-group mb-2'>
                                    <input
                                        className='form-control'
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                        type="text"
                                        placeholder='Enter Last Name'
                                    />
                                </div>
                                <div className='form-group mb-2'>
                                    <input
                                        className='form-control'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        type="email"
                                        placeholder='Enter Email'
                                    />
                                </div>
                                <div className='form-group mb-2'>
                                    <label htmlFor="departmentSelect">Select Department:</label>
                                    <select
                                        id="departmentSelect"
                                        className='form-control'
                                        value={departmentId}
                                        onChange={(e) => setDepartmentId(e.target.value)}
                                    >
                                        <option value="">Select a Department</option>
                                        {staticDepartments.map(department => (
                                            <option key={department.id} value={department.id}>
                                                {department.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <button
                                    onClick={(e) => saveEmployee(e)}
                                    className='btn btn-success'
                                    disabled={loading}
                                >
                                    {loading ? 'Saving...' : 'Save'}
                                </button>{" "}
                                <Link to="/employee" className='btn btn-danger' href="">
                                    Cancel
                                </Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddEmployeeComponent;
