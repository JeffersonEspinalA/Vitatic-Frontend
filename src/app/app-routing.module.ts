import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdvicesectionComponent } from "./components/advicesection/advicesection.component";
import { HomeComponent } from "./components/home/home.component";
import { InstructionComponent } from "./components/instruction/instruction.component";
import { ScheduleComponent } from "./components/schedule/schedule.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "advices", component: AdvicesectionComponent },
  { path: "instructions", component: InstructionComponent },
  { path: "schedules", component: ScheduleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
