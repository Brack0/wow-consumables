import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Material } from 'src/app/new-model/material.model';
import { MaterialService } from 'src/app/shared/new-services';

interface ProfessionCategories {
  [category: string]: Material[];
}

@Component({
  selector: 'wowc-profession-recipes',
  templateUrl: './profession-recipes.component.html',
  styleUrls: ['./profession-recipes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfessionRecipesComponent implements OnInit {
  professionCategories: ProfessionCategories = {};
  categories: string[] = [];

  constructor(
    private materialService: MaterialService,
    private route: ActivatedRoute,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.route.data
      .pipe(
        switchMap((routeData) =>
          this.materialService.getMaterialsByProfession(routeData.profession)
        )
      )
      .subscribe((materials) => {
        this.sortInCategories(materials);
        this.cd.markForCheck();
      });
  }

  sortInCategories(materials: Material[]) {
    this.professionCategories = {};
    this.categories = [];
    for (const material of materials) {
      if (this.professionCategories[material.category]) {
        this.professionCategories[material.category].push(material);
      } else {
        this.professionCategories[material.category] = [material];
        this.categories.push(material.category);
      }
    }
  }
}
