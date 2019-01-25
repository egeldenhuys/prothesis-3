import { Injectable } from '@angular/core';

import { Priorities } from '../../models/priorities.model';
import { GenericQuestion, to_generic_question } from '../../models/generic_question.model';
import { PeopleOrientation } from '../../models/people_orientation.model';
import { Roles } from '../../models/roles.model';

import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  constructor(private db: AngularFirestore) { }
  private data: any = null;

  private dreams: GenericQuestion[] = [];
  private passions: GenericQuestion[] = [];
  private priorities: Priorities[] = [];
  private roles: Roles[] = [];
  private people_orientations: PeopleOrientation[] = [];
  private people_id: GenericQuestion[] = [];


  public async getQuestions() {
    if (this.data === null) {
      const tmp = await this.db.collection('static').doc('questions').get().toPromise();
      this.data = tmp.get('data'); // We now have a json blob with all of the data.
      for (const x of this.data) {
        switch (x['tag']) {
          case 'dreams': {
            this.dreams.push(to_generic_question(x));
            break;
          }
          case 'passions': {
            this.passions.push(to_generic_question(x));
            break;
          }
          case 'priorities': {
            this.priorities.push(x);
            break;
          }
          case 'roles': {
            this.roles.push(x);
            break;
          }
          case 'people_orientation': {
            this.people_orientations.push(x);
            break;
          }
          case 'people_id': {
            this.people_id.push(to_generic_question(x));
            break;
          }
          default:
            break;
        }
      }

      console.log(this.dreams);
    }
  }
}
