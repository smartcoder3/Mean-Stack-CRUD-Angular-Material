import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { MatSnackBar } from '@angular/material';

import { StudentService } from '../../student.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id: String;
  issue: any = {};
  updateForm: FormGroup;

  // tslint:disable-next-line:max-line-length
  constructor(private studentService: StudentService, private router: Router, private route: ActivatedRoute, private snackBar: MatSnackBar, private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.updateForm = this.fb.group({
      name: ['', Validators.required],
      regNo: '',
      dob: '',
      class: ''
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.studentService.getStudentById(this.id).subscribe(res => {
        this.issue = res;
        this.updateForm.get('name').setValue(this.issue.name);
        this.updateForm.get('regNo').setValue(this.issue.regNo);
        this.updateForm.get('dob').setValue(this.issue.dob);
        this.updateForm.get('class').setValue(this.issue.class);
      });
    });
  }

  onUpdate() {
    this.studentService.updateStudent(this.id, this.updateForm.value).subscribe(() => {
      this.snackBar.open('Issue updated successfully', 'OK', {
        duration: 3000
      });
    });
  }
}
