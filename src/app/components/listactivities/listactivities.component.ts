import { Component, OnInit } from '@angular/core';
import { Activity } from 'src/app/models/Activity';
import { ListactivitiesService } from 'src/app/services/listactivities.service';

@Component({
  selector: 'app-listactivities',
  templateUrl: './listactivities.component.html',
  styleUrls: ['./listactivities.component.css']
})
export class ListactivitiesComponent implements OnInit {
  Activities?: Activity[];
  constructor(private listactivities: ListactivitiesService) { }

  ngOnInit(): void {
    this.onDatatable();
  }

  onDatatable(): void {
    this.listactivities.getAllActivities().subscribe({
      next: (data) => {
        this.Activities = data;
      },
      error: (e) => console.error(e),
    });
  }
}
