import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { JhiLanguageHelper } from 'app/core';

import { SgcVSharedModule } from 'app/shared';
import {
  ContenidoComponent,
  ContenidoDetailComponent,
  ContenidoUpdateComponent,
  ContenidoDeletePopupComponent,
  ContenidoDeleteDialogComponent,
  contenidoRoute,
  contenidoPopupRoute
} from './';

const ENTITY_STATES = [...contenidoRoute, ...contenidoPopupRoute];

@NgModule({
  imports: [SgcVSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    ContenidoComponent,
    ContenidoDetailComponent,
    ContenidoUpdateComponent,
    ContenidoDeleteDialogComponent,
    ContenidoDeletePopupComponent
  ],
  entryComponents: [ContenidoComponent, ContenidoUpdateComponent, ContenidoDeleteDialogComponent, ContenidoDeletePopupComponent],
  providers: [{ provide: JhiLanguageService, useClass: JhiLanguageService }],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SgcVContenidoModule {
  constructor(private languageService: JhiLanguageService, private languageHelper: JhiLanguageHelper) {
    this.languageHelper.language.subscribe((languageKey: string) => {
      if (languageKey !== undefined) {
        this.languageService.changeLanguage(languageKey);
      }
    });
  }
}
