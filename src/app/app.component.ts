 import { Component, OnInit, inject } from '@angular/core'
 import { CommonModule, JsonPipe } from '@angular/common'
 import { RouterOutlet } from '@angular/router'
 import { TodosStore } from './sore/todo.store'
 import { TodoListComponent } from './components/todo-list/todo-list.component'
 import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'

 @Component({
     selector: 'app-root',
     standalone: true,
     imports: [CommonModule, RouterOutlet, JsonPipe, TodoListComponent, MatProgressSpinnerModule],
     templateUrl: './app.component.html',
     styleUrl: './app.component.scss'
 })
 export class AppComponent implements OnInit {

     title = 'ang-ngrx-signal'
     store = inject(TodosStore)

     //--------------------------------------------------------------------------------------------

     ngOnInit(): void {
          this.loadTodos()
             .then(() => console.log("Todos loades"))
     }

     //--------------------------------------------------------------------------------------------

     async loadTodos() {

         await this.store.loadAll()

     }
     //--------------------------------------------------------------------------------------------

 }
