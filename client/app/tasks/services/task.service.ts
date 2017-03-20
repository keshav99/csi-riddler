import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TaskService{
    constructor(private http:Http){
        console.log('Task Service Initialized...');
    }

    getTasks(){
        return this.http.get('/api/tasks')
            .map(res => res.json());
    }

    addTask(newTask){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/task', JSON.stringify(newTask), {headers: headers})
            .map(res => res.json());
    }

    deleteTask(id){
        return this.http.delete('/api/task/'+id)
            .map(res => res.json());
    }

    updateTask(task){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put('/api/task/'+task._id, JSON.stringify(task), {headers: headers})
            .map(res => res.json());
    }

    getranks(){

        return this.http.get('/api/ranks')
            .map(res => res.json());

    }

    addrank(newrank){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/rank', JSON.stringify(newrank), {headers: headers})
            .map(res => res.json());
    }

    updateRank(rank){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put('/api/rank/'+rank._id, JSON.stringify(rank), {headers: headers})
            .map(res => res.json());
    }

    deleterank(id){
        return this.http.delete('/api/rank/'+id)
            .map(res => res.json());
    }

    getquestions(){
      return this.http.get('/api/questions')
          .map(res => res.json());
    }

    addquestions(newques){
      var headers = new Headers();
      headers.append('Content-Type', 'application/json');
      return this.http.post('/api/questions', JSON.stringify(newques), {headers: headers})
          .map(res => res.json());
    }

    deletequestion(id){
      return this.http.delete('/api/question/'+id)
          .map(res => res.json());
    }

    updateQues(Ques){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put('/api/question/'+Ques._id, JSON.stringify(Ques), {headers: headers})
            .map(res => res.json());
    }





}
