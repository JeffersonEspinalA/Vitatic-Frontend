import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdvicesectionComponent } from "./components/advicesection/advicesection.component";
import { EstadisticsComponent } from "./components/estadistics/estadistics.component";
import { HomeComponent } from "./components/home/home.component";
import { InstructionComponent } from "./components/instruction/instruction.component";
import { ListactivitiesComponent } from "./components/listactivities/listactivities.component";
import { ProgressComponent } from "./components/progress/progress.component";
import { ScheduleComponent } from "./components/schedule/schedule.component";


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "advices", component: AdvicesectionComponent },
  { path: "instructions", component: InstructionComponent },
  { path: "schedules", component: ScheduleComponent },
  { path: "listactivities", component: ListactivitiesComponent },
  { path: "progress", component: ProgressComponent },
  { path: "estadistics", component:EstadisticsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
