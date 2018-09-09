import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Issue } from '../../issue.model';
import { StudentService } from '../../student.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  issues: Issue[];
  displayedColumns = ['name', 'regNo', 'dob', 'class', 'actions'];

  constructor(private studentService: StudentService, private router: Router) { }

  ngOnInit() {
    this.fetchIssues();
  }

  fetchIssues() {
    this.studentService
      .getStudents()
      .subscribe((data: Issue[]) => {
        this.issues = data;
        console.log('Data requested ...');
        console.log(this.issues);
      });
  }

  editIssue(id) {
    this.router.navigate([`/edit/${id}`]);
  }

  deleteIssue(id) {
    if (confirm('Are you sure to delete this record ?') === true) {
    this.studentService.deleteStudent(id).subscribe(() => {
      this.fetchIssues();
    });
  }
}

}
