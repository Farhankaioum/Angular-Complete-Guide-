import { Component } from '@angular/core'

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']
})
export class ServerComponent{
    username='';
    title = 'Welcome';
    status = false;
    serverStatus = 'No server created!';
    serverName = 'Test server';
    
   constructor(){
       setTimeout(() => {
           this.status = true;
       }, 2000);
   }

    OnUpdateServerName(event: any){
        this.serverName = event.target.value;
    }

    OnServerCreated(){
        this.serverStatus = 'Server created name ' + this.serverName;
    }

    OnUpdateUserName(event: any){
        this.username = event.target.value;
    }

    ResetUserName(){
        this.username = '';
    }
}