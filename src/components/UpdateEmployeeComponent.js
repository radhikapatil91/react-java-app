import React, { Component } from 'react'
import  EmployeeService  from '../service/EmployeeService'
class UpdateEmployeeComponent extends Component {
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
        this.updateEmployee = this.updateEmployee.bind(this)
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
    updateEmployee = e =>{
        e.preventDefault();
        let employee = {firstName : this.state.firstName, lastName : this.state.lastName, emailId:this.state.emailId}
        console.log('employee Object', JSON.stringify(employee))
        EmployeeService.updateEmployeeById(employee,this.state.id).then(res=>{
            this.props.history.push('/employees')
        })
    }
    cancel(){
        this.props.history.push('/employees')
    }
    componentDidMount(){
        //axios.get(EMPLOYEE_API_URL+'/'+this.state.id).then(res=>{
            EmployeeService.getEmployeeById(this.state.id).then(res=>{
            let emp = res.data;
            this.setState({
                firstName : emp.firstName,
                lastName : emp.lastName,
                emailId : emp.emailId
            })
        })
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h2 className="text-center">Update Employee</h2>
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
                                <button className="btn btn-success" onClick={this.updateEmployee}>Submit</button>
                                <button className="btn btn-danger" style={{marginLeft:"10px"}} onClick={this.cancel.bind(this)} >Cancel</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default UpdateEmployeeComponent 