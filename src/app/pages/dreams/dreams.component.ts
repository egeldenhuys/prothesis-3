import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../services/questions/question.service';

@Component({
  selector: 'app-dreams',
  templateUrl: './dreams.component.html',
  styleUrls: ['./dreams.component.css']
})
export class DreamsComponent implements OnInit {

  constructor(private qs: QuestionService) { }
  ngOnInit() {
    this.qs.getQuestions();
  }
}
