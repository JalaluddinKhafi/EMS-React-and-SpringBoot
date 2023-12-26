import React, { useState, useEffect } from 'react'
import DepartmentService from '../../service/DepartmentService'; // Adjust the path accordingly
import { Link, useNavigate, useParams } from 'react-router-dom';

const AddDepartmentComponent = () => {
    /** Variables and method to collect and store inputes */
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    const departmentData = { name, description }; //bundle the inpute from user

    /**send data to api and navigate when succesful */
    function saveDepartment(e) {
        e.preventDefault();

        if (departmentData.name !== "" && departmentData.description !== "") {
            /**If id is present in the parameter, it should update else it should save */
            if (id) {
                DepartmentService.updateDepartment(id, departmentData)
                    .then(navigate("/department"))
                    .catch(e => console.log(e));
            } else {
                DepartmentService.saveDepartment(departmentData)
                    .then(navigate("/department"))
                    .catch(e => console.log(e));
            }

        } else {
            alert("Please, fill in all inputes");
        }
    }

    function tile() {
        if (id) {
            return "Update Department";
        } else {
            return "Add Department";
        }
    }
    useEffect(() => {
        if (id) {
            DepartmentService.getDepartmentById(id)
                .then(res => {
                    setName(res.data.name);
                    setDescription(res.data.description);
                })
                .catch(e => console.log(e));
        }
    }, []);

    return (
        <div>
            <div className='container mt-5'>
                <div className='row'>
                    <div className='card col-md-6 offset-md-3'>
                        <h2 className='text-center'>{tile()}</h2>
                        <div className='card-body'>
                            <form>
                                <div className='form-group mb-2'>
                                    <input className='form-control'
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        type="text" placeholder='Enter the Name' />
                                </div>
                                <div className='form-group mb-2'>
                                    <input className='form-control'
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        type="text" placeholder='Enter the Description' />
                                </div>
                                <button onClick={(e) => saveDepartment(e)} className='btn btn-success'>Save</button> {" "}
                                <Link to={"/department"} className='btn btn-danger' href="">Cancel</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddDepartmentComponent