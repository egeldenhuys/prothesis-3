import { Injectable } from '@angular/core';

import { Priorities, to_priority } from '../../models/priorities.model';
import { GenericQuestion, to_generic_question } from '../../models/generic_question.model';
import { PeopleOrientation, to_people_orientation } from '../../models/people_orientation.model';
import { Roles, to_role } from '../../models/roles.model';

import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  constructor(private db: AngularFirestore) { }
  private data: any = null;

  public dreams: GenericQuestion[] = [];
  public passions: GenericQuestion[] = [];
  public priorities: Priorities[] = [];
  public roles: Roles[] = [];
  public people_orientations: PeopleOrientation[] = [];
  public people_id: GenericQuestion[] = [];


  public async getQuestions() {
    if (this.data === null) {
      this.data = {};

      this.dreams = [];
      this.passions = [];
      this.priorities = [];
      this.roles = [];
      this.people_orientations = [];
      this.people_id = [];

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
            this.priorities.push(to_priority(x));
            break;
          }
          case 'roles': {
            this.roles.push(to_role(x));
            break;
          }
          case 'people_orientation': {
            this.people_orientations.push(to_people_orientation(x));
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
    }
  }
}
