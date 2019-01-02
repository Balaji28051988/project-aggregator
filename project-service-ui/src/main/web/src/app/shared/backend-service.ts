import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RouterModule, Router } from '@angular/router';
import { Config } from '../env/index';

@Injectable()
export class BackendService {

  constructor(private httpClient: HttpClient, private router: Router) { }

  getTasks(projectId) {
    return this.httpClient.get(Config.API + '/project-manager/gettasks/' + projectId);
  }

  getParentTasks(projectId) {
    return this.httpClient.get(Config.API + '/project-manager/getparenttasks/' + projectId);
  }

  getUsers(inputParam) {
    return this.httpClient.get(Config.API + '/project-manager/getusersdetails', inputParam);
  }

  updateUser(inputParam) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.httpClient.post(Config.API + '/project-manager/updateusers',
      inputParam,
      { headers: headers });
  }

  deleteUser(userId) {
    return this.httpClient.delete(Config.API + '/project-manager/deleteusers/' + userId);
  }

  getProjects(inputParam) {
    return this.httpClient.get(Config.API + '/project-manager/getprojectsdetail', inputParam);

  }

  deleteProject(projectId) {
    return this.httpClient.delete(Config.API + '/project-manager/deleteprojects/' + projectId);
  }

  updateProject(inputParam) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.httpClient.post(Config.API + '/project-manager/updateprojects',
      inputParam,
      { headers: headers });
  }

  updateTask(inputParam) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.httpClient.post(Config.API + '/project-manager/updatetasks',
      inputParam,
      { headers: headers });
  }

}
