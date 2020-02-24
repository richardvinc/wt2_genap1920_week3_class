import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of } from "rxjs";
import { Employee } from "./employee";

@Injectable({
  providedIn: "root"
})
export class DataService {
  private message = new BehaviorSubject<string>("default message");
  $message = this.message.asObservable();

  private employees: Array<Employee> = [
    {
      name: "Popo Fernandes",
      age: 24
    },
    {
      name: "John Smith",
      age: 32
    },
    {
      name: "David",
      age: 29
    }
  ];

  private selectedEmployee = new BehaviorSubject<Employee>(null);
  $selectedEmployee = this.selectedEmployee.asObservable();

  constructor() {}

  changeMessage(msg: string): void {
    this.message.next(msg);
  }

  getEmployees(): Observable<Employee[]> {
    return of(this.employees);
  }

  selectEmployee(emp: Employee): void {
    this.selectedEmployee.next(emp);
  }

  //please code above this line
}
