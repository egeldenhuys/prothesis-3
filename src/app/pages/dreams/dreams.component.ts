import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../services/questions/question.service';
import { UserService } from '../../services/user/user.service';
import { NavigationStart, Router } from '@angular/router';
import { toAnswer, GenericQuestion } from 'src/app/models/generic_question.model';

@Component({
  selector: 'app-dreams',
  templateUrl: './dreams.component.html',
  styleUrls: ['./dreams.component.css']
})
export class DreamsComponent implements OnInit {
  private router_subscription: any;
  constructor(private qs: QuestionService, private us: UserService, private router: Router) {}
  ngOnInit() {
    this.qs.getQuestions().then(() => {
      // Check for previous answer
      this.us.getDreams();
    });
  }

  update(dream: GenericQuestion) {
    this.us.updateQuestion(dream.id, toAnswer(dream)).subscribe(null, (err) => alert(err));
  }

  save() {
    for (const dream of this.qs.dreams) {
      this.update(dream);
    }
  }
}
