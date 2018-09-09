import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  uri = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  getStudents() {
    return this.http.get(`${this.uri}/students`);
  }

  getStudentById(id) {
    return this.http.get(`${this.uri}/students/${id}`);
  }

  addStudent(addingValues) {
    return this.http.post(`${this.uri}/students/add`, addingValues);
  }

  updateStudent(id, updatingValues) {
    return this.http.post(`${this.uri}/students/update/${id}`, updatingValues);
  }

  deleteStudent(id) {
    return this.http.get(`${this.uri}/students/delete/${id}`);
  }
}
