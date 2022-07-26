import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'myfirstangularapp';
  name =  'ABHIJNA';
  image = "/assets/image3.jpg";
  randomNumber = '';


  onClick(){
    alert('I am an event binding example!!');
  }
  onClick1(){
    console.log('I am an  binding example!!');
  }
  // *ngfor directive
  courses:Courses[]=
  [
    {
      courseid:"1",
      coursename:'Angular Js'
    },
    {
        courseid:"2",
        coursename:'React Js'
    },
    {
      courseid:"3",
      coursename:'Vue Js'
    },
  ] 
// ng style
  mycolor:string='red'

  
  
  getColor(country: any) {
    (2)
    switch (country) {
      case 'UK':
        return 'green';
      case 'USA':
        return 'blue';
      case 'HK':
        return 'red';
      default:
        return 'pink';
    }
  }

  people: any[] = [
    {
      "name": "John",
      "country": 'UK'
    },
    {
      "name": "Peter",
      "country": 'USA'
    },
    {
      "name": "Shaun",
      "country": 'HK'
    },
    {
      "name": "Paul",
      "country": 'UK'
    },
    {
      "name": "Sam",
      "country": 'USA'
    }
  ];

}
class Courses{
  courseid:string | undefined;
  coursename:string | undefined;
}

