import { Component, OnInit } from "@angular/core";
import { Activity } from "src/app/models/Activity";
import { ProgressService } from "src/app/services/progress.service";
import { ScheduleService } from "src/app/services/schedule.service";

@Component({
  selector: "app-estadistics",
  templateUrl: "./estadistics.component.html",
  styleUrls: ["./estadistics.component.css"],
})
export class EstadisticsComponent implements OnInit {
  Categories?: ["Deporte", "Salud", "Estudio", "Nutrición", "Hogar", "Eliminar un mal hábito"];
  listActivities?: Activity[];
  constructor(private progressService: ProgressService, private scheduleService: ScheduleService) {}

  ngOnInit(): void {
    this.onDatatable();
  }
  onDatatable(): void {
    this.scheduleService.getAllActivitiesNoOrdenado().subscribe({
      next: (data) => {
        this.listActivities = data;
      },
      error: (e) => console.error(e),
    });
  }
}
