import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'first Angular app';
  card = ''
  clicked(){
    this.card=this.title
    console.log('click');
  }
}
