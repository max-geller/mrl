import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentChangeAction } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export class Meeting {
  id?: string;
  name: string;
  priority: string;
  creator: string = "male"
  date: Date = new Date();
}

@Injectable({
  providedIn: 'root'
})
export class MeetingService {

  constructor(private afs: AngularFirestore, ) {
  }

  create(meeting: Partial<Meeting>) {
    meeting.date = new Date(meeting.date);
    return this.afs.collection('/meetings').add(meeting);
  }

  getAll(): Observable<Meeting[]> {
    return this.afs.collection<Meeting>('meetings')
      .snapshotChanges()
      .pipe(
        map((subjectSet) => {
          return (subjectSet as DocumentChangeAction<Meeting>[])
            .map(s => {
              let data = s.payload.doc.data() as Meeting;
              data.id = s.payload.doc.id;
              return data;
            });
        })
      );
  }

  get(meetingId: string): Observable<Meeting> {
    return this.afs.collection('meetings')
      .doc(meetingId)
      .valueChanges()
      .pipe(
        map((meeting) => {
          let date = (<firebase.firestore.Timestamp>meeting['date']).toDate();
          let returnSubject = meeting as Meeting;
          if (returnSubject) {
            returnSubject.id = meetingId;
            returnSubject.date = date;

            return returnSubject;
          }
          else
            return null;
        })
      );
  }

  update(meetingId: string, meeting: Partial<Meeting>) {
    delete meeting.id;
    meeting.date = new Date(meeting.date);
    return this.afs.collection('meetings').doc(meetingId).update(meeting);
  }


}