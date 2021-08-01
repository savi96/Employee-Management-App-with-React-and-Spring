import React, { Component } from 'react';
import EmployeeService from 'C:/Users/papsa/OneDrive/Desktop/NewReactFrontendApp/react-frontend/src/services/EmployeeService.js';

class ListEmployeeComponent extends Component {
    constructor(props){
        super(props)
        this.state  = {
            employees:[]
        }
        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);

    }
    editEmployee(id){
        this.props.history.push('/update-employee/${id}');
    }

    componentDidMount(){
        //calls the REST API
        EmployeeService.getEmployees().then((res) =>{
            this.setState({employees: res.data})
        });
}

addEmployee(){
    this.props.history.push('/add-employee');
}

    render() {
        return (
            <div>
                <h2 className="text-center">Employee List</h2> 
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addEmployee}>Add employee</button>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Employee Firtst Name</th>
                                <th>Employee Last Name</th>
                                <th>Employee Email ID</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.employees.map(
                                    employees =>
                                    <tr key={employees.id}>
                                        <td>{employees.firstName}</td>
                                        <td>{employees.lastName}</td>
                                        <td>{employees.emailID}</td>
                                        <td>
                                            <button onClick={() =>this.editEmployee(employees.id)} className ="btn btn-info">Update</button>
                                            <button onClick={() =>this.deleteEmployee(employees.id)} className ="btn btn-danger" style={{marginLeft: "10px"}}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListEmployeeComponent;