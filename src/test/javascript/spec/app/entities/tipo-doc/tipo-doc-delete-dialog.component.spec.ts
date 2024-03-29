/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { SgcVTestModule } from '../../../test.module';
import { TipoDocDeleteDialogComponent } from 'app/entities/tipo-doc/tipo-doc-delete-dialog.component';
import { TipoDocService } from 'app/entities/tipo-doc/tipo-doc.service';

describe('Component Tests', () => {
  describe('TipoDoc Management Delete Component', () => {
    let comp: TipoDocDeleteDialogComponent;
    let fixture: ComponentFixture<TipoDocDeleteDialogComponent>;
    let service: TipoDocService;
    let mockEventManager: any;
    let mockActiveModal: any;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [SgcVTestModule],
        declarations: [TipoDocDeleteDialogComponent]
      })
        .overrideTemplate(TipoDocDeleteDialogComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(TipoDocDeleteDialogComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(TipoDocService);
      mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
      mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
    });

    describe('confirmDelete', () => {
      it('Should call delete service on confirmDelete', inject(
        [],
        fakeAsync(() => {
          // GIVEN
          spyOn(service, 'delete').and.returnValue(of({}));

          // WHEN
          comp.confirmDelete(123);
          tick();

          // THEN
          expect(service.delete).toHaveBeenCalledWith(123);
          expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
          expect(mockEventManager.broadcastSpy).toHaveBeenCalled();
        })
      ));
    });
  });
});
