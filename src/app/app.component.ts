import { Component } from '@angular/core';
import { EnrollmentService } from './enrollment.service';
import { User } from './User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  topics = ['Angular', 'React', 'Vue'];
  userModel = new User('', 'rob@test.com', 5556665566, 'default', 'morning', true);
  topicHasError = true;
  isSubmitted = false;
  errorMsg = '';
  constructor(private _enrollmentService: EnrollmentService) {

  }

  validateTopic(value) {
    if (value === 'default') {
      this.topicHasError = true;
    } else {
      this.topicHasError = false;
    }
  }

  onSubmit() {
    this.isSubmitted = true;
    this._enrollmentService.enroll(this.userModel)
    .subscribe(
      data => console.log('Success!', data),
      error => this.errorMsg = error.statusText 
    )
  }
}


