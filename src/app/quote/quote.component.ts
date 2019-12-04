import { Component } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  // styleUrls: ['./qoute.component.css'],
})
export class QuoteComponent {
  title = 'Quotes';

  quotes: Quote[] = [
    new Quote(1, 'Wisely, and slow. They stumble that run fast. ',
    'William Shakespeare', 'Kahama Wairimu',
    new Date(2019, 11, 1), 0, 0),
    new Quote(2, ' The future belongs to those who prepare for it today.', 'Malcolm X', 'John Doe',
    new Date(2019, 11, 1), 0, 0),
    new Quote(3, 'The weak can never forgive. Forgiveness is the attribute of the strong.', 'Mahatma Gandhi', 'Julia Roberts',
    new Date(2019 , 11 , 1), 0, 0),
  ];

  addNewQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.completeDate = new Date(quote.completeDate);
    this.quotes.push(quote);
    }


  quoteDelete(isRead, index) {
    if (isRead) {
      let toDelete: boolean = confirm(`Are you sure you want to delete this Quote?`)
      if (toDelete){
        this.quotes.splice(index, 1);
      }

    }
  }

  

  displayInfo(index){
    this.quotes[index].showInfo = !this.quotes[index].showInfo;
  }

}
