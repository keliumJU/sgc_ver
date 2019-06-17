import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { JhiLanguageHelper } from 'app/core';

import { SgcVSharedModule } from 'app/shared';
import {
  ProcesoComponent,
  ProcesoDetailComponent,
  ProcesoUpdateComponent,
  ProcesoDeletePopupComponent,
  ProcesoDeleteDialogComponent,
  procesoRoute,
  procesoPopupRoute
} from './';

const ENTITY_STATES = [...procesoRoute, ...procesoPopupRoute];

@NgModule({
  imports: [SgcVSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    ProcesoComponent,
    ProcesoDetailComponent,
    ProcesoUpdateComponent,
    ProcesoDeleteDialogComponent,
    ProcesoDeletePopupComponent
  ],
  entryComponents: [ProcesoComponent, ProcesoUpdateComponent, ProcesoDeleteDialogComponent, ProcesoDeletePopupComponent],
  providers: [{ provide: JhiLanguageService, useClass: JhiLanguageService }],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SgcVProcesoModule {
  constructor(private languageService: JhiLanguageService, private languageHelper: JhiLanguageHelper) {
    this.languageHelper.language.subscribe((languageKey: string) => {
      if (languageKey !== undefined) {
        this.languageService.changeLanguage(languageKey);
      }
    });
  }
}
