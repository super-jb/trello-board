import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KanbanRoutingModule } from './kanban-routing.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { BoardComponent } from './board/board.component';
import { FormsModule } from '@angular/forms';

import { BoardsListComponent } from './boards-list/boards-list.component';
import { BoardDialogComponent } from './dialogs/board-dialog.component';

import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { TaskDialogComponent } from './dialogs/task-dialog.component';


@NgModule({
  declarations: [
    BoardsListComponent,
    BoardComponent,
    BoardDialogComponent,
    TaskDialogComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    KanbanRoutingModule,
    FormsModule,
    DragDropModule,
    MatDialogModule,
    MatButtonToggleModule,
  ],
  entryComponents: [
    BoardDialogComponent,
    TaskDialogComponent
  ]
})
export class KanbanModule { }
