import axios from "axios";

const BASE_URL = "http://localhost:8080/department";
class DepartmentService{

    //**Method to get all department from our api or database */
    getAllDepartment(){
        return axios.get(BASE_URL);
    }
    /**MEthod to save department */
    saveDepartment(departmentData){
        return axios.post(BASE_URL, departmentData);
    }
    updateDepartment(id, departmentData){
        return axios.put(`${BASE_URL}/${id}`, departmentData)
    }
    getDepartmentById(id){
        return axios.get(`${BASE_URL}/${id}`);
    }
    deleteDepartment(id){
        return axios.delete(BASE_URL +"/" +id);
    }

}
export default new DepartmentService();