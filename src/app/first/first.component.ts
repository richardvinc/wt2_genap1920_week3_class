import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";
import { Employee } from "../employee";

@Component({
  selector: "app-first",
  templateUrl: "./first.component.html",
  styleUrls: ["./first.component.scss"]
})
export class FirstComponent implements OnInit {
  message: string;
  employees: Array<Employee>;

  constructor(private ds: DataService) {}

  ngOnInit(): void {
    this.ds.$message.subscribe(msg => (this.message = msg));

    this.ds.getEmployees().subscribe(employees => (this.employees = employees));
  }

  selectEmployee(emp: Employee) {
    this.ds.selectEmployee(emp);
  }

  //please code above this line
}

/*

  //0
  function test(a) {
    console.log(a);
  }
  test();

  //1
  function(a){
    console.log(a);
  }

  //2
  a => (console.log(a))

  //3
  a => console.log(a)

  //bentuk 0-3 adalah bentuk yang sama

*/
