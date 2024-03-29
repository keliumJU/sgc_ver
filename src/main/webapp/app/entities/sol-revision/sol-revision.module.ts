import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { JhiLanguageHelper } from 'app/core';

import { SgcVSharedModule } from 'app/shared';
import {
  SolRevisionComponent,
  SolRevisionDetailComponent,
  SolRevisionUpdateComponent,
  SolRevisionDeletePopupComponent,
  SolRevisionDeleteDialogComponent,
  solRevisionRoute,
  solRevisionPopupRoute
} from './';

const ENTITY_STATES = [...solRevisionRoute, ...solRevisionPopupRoute];

@NgModule({
  imports: [SgcVSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    SolRevisionComponent,
    SolRevisionDetailComponent,
    SolRevisionUpdateComponent,
    SolRevisionDeleteDialogComponent,
    SolRevisionDeletePopupComponent
  ],
  entryComponents: [SolRevisionComponent, SolRevisionUpdateComponent, SolRevisionDeleteDialogComponent, SolRevisionDeletePopupComponent],
  providers: [{ provide: JhiLanguageService, useClass: JhiLanguageService }],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SgcVSolRevisionModule {
  constructor(private languageService: JhiLanguageService, private languageHelper: JhiLanguageHelper) {
    this.languageHelper.language.subscribe((languageKey: string) => {
      if (languageKey !== undefined) {
        this.languageService.changeLanguage(languageKey);
      }
    });
  }
}
