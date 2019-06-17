import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'documento-sgc',
        loadChildren: './documento-sgc/documento-sgc.module#SgcVDocumentoSGCModule'
      },
      {
        path: 'tipo-doc',
        loadChildren: './tipo-doc/tipo-doc.module#SgcVTipoDocModule'
      },
      {
        path: 'historial-cambios',
        loadChildren: './historial-cambios/historial-cambios.module#SgcVHistorialCambiosModule'
      },
      {
        path: 'macro-proceso',
        loadChildren: './macro-proceso/macro-proceso.module#SgcVMacroProcesoModule'
      },
      {
        path: 'proceso',
        loadChildren: './proceso/proceso.module#SgcVProcesoModule'
      },
      {
        path: 'elementos-doc-sgc',
        loadChildren: './elementos-doc-sgc/elementos-doc-sgc.module#SgcVElementosDocSGCModule'
      },
      {
        path: 'elementos',
        loadChildren: './elementos/elementos.module#SgcVElementosModule'
      },
      {
        path: 'contenido',
        loadChildren: './contenido/contenido.module#SgcVContenidoModule'
      },
      {
        path: 'anexos',
        loadChildren: './anexos/anexos.module#SgcVAnexosModule'
      },
      {
        path: 'doc-revision',
        loadChildren: './doc-revision/doc-revision.module#SgcVDocRevisionModule'
      },
      {
        path: 'estado-doc',
        loadChildren: './estado-doc/estado-doc.module#SgcVEstadoDocModule'
      },
      {
        path: 'formatos',
        loadChildren: './formatos/formatos.module#SgcVFormatosModule'
      },
      {
        path: 'ajustar-doc',
        loadChildren: './ajustar-doc/ajustar-doc.module#SgcVAjustarDocModule'
      },
      {
        path: 'cargo',
        loadChildren: './cargo/cargo.module#SgcVCargoModule'
      },
      {
        path: 'accion-doc',
        loadChildren: './accion-doc/accion-doc.module#SgcVAccionDocModule'
      },
      {
        path: 'version-formatos',
        loadChildren: './version-formatos/version-formatos.module#SgcVVersionFormatosModule'
      },
      {
        path: 'solicitud',
        loadChildren: './solicitud/solicitud.module#SgcVSolicitudModule'
      },
      {
        path: 'tipo-solicitud',
        loadChildren: './tipo-solicitud/tipo-solicitud.module#SgcVTipoSolicitudModule'
      },
      {
        path: 'sol-revision',
        loadChildren: './sol-revision/sol-revision.module#SgcVSolRevisionModule'
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ],
  declarations: [],
  entryComponents: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SgcVEntityModule {}
