import { NgModule } from '@angular/core';
import { CityindexComponent } from './cityindex/cityindex';
import { FormComponent } from './form-app/form-app';
@NgModule({
	declarations: [CityindexComponent,
    FormComponent],
	imports: [],
	exports: [CityindexComponent,
    FormComponent]
})
export class ComponentsModule {}
