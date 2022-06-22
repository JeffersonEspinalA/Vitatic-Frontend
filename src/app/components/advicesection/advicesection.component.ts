import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { Advice } from "src/app/models/Advice";
import { Category } from "src/app/models/Category";
import { AdvicesectionService } from "src/app/services/advicesection.service";

@Component({
  selector: "app-advicesection",
  templateUrl: "./advicesection.component.html",
  styleUrls: ["./advicesection.component.css"],
})
export class AdvicesectionComponent implements OnInit {
  Advices?: Advice[];
  accion = "Agregar";
  form: FormGroup;
  // categoria: Category = {
  // category: "Dormir",
  // };

  constructor(private adviceService: AdvicesectionService, private fb: FormBuilder, private toastr: ToastrService) {
    this.form = this.fb.group({
      category: ["", Validators.required],
    });
  }

  ngOnInit(): void {
    this.onDatatable();
  }

  onDatatable(): void {
    const categoria: Category = {
      category: this.form.get("category")?.value,
    };
    this.adviceService.getAllAdvice(categoria).subscribe({
      next: (data) => {
        this.Advices = data;
      },
      error: (e) => console.error(e),
    });
  }
}
