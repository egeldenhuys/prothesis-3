import { Component } from '@angular/core';
import { QuestionService } from './services/questions/question.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prothesis3';
  constructor(qs: QuestionService) {
    qs.getQuestions();
  }
}
