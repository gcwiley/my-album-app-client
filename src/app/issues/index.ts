import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import the issue components
import { IssueFormComponent } from './issue-form/issue-form.component';
import { IssueListComponent } from './issue-list/issue-list.component';

@NgModule({
	imports: [CommonModule],
	declarations: [IssueFormComponent, IssueListComponent],
	exports: [IssueFormComponent, IssueListComponent],
})
export class IssueComponentModule {}
