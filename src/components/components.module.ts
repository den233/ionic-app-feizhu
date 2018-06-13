import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import { CityindexComponent } from './cityindex/cityindex';
import { FormComponent } from './form-app/form-app';
import { HeroChildComponent } from './hero-child.components/hero-child.components';
import { VersionChildComponent } from './version-child/version-child';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
@NgModule({
	declarations: [CityindexComponent,
	FormComponent,
	HeroChildComponent,
	VersionChildComponent
],
	
	imports: [FormsModule ,ReactiveFormsModule,CommonModule],
	exports: [CityindexComponent,
	FormComponent,HeroChildComponent,
    VersionChildComponent
]
})
export class ComponentsModule {}
