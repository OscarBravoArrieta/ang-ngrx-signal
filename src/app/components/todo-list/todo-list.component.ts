 import { Component, effect, inject, viewChild } from '@angular/core'
 import { MatFormFieldModule } from '@angular/material/form-field'
 import { MatInputModule } from '@angular/material/input'
 import { MatIconModule } from '@angular/material/icon'
 import { MatSuffix } from '@angular/material/form-field'
 import { MatLabel } from '@angular/material/form-field'
 import { MatButtonToggleChange, MatButtonToggleGroup, MatButtonToggleModule } from '@angular/material/button-toggle'
 import { MatListModule } from '@angular/material/list'
 import { TodosFilter, TodosStore } from '../../sore/todo.store'

 @Component({
     selector: 'app-todo-list',
     standalone: true,
     imports: [
         MatFormFieldModule,
         MatInputModule,
         MatIconModule,
         MatSuffix,
         MatLabel,
         MatButtonToggleModule,
         MatListModule
     ],

     templateUrl: './todo-list.component.html',
     styleUrl: './todo-list.component.scss'
 })
 export class TodoListComponent {

     public store = inject(TodosStore)
     filter = viewChild.required(MatButtonToggleGroup)

     constructor() {

         effect(() => {
             const filter = this.filter()
             filter.value = this.store.filter()
         })

     }

     async onAddTodo(title: string) {

         await this.store.addTodo(title)

     }

     async onDeleteTodo(id: string, event: MouseEvent){

         event.stopPropagation()
         await this.store.deleteTodo(id)

     }

     async onTodoToggeld(id: string, completed: boolean) {

         await this.store.updateTodo(id, completed)

     }

     async onFilterTodos(event: MatButtonToggleChange) {

         const filter = event.value as TodosFilter

         this.store.updateFilter(filter)

     }

 }
