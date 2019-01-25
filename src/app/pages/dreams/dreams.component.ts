import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../services/questions/question.service';
import { queueScheduler } from 'rxjs';

import { GenericQuestion } from '../../models/generic_question.model';

@Component({
  selector: 'app-dreams',
  templateUrl: './dreams.component.html',
  styleUrls: ['./dreams.component.css']
})
export class DreamsComponent implements OnInit {

  constructor(private qs: QuestionService) { }
  private dreams: GenericQuestion[];
  ngOnInit() {
    this.qs.getQuestions();
    this.dreams = this.qs.dreams;
  }

}
