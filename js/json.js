const json = {
  locale: "es",
  logo: "https://clemenclay.github.io/declaracion/logo-agc-mail.png",
  logoWidth: "230",
  logoHeight: "81",
  pages: [
    {
      name: "page1",
      title: { es: "Formulario de Subsanacion de Inspección" },
      elements: [
        {
          type: "text",
          name: "nroSolicitud",
          title: "Nro de Solicitud",
          isRequired: true
        },
        {
          type: "text",
          name: "referenciaExterna",
          title: "Referencia Externa",
          isRequired: true
        },
        {
          "type": "text",
          "name": "fecha",
          "title": "Fecha de Inspección",
          "inputType": "datetime-local",
          "isRequired": true
        },
        {
          type: "text",
          name: "origen",
          title: "Origen",
          isRequired: true
        },
        {
          type: "text",
          name: "motivo",
          title: "Motivo de la inspección",
          isRequired: true
        },
        {
          type: "text",
          name: "area",
          title: "Área",
          isRequired: true
        },
        {
          type: "comment",
          name: "observaciones",
          title: "Observaciones"
        },
        {
          type: "dropdown",
          name: "resultado",
          title: "Resultado",
          isRequired: true,
          choices: [
            "Con irregularidades",
            "Sin irregularidades",
            "No se realizó"
          ]
        },
        {
          type: "matrixdynamic",
          name: "inspectores",
          title: "Inspectores",
          columns: [
            {
              name: "inspector",
              title: "Nombre del Inspector",
              cellType: "text",
              isRequired: true
            }
          ],
          rowCount: 1,
          confirmDelete: true,
          allowRowsDragAndDrop: true
        },
        {
          type: "matrixdynamic",
          name: "actas",
          title: "Actas Generadas",
          columns: [
            { name: "numero", title: "Nro de Acta", cellType: "text", isRequired: false },
            { name: "nombre", title: "Nombre", cellType: "text" },
            { name: "descripcion", title: "Descripción", cellType: "text" },
            { name: "tipo", title: "Tipo", cellType: "text" },
            { name: "serie", title: "Serie", cellType: "text" },
            { name: "link", title: "Link al PDF", cellType: "text", inputType: "url" }
          ],
          rowCount: 1,
          confirmDelete: true,
          allowRowsDragAndDrop: true
        }
      ]
    }
  ],
  showQuestionNumbers: "off"
};
