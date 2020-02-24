import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";
import { Employee } from "../employee";

@Component({
  selector: "app-second",
  templateUrl: "./second.component.html",
  styleUrls: ["./second.component.scss"]
})
export class SecondComponent implements OnInit {
  message: string;
  employee: Employee = null;

  constructor(private ds: DataService) {}

  ngOnInit(): void {
    this.ds.$selectedEmployee.subscribe(emp => (this.employee = emp));

    this.ds.$message.subscribe(msg => (this.message = msg));
    // line di atas sama dengan function berikut:
    // this.ds.$message.subscribe(function(msg){
    //   this.message = msg;
    // });
  }

  changeMessage(): void {
    this.ds.changeMessage("lorem ipsum");
  }

  //please code above this line
}
