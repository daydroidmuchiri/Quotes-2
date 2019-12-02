import { Component } from '@angular/core';
import { Quote} from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes:Quote =[
    {id:1,name:'The grass is greener where you water it',author:'me'},
    {id:2,name:'Im selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you cant handle me at my worst, then you sure as hell dont deserve me at my best.',author:'Marilyn Monroe'}
  ];
}
