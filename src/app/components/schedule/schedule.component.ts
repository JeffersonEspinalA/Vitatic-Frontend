import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { Activity } from "src/app/models/Activity";
import { ScheduleService } from "src/app/services/schedule.service";

@Component({
  selector: "app-schedule",
  templateUrl: "./schedule.component.html",
  styleUrls: ["./schedule.component.css"],
})
export class ScheduleComponent implements OnInit {
  Activities?: Activity[];
  accion = "Agregar";
  form: FormGroup;
  id?: number;
  constructor(private scheduleService: ScheduleService, private fb: FormBuilder, private toastr: ToastrService) {
    this.form = this.fb.group({
      name: ["", Validators.required],
      description: ["", Validators.required],
      category: ["", Validators.required],
      priority: ["", Validators.required],
      date: ["", Validators.required],
    });
  }
  ngOnInit(): void {
    // this.onDatatable();
  }
  onDatatable(): void {
    this.scheduleService.getAllActivities().subscribe({
      next: (data) => {
        this.Activities = data;
      },
      error: (e) => console.error(e),
    });
  }
  editActivity(activity: Activity) {
    this.accion = "Editar";
    this.id = activity.id;
    this.form.patchValue({
      name: activity.name,
      description: activity.description,
      category: activity.category,
      date: activity.date,
      priority: activity.priority,
    });
  }
  deleteActivity(id: number) {
    this.scheduleService.deleteActivity(id).subscribe({
      next: (data) => {
        this.toastr.info("La actividad fue eliminada", "Actividad Eliminado");
        this.onDatatable();
      },
      error: (e) => {
        this.toastr.error("Ocurrio un error eliminando", "Error");
      },
    });
  }
  saveOrUpdateGenre() {
    const activity: Activity = {
      name: this.form.get("name")?.value,
      description: this.form.get("description")?.value,
      category: this.form.get("category")?.value,
      priority: this.form.get("priority")?.value,
      date: this.form.get("date")?.value,
    };
    if (this.id == undefined) {
      this.scheduleService.addActivity(activity).subscribe({
        next: (data) => {
          this.toastr.success("La actividad fue registrado", "Actividad Registrado");
          this.onDatatable();
          this.form.reset();
        },
        error: (e) => {
          this.toastr.error("Hubo un error", "Error");
        },
      });
    } else {
      activity.id = this.id;
      this.scheduleService.updateActivity(this.id, activity).subscribe({
        next: (data) => {
          this.form.reset();
          this.accion = "Actualizar";
          this.id = undefined;
          this.toastr.info("El genero fue actualizado", "Genero Actualizado");
          this.onDatatable();
        },
        error: (e) => {
          this.toastr.error("Hubo un error", "Error");
        },
      });
    }
  }
}
