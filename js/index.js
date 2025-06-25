function createSurveyPdfModel(surveyModel) {
  const pdfWidth =
    !!surveyModel && surveyModel.pdfWidth ? surveyModel.pdfWidth : 210;
  const pdfHeight =
    !!surveyModel && surveyModel.pdfHeight ? surveyModel.pdfHeight : 297;
  const options = {
    fontSize: 14,
    margins: {
      left: 10,
      right: 10,
      top: 10,
      bot: 10,
    },

    format: [pdfWidth, pdfHeight],
  };

  const surveyPDF = new SurveyPDF.SurveyPDF(json, options);

  if (surveyModel) {
    surveyPDF.data = surveyModel.data;
    surveyPDF.mode = "display";
  }

  return surveyPDF;
}
function saveSurveyToPdf(filename, surveyModel) {
  createSurveyPdfModel(surveyModel).save(filename);
}

const survey = new Survey.Model(json);
// Ocultar el botón de guardar como PDF al principio
$(document).ready(function () {
  $("#deshabilit").hide();
});

survey.questionErrorLocation = "bottom";

// survey.applyTheme(SurveyTheme.ContrastLight);

survey.applyTheme({
  themeName: "contrast",
  colorPalette: "light",
  isPanelless: false,
  backgroundImage: "",
  backgroundOpacity: 1,
  backgroundImageAttachment: "scroll",
  backgroundImageFit: "cover",
  cssVariables: {
    // "--sjs-font-size": "1.75em",

    "--sjs-corner-radius": "4px",
    "--sjs-base-unit": "8px",
    "--sjs-shadow-small":
      "0px 0px 0px 1px rgba(0, 0, 0, 0.05), 0px 8px 16px 0px rgba(0, 0, 0, 0.1), 0px 2px 4px 0px rgba(0, 0, 0, 0.1)",
    "--sjs-shadow-inner":
      "inset 0px 0px 0px 1px rgba(0, 0, 0, 0.05), inset 0px 1px 4px 0px rgba(0, 0, 0, 0.1)",
    "--sjs-border-default": "rgba(0, 0, 0, 1)",
    "--sjs-border-light": "rgba(0, 0, 0, 0.2)",
    "--sjs-general-backcolor": "rgba(255, 255, 255, 1)",
    "--sjs-general-backcolor-dark": "rgba(255, 216, 77, 1)",
    "--sjs-general-backcolor-dim-light": "#f3f6f9",
    "--sjs-general-backcolor-dim-dark": "rgba(255, 216, 77, 1)",
    "--sjs-general-forecolor": "rgba(0, 0, 0, 1)",
    "--sjs-general-forecolor-light": "#9eaab8",
    "--sjs-general-dim-forecolor": "rgba(0, 0, 0, 1)",
    "--sjs-general-dim-forecolor-light": "rgba(0, 0, 0, 1)",
    "--sjs-secondary-backcolor": "rgba(255, 152, 20, 1)",
    "--sjs-secondary-backcolor-light": "rgba(255, 152, 20, 0.1)",
    "--sjs-secondary-backcolor-semi-light": "rgba(255, 152, 20, 0.25)",
    "--sjs-secondary-forecolor": "rgba(255, 255, 255, 1)",
    "--sjs-secondary-forecolor-light": "rgba(255, 255, 255, 0.25)",
    "--sjs-shadow-small-reset":
      "0px 0px 0px 0px rgba(0, 0, 0, 0.05), 0px 0px 0px 0px rgba(0, 0, 0, 0.1), 0px 0px 0px 0px rgba(0, 0, 0, 0.1)",
    "--sjs-shadow-medium": "0px 0px 0px 2px rgba(0, 0, 0, 1)",
    "--sjs-shadow-large": "0px 6px 0px 0px rgba(0, 0, 0, 1)",
    "--sjs-shadow-inner-reset":
      "inset 0px 0px 0px 0px rgba(0, 0, 0, 0.05), inset 0px 0px 0px 0px rgba(0, 0, 0, 0.1)",
    "--sjs-border-inside": "rgba(0, 0, 0, 0.16)",
    "--sjs-special-red-forecolor": "rgba(255, 255, 255, 1)",
    "--sjs-special-green": "rgba(25, 179, 148, 1)",
    "--sjs-special-green-light": "rgba(25, 179, 148, 0.1)",
    "--sjs-special-green-forecolor": "rgba(255, 255, 255, 1)",
    "--sjs-special-blue": "rgba(67, 127, 217, 1)",
    "--sjs-special-blue-light": "rgba(67, 127, 217, 0.1)",
    "--sjs-special-blue-forecolor": "rgba(255, 255, 255, 1)",
    "--sjs-special-yellow": "rgba(255, 152, 20, 1)",
    "--sjs-special-yellow-light": "rgba(255, 152, 20, 0.1)",
    "--sjs-special-yellow-forecolor": "rgba(255, 255, 255, 1)",
    "--sjs-article-font-xx-large-textDecoration": "none",
    "--sjs-article-font-xx-large-fontWeight": "700",
    "--sjs-article-font-xx-large-fontStyle": "normal",
    "--sjs-article-font-xx-large-fontStretch": "normal",
    "--sjs-article-font-xx-large-letterSpacing": "0",
    "--sjs-article-font-xx-large-lineHeight": "64px",
    "--sjs-article-font-xx-large-paragraphIndent": "0px",
    "--sjs-article-font-xx-large-textCase": "none",
    "--sjs-article-font-x-large-textDecoration": "none",
    "--sjs-article-font-x-large-fontWeight": "700",
    "--sjs-article-font-x-large-fontStyle": "normal",
    "--sjs-article-font-x-large-fontStretch": "normal",
    "--sjs-article-font-x-large-letterSpacing": "0",
    "--sjs-article-font-x-large-lineHeight": "56px",
    "--sjs-article-font-x-large-paragraphIndent": "0px",
    "--sjs-article-font-x-large-textCase": "none",
    "--sjs-article-font-large-textDecoration": "none",
    "--sjs-article-font-large-fontWeight": "700",
    "--sjs-article-font-large-fontStyle": "normal",
    "--sjs-article-font-large-fontStretch": "normal",
    "--sjs-article-font-large-letterSpacing": "0",
    "--sjs-article-font-large-lineHeight": "40px",
    "--sjs-article-font-large-paragraphIndent": "0px",
    "--sjs-article-font-large-textCase": "none",
    "--sjs-article-font-medium-textDecoration": "none",
    "--sjs-article-font-medium-fontWeight": "700",
    "--sjs-article-font-medium-fontStyle": "normal",
    "--sjs-article-font-medium-fontStretch": "normal",
    "--sjs-article-font-medium-letterSpacing": "0",
    "--sjs-article-font-medium-lineHeight": "32px",
    "--sjs-article-font-medium-paragraphIndent": "0px",
    "--sjs-article-font-medium-textCase": "none",
    "--sjs-article-font-default-textDecoration": "none",
    "--sjs-article-font-default-fontWeight": "400",
    "--sjs-article-font-default-fontStyle": "normal",
    "--sjs-article-font-default-fontStretch": "normal",
    "--sjs-article-font-default-letterSpacing": "0",
    "--sjs-article-font-default-lineHeight": "28px",
    "--sjs-article-font-default-paragraphIndent": "0px",
    "--sjs-article-font-default-textCase": "none",
    "--sjs-general-backcolor-dim": "#ffffff",
    "--sjs-primary-backcolor": "rgba(0, 0, 0, 1)",
    "--sjs-primary-backcolor-dark": "rgba(83, 83, 83, 1)",
    "--sjs-primary-backcolor-light": "rgba(255, 216, 77, 1)",
    "--sjs-primary-forecolor": "rgba(255, 255, 255, 1)",
    "--sjs-primary-forecolor-light": "rgba(255, 255, 255, 0.25)",
    "--sjs-special-red": "rgba(229, 10, 62, 1)",
    "--sjs-special-red-light": "rgba(229, 10, 62, 0.1)",
  },
  headerView: "basic",
});

// Manejar el evento onComplete de SurveyJS

// Obtener la fecha y hora actual en el formato deseado
const currentDate = new Date();
const formattedDate = currentDate
  .toLocaleString("es-ES", { timeZone: "America/Argentina/Buenos_Aires" })
  .replace(",", "") // eliminar la coma de separación de fecha y hora
  .replace(/\//g, "-") // reemplazar barras con guiones
  .replace(/\s+/g, "_") // reemplazar espacios con guiones bajos
  .replace(/:/g, "-"); // reemplazar dos puntos con guiones

survey.onComplete.add((sender, options) => {
  // Usar comillas invertidas y la sintaxis de interpolación para formar el nombre del archivo
  const fileName = `ReporteInspeccion_${formattedDate}.pdf`;
  saveSurveyToPdf(fileName, survey);
});

// Agregar el botón de navegación para guardar como PDF
survey.addNavigationItem({
  id: "deshabilit",
  title: "Save as PDF",
  action: function () {
    saveSurveyToPdf("Resultado_${formattedDate}.pdf", survey);
  },
});

// Renderizar la encuesta en el elemento con id "surveyContainer"
survey.render("surveyContainer");

$("#surveyElement").Survey({ model: survey });
