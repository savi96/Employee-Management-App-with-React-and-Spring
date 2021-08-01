package com.mytest.sprin.project;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("/api/v1/")
public class EmployeeController {

	@Autowired
	private EmployeeRepository employeeRepository; // emprep eken ne db ekath ekka connect wenne
													// ara mthod godak thiyenne inbuilt getAll() wage
	// Get All Employees

	@GetMapping("/employees")
	public List<Employee> getAllEmployees() {

		return employeeRepository.findAll();

	}

	//Add/create Employee REST api
	 
	 @PostMapping("/employees") public Employee createEmployee(@RequestBody Employee employee) { 
		 return employeeRepository.save(employee);
	 
	}

	 //get employee by id
	 @GetMapping("/employees/{id}")
	 public ResponseEntity<Employee> getEmployeeById(@PathVariable Long id) {
		 		 
		 //-> mekata kiyanne lambda expression symbol kiyala
		 Employee employee = employeeRepository.findById(id)
				 .orElseThrow(() -> new ResourceNotFoundException("Employee Not exist with id : " +id));
		 
		 
		 return ResponseEntity.ok(employee);
		 
		 //ResponseEntity is used to get the http response
	 }//in here @PathVariable is used to get the id from mapping to the method
	 
	 
	 //update employee rest api
	 @PutMapping("/employees/{id}")
	 public ResponseEntity<Employee> updateEmployee(@PathVariable Long id, @RequestBody Employee employeeDetails) {
		 //to retriew the employee before update
		 Employee employee = employeeRepository.findById(id)
				 .orElseThrow(() -> new ResourceNotFoundException("Employee Not exist with id : " +id));
		 
		 employee.setFirstName(employeeDetails.getFirstName());
		 employee.setLastName(employeeDetails.getLastName());
		 employee.setEmailID(employeeDetails.getEmailID());
		 
		 Employee updatedEmployee = employeeRepository.save(employee);
		 
		 return ResponseEntity.ok(updatedEmployee);
		 
	 }
	 //in here we directly mapped req jason onject to java employee object using requestboady
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 

	/// localhots:8081/api/v1//employees

}
