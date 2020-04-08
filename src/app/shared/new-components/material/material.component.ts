import {
  Component,
  Input,
  OnInit,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Material } from 'src/app/new-model/material.model';
import { MaterialService } from '../../new-services';

@Component({
  selector: 'wowc-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaterialComponent implements OnInit {
  @Input()
  private idMaterial: number;
  material: Material;

  @Input()
  quantity: number;

  @Input()
  showTimesSymbol: boolean = false;

  @Input()
  orientation: 'column' | 'row';

  constructor(private materialService: MaterialService) {}

  ngOnInit() {
    this.materialService
      .getMaterialById(this.idMaterial)
      .subscribe((material) => (this.material = material));
  }
}
