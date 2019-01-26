import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { QuestionService } from '../../services/questions/question.service';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private db: AngularFirestore, private qs: QuestionService) {}

  test() {
    this.db.collection('users').doc('QGhR84dfAC7hZ35gX2jj').collection('answers').get().subscribe(x => {
      x.forEach(snap => {

      });

    });
  }
}
