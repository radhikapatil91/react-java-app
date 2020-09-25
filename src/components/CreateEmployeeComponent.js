import React, { Component } from 'react'    
import EmployeeService from '../service/EmployeeService'
//import axios from 'axios'
//const EMPLOYEE_API_URL = "http://localhost:8080/api/v1/employees"
export class CreateEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id:this.props.match.params.id,
            firstName: '',
            lastName: '',
            emailId: ''
        }
        this.changeFirstName = this.changeFirstName.bind(this)
        this.changeLastName = this.changeLastName.bind(this)
        this.changeEmailId = this.changeEmailId.bind(this)
        this.saveEmployee = this.saveEmployee.bind(this)
    }
    changeFirstName = e => {
        this.setState({
            firstName: e.target.value
        })
    }
    changeLastName = e => {
        this.setState({
            lastName: e.target.value
        })
    }
    changeEmailId = e => {
        this.setState({
            emailId: e.target.value
        })
    }
    saveEmployee = e =>{
        e.preventDefault();
        let employee = {firstName : this.state.firstName, lastName : this.state.lastName, emailId:this.state.emailId}
        console.log('employee Object', JSON.stringify(employee))
        if(this.state.id < 0){
            EmployeeService.createEmployee(employee).then(res=>{
            this.props.history.push('/employees')
            console.log('add')
            })
        }else {
            EmployeeService.updateEmployeeById(employee,this.state.id).then(res=>{
            this.props.history.push('/employees')
            console.log('update')
        })

    }
    }
    componentDidMount(){
        if(this.state.id < 0){
            return;
        } else {
            EmployeeService.getEmployeeById(this.state.id).then(res=>{
            let emp = res.data;
            this.setState({
                firstName : emp.firstName,
                lastName : emp.lastName,
                emailId : emp.emailId
            })
        })
    }
    }
   
    cancel(){
        this.props.history.push('/employees')
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h2 className="text-center">Employee Form</h2>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label>First Name</label>
                                    <input type="text" value={this.state.firstName} className="form-control" placeholder="First name" onChange={this.changeFirstName} />

                                </div>
                                <div className="form-group">
                                    <label>Last Name</label>
                                    <input type="text" value={this.state.lastName} className="form-control" placeholder="Last name" onChange={this.changeLastName} />

                                </div>
                                <div className="form-group">
                                    <label>Email Id</label>
                                    <input type="email" value={this.state.emailId} className="form-control" placeholder="Email Id" onChange={this.changeEmailId} />
                                </div>
                                <button className="btn btn-success" onClick={this.saveEmployee}>Submit</button>
                                <button className="btn btn-danger" style={{marginLeft:"10px"}} onClick={this.cancel.bind(this)} >Cancel</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateEmployeeComponent
