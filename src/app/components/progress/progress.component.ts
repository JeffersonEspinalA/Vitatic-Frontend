import { Component, OnInit } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { Activity } from "src/app/models/Activity";
import { Progress } from "src/app/models/Progress";
import { ProgressService } from "src/app/services/progress.service";
import { ScheduleService } from "src/app/services/schedule.service";

@Component({
  selector: "app-progress",
  templateUrl: "./progress.component.html",
  styleUrls: ["./progress.component.css"],
})
export class ProgressComponent implements OnInit {
  id: any;
  listProgress?: Progress[];
  listActivities?: Activity[];
  activity?: Activity;
  puntos?: number;
  constructor(private progressService: ProgressService, private scheduleService: ScheduleService, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.onDatatable();
  }
  onDatatable(): void {
    this.progressService.getAllProgress().subscribe({
      next: (data) => {
        this.listProgress = data;
      },
      error: (e) => console.error(e),
    });
    this.scheduleService.getAllActivitiesNoOrdenado().subscribe({
      next: (data) => {
        this.listActivities = data;
      },
      error: (e) => console.error(e),
    });
  }

  editProgress(id: number) {
    this.listActivities?.forEach((element) => {
      if (id == element.id) {
        this.activity = element;
        if (this.activity.priority == "A") {
          this.puntos = 100;
        }
        if (this.activity.priority == "B") {
          this.puntos = 75;
        }
        if (this.activity.priority == "C") {
          this.puntos = 50;
        }
      }
    });

    const progress: Progress = {
      points: this.puntos,
    };

    this.progressService.putProgress(id, progress).subscribe({
      next: (data) => {
        this.toastr.info("La actividad fue completada", "Actividad Completada");
        this.onDatatable();
      },
      error: (e) => {
        this.toastr.error("Ocurrio un error", "Error");
      },
    });
    console.log(id);
  }
}
