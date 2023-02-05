import { NgModule } from '@angular/core';

// Pipes
// Note: Add new pipes here
import { SimpleTruncatePipe } from './simple-truncate.pipe';
import { TruncatePipe } from './truncate.pipe';

export { SimpleTruncatePipe, TruncatePipe };

// Pipes array for export and declaration in NgModule below
// Note: This is a workaround for AoT compilation
const PIPES = [SimpleTruncatePipe, TruncatePipe];

// Pipes module for export and declaration in AppModule below
@NgModule({
  exports: [PIPES],
  declarations: PIPES,
})
export class Pipes {}
