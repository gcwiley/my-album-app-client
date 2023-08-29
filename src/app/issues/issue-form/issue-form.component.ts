import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

// import the issue service
import { IssueService } from 'src/app/services/issue.service';

// import the issue interface
import { Issue } from 'src/app/types/issue.interface';

@Component({
	selector: 'app-issue-form',
	templateUrl: './issue-form.component.html',
	styleUrls: ['./issue-form.component.scss'],
	standalone: true,
})
export class IssueFormComponent {
	public mode = 'create';
}
