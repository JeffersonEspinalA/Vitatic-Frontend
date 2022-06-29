import { Component, OnInit } from "@angular/core";
import { Activity } from "src/app/models/Activity";
import { Progress } from "src/app/models/Progress";
import { ProgressService } from "src/app/services/progress.service";
import { ScheduleService } from "src/app/services/schedule.service";

@Component({
  selector: "app-estadistics",
  templateUrl: "./estadistics.component.html",
  styleUrls: ["./estadistics.component.css"],
})
export class EstadisticsComponent implements OnInit {
  sumaDeporte?: any;
  sumaSalud?: any;
  sumaEstudio?: any;
  sumaNutricion?: any;
  sumaHogar?: any;
  sumaEliminar?: any;

  progress?: Progress;
  listActivities?: Activity[];
  arr?: number[];
  listProgress?: Progress[];
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
    this.progressService.getAllProgress().subscribe({
      next: (data) => {
        this.listProgress = data;
      },
      error: (e) => console.error(e),
    });
    this.progressService.getSuma("Deporte").subscribe({
      next: (data) => {
        this.sumaDeporte = data;
      },
    });
    this.progressService.getSuma("Salud").subscribe({
      next: (data) => {
        this.sumaSalud = data;
      },
    });
    this.progressService.getSuma("Estudio").subscribe({
      next: (data) => {
        this.sumaEstudio = data;
      },
    });
    this.progressService.getSuma("Nutrición").subscribe({
      next: (data) => {
        this.sumaNutricion = data;
      },
    });
    this.progressService.getSuma("Hogar").subscribe({
      next: (data) => {
        this.sumaHogar = data;
      },
    });
    this.progressService.getSuma("Eliminar un mal hábito").subscribe({
      next: (data) => {
        this.sumaEliminar = data;
      },
    });

  }

  actualizarDatos(): void {
    this.listActivities?.forEach((element) => {
      this.progressService.getById(element.id).subscribe({
        next: (data) => {
          this.progress = data;
          element.points = this.progress.points;
        },
      });
    });
    this.Sumar();
  }
  Sumar(): void {
    // suma=
  }
}
