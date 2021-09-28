import { Component, OnInit } from '@angular/core';
import { DataStorageService } from 'src/app/services/data-storage/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  collapsed = true;

  constructor(private dataStorageService: DataStorageService) {}

  ngOnInit(): void {}

  onFetchData(): void {
    this.dataStorageService.fetchRecipes().subscribe((response) => {
      console.log(response);
    });
  }

  onSaveData(): void {
    this.dataStorageService.storeRecipes();
  }
}
