import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { QuestionService } from '../../services/questions/question.service';

import {GenericQuestion, toAnswer} from '../../models/generic_question.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private db: AngularFirestore, private qs: QuestionService) {}

  test() {
    for (const dream of this.qs.dreams) {
      const obj = toAnswer(dream);
      this.db.collection('users').doc('QGhR84dfAC7hZ35gX2jj').collection('answers').doc(dream.id).set({
        obj
      }).then(); // Check and handle errors
    }
  }
}
