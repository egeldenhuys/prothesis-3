import { Component } from '@angular/core';
import { QuestionService } from './services/questions/question.service';
import { UserService } from './services/user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prothesis3';
  constructor(qs: QuestionService, us: UserService) {

  }
}
