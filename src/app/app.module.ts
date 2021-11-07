import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoContainerComponent } from './todo/todo-container/todo-container.component';
import { TodoItemComponent } from './todo/todo-item/todo-item.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { todoReducer } from './state/todo/todo.reducer';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TodoHeaderComponent } from './todo/todo-header/todo-header.component';
import { TodoAddComponent } from './todo/todo-add/todo-add.component';
import { TodoEffects } from './state/todo/todo.effects';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent,
    TodoContainerComponent,
    TodoItemComponent,
    TodoHeaderComponent,
    TodoAddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ todo: todoReducer }, {}),
    EffectsModule.forRoot([TodoEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
