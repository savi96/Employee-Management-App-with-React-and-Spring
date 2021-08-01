import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class CreateEmployeeComponent extends Component {
    constructor(props){
        super(props)
            this.state={
                firstName: '',
                lastName: '',
                emailID: ''
            }
    //binding to constructor
    this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
    this.changeLasttNameHandler = this.changeLastNameHandler.bind(this);
    this.changeEmailIdHandler = this.changeEmailIdHandler.bind(this);
    this.saveEmployee = this.saveEmployee.bind(this);
    }

    saveEmployee(e){
        e.preventDefault();
        let employee = {firstName: this.state.firstName, lastName: this.state.lastName, emailID: this.state.emailID};
        console.log('employee => '+JSON.stringify(employee));

        //employee services walin thamai pi db ekata data parse karanna haduwe.ita passe thamai methana e method eka gahanne button ekata
        EmployeeService.createEmployee(employee).then(res =>{
            this.props.history.push('/employees');
        });
    }

    cancle(){
        this.props.history.push('/employees');
        //this.props.history.push('/add -employee');
    }

    changeFirstNameHandler = (event) => {
        this.setState({firstName: event.target.value});
    } 

    changeLastNameHandler = (event) =>  {
        this.setState({lastName: event.target.value});
    }

    changeEmailIdHandler = (event) => {
        this.setState({emailID: event.target.value});
    }
 
    render(){
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add Employee</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>First Name</label>
                                        <input placeholder="Enter your first name" name="firstName" className="form-control"
                                            value={this.state.firstName} onChange= {this.changeFirstNameHandler}/>
                                        <label>Last Name</label>
                                        <input placeholder="Enter your last name" name="lastName" className="form-control"
                                            value={this.state.lastName} onChange= {this.changeLastNameHandler}/>
                                        <label>Email Address</label>
                                        <input placeholder="Enter your email address" name="emailID" className="form-control"
                                            value={this.state.emailID} onChange= {this.changeEmailIdHandler}/> 
                                    </div>
                                    <button className="btn btn-success" onClick={this.saveEmployee}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancle.bind(this)} style={{marginLeft: "10px"}}>Cancle</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateEmployeeComponent;