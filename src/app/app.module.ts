import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HomeComponent } from "./components/home/home.component";
import { AdvicesectionComponent } from "./components/advicesection/advicesection.component";
import { InstructionComponent } from "./components/instruction/instruction.component";
import { ToastrModule } from "ngx-toastr";
import { ScheduleComponent } from "./components/schedule/schedule.component";
import { ListactivitiesComponent } from './components/listactivities/listactivities.component';
import { ProgressComponent } from './components/progress/progress.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, ScheduleComponent, AdvicesectionComponent, InstructionComponent, ListactivitiesComponent, ProgressComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, ReactiveFormsModule, ToastrModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
