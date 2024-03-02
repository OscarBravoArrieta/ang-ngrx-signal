 import { Component, OnInit, inject } from '@angular/core'
 import { CommonModule } from '@angular/common'
 import { RouterOutlet } from '@angular/router'
 import { TodosStore } from './sore/todo.store'

 @Component({
     selector: 'app-root',
     standalone: true,
     imports: [CommonModule, RouterOutlet],
     templateUrl: './app.component.html',
     styleUrl: './app.component.scss'
 })
 export class AppComponent implements OnInit {

     title = 'ang-ngrx-signal'
     store = inject(TodosStore)

 }
