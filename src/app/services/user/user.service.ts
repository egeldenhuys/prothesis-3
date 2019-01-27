import { Injectable } from '@angular/core';

import { AngularFirestore, QuerySnapshot } from '@angular/fire/firestore';
import { QuestionService } from '../../services/questions/question.service';

import {GenericQuestion, toAnswer} from '../../models/generic_question.model';
import {AuthService} from '../../services/auth.service';
import { catchError, map } from 'rxjs/operators';
import { Observable, from } from 'rxjs';
import { ObserveOnSubscriber } from 'rxjs/internal/operators/observeOn';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private auth: AuthService, private db: AngularFirestore, private qs: QuestionService) {}

  public updateQuestion(question_id: string, data: any): Observable<{}> {
    return this.auth.getUser()
      .pipe(
        map((user) => {
          const obvs = from(this.db.collection('users').doc(user.uid).collection('answers').doc(question_id).set(data));
          return obvs;
        }),
        catchError((err) => {
          return Observable.create(err);
        })
      );
  }

  public getDreams(): any {
    this.auth.getUser().subscribe(user => {
      this.db.collection('users').doc(user.uid).collection('answers').ref.where('tag', '==', 'dreams').get().then(snap => {
        for (let i = 0; i < snap.size; i++) {
          this.qs.dreams[i].answer = snap.docs[i].get('answer');
        }
      });
    });
  }
}
