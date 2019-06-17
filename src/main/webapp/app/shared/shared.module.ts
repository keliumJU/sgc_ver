import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SgcVSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [SgcVSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [SgcVSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SgcVSharedModule {
  static forRoot() {
    return {
      ngModule: SgcVSharedModule
    };
  }
}
