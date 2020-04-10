import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Material } from 'src/app/new-model/material.model';
import { MaterialService, WowheadService } from '../../new-services';

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

  constructor(
    private materialService: MaterialService,
    private wowheadService: WowheadService
  ) {}

  ngOnInit() {
    this.materialService
      .getMaterialById(this.idMaterial)
      .subscribe((material) => {
        this.material = material;
        this.wowheadService.callRefreshWowTooltip();
      });
  }
}
