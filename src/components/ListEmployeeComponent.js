import React, { Component } from 'react'
//import { EmployeeService } from '../service/EmployeeService'
//import axios from 'axios'
import  EmployeeService  from '../service/EmployeeService'
//const EMPLOYEE_API_URL = "http://localhost:8080/api/v1/employees"
export class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            employees : []
        }
        this.addEmployee = this.addEmployee.bind(this)
        this.editEmployee = this.editEmployee.bind(this)
        this.deleteEmployee = this.deleteEmployee.bind(this)
        this.viewEmployee = this.viewEmployee.bind(this)
    }
    componentDidMount(){
        //axios.get(EMPLOYEE_API_URL)
        EmployeeService.getEmployees()
        .then(res=>{
            this.setState({
                employees : res.data
            })
        })
    }
    addEmployee(){ 
           this.props.history.push('/add-employee/-1')
    }
    editEmployee(id){
        this.props.history.push(`/add-employee/${id}`)
        console.log("id"+id)
    }
    viewEmployee(id){
        this.props.history.push(`/view-employee/${id}`)
    }
    deleteEmployee(id){
        
        EmployeeService.deleteEmployeeById(id).then(res=>{
            this.setState({ employees:this.state.employees.filter(employee=>employee.id!==id)})
        })
    }
    render() {
        return (
            <div>
                <h2 className="text-centre">List Of Employees</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addEmployee}>Add Employee</button>
                </div>
                <div className="row">
                    <table className="table table-striped table-bodered">
                        <thead>
                            <tr>
                                <th>Employee First Name</th>
                                <th>Employee Second Name</th>
                                <th>Employee Email Id</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.employees.map(
                                    employee => (
                                        <tr key={employee.id}>
                                            <td>{employee.firstName}</td>
                                            <td>{employee.lastName}</td>
                                            <td>{employee.emailId}</td>
                                            
                                            <td><button className="btn btn-info" onClick={()=>this.editEmployee(employee.id)}>Update</button></td>
                                            <td><button className="btn btn-danger" onClick={()=>this.deleteEmployee(employee.id)}>Delete</button></td>
                                            <td><button className="btn btn-success" onClick={()=>this.viewEmployee(employee.id)}>View</button></td>
                                        </tr>
                                    )
                                    
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>

        )
    }
}

export default ListEmployeeComponent
