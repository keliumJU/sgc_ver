import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { JhiLanguageHelper } from 'app/core';

import { SgcVSharedModule } from 'app/shared';
import {
  DocRevisionComponent,
  DocRevisionDetailComponent,
  DocRevisionUpdateComponent,
  DocRevisionDeletePopupComponent,
  DocRevisionDeleteDialogComponent,
  docRevisionRoute,
  docRevisionPopupRoute
} from './';

const ENTITY_STATES = [...docRevisionRoute, ...docRevisionPopupRoute];

@NgModule({
  imports: [SgcVSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    DocRevisionComponent,
    DocRevisionDetailComponent,
    DocRevisionUpdateComponent,
    DocRevisionDeleteDialogComponent,
    DocRevisionDeletePopupComponent
  ],
  entryComponents: [DocRevisionComponent, DocRevisionUpdateComponent, DocRevisionDeleteDialogComponent, DocRevisionDeletePopupComponent],
  providers: [{ provide: JhiLanguageService, useClass: JhiLanguageService }],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SgcVDocRevisionModule {
  constructor(private languageService: JhiLanguageService, private languageHelper: JhiLanguageHelper) {
    this.languageHelper.language.subscribe((languageKey: string) => {
      if (languageKey !== undefined) {
        this.languageService.changeLanguage(languageKey);
      }
    });
  }
}
