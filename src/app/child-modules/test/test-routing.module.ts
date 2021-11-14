import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { TestComponent } from './test.component';

const routes: Routes = [{ path: '', component: TestComponent},{ 
path: 'hello', component: HelloComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule { }
