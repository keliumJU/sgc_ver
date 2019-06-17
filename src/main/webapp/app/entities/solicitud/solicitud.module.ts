import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { JhiLanguageHelper } from 'app/core';

import { SgcVSharedModule } from 'app/shared';
import {
  SolicitudComponent,
  SolicitudDetailComponent,
  SolicitudUpdateComponent,
  SolicitudDeletePopupComponent,
  SolicitudDeleteDialogComponent,
  solicitudRoute,
  solicitudPopupRoute
} from './';

const ENTITY_STATES = [...solicitudRoute, ...solicitudPopupRoute];

@NgModule({
  imports: [SgcVSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    SolicitudComponent,
    SolicitudDetailComponent,
    SolicitudUpdateComponent,
    SolicitudDeleteDialogComponent,
    SolicitudDeletePopupComponent
  ],
  entryComponents: [SolicitudComponent, SolicitudUpdateComponent, SolicitudDeleteDialogComponent, SolicitudDeletePopupComponent],
  providers: [{ provide: JhiLanguageService, useClass: JhiLanguageService }],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SgcVSolicitudModule {
  constructor(private languageService: JhiLanguageService, private languageHelper: JhiLanguageHelper) {
    this.languageHelper.language.subscribe((languageKey: string) => {
      if (languageKey !== undefined) {
        this.languageService.changeLanguage(languageKey);
      }
    });
  }
}
