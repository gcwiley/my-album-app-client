import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import comment components
import { CommentFormComponent } from './comment-form/comment-form.component';
import { CommentListComponent } from './comment-list/comment-list.component';

@NgModule({
	imports: [CommonModule],
	declarations: [CommentFormComponent, CommentListComponent],
	exports: [CommentFormComponent, CommentListComponent],
})
export class CommentComponentModule {}
