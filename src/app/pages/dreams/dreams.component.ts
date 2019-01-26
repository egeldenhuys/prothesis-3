import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../services/questions/question.service';
import { UserService } from '../../services/user/user.service';
import { toAnswer } from '../../models/generic_question.model';

@Component({
  selector: 'app-dreams',
  templateUrl: './dreams.component.html',
  styleUrls: ['./dreams.component.css']
})
export class DreamsComponent implements OnInit {

  constructor(private qs: QuestionService, private us: UserService) { }
  ngOnInit() {
    this.qs.getQuestions();
  }

  test() {
    this.us.test();
  }
}
