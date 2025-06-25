
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

survey.applyTheme({
  themeName: "contrast",
  colorPalette: "light",
  isPanelless: false,
  backgroundImage: "",
  backgroundOpacity: 1,
  backgroundImageAttachment: "scroll",
  backgroundImageFit: "cover",
  cssVariables: {
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
    "--sjs-special-yellow-forecolor": "rgba(255, 255, 255, 1)"
  },
  headerView: "basic",
});

const currentDate = new Date();
const formattedDate = currentDate
  .toLocaleString("es-ES", { timeZone: "America/Argentina/Buenos_Aires" })
  .replace(",", "")
  .replace(/\//g, "-")
  .replace(/\s+/g, "_")
  .replace(/:/g, "-");

survey.onComplete.add((sender, options) => {
  const fileName = `ReporteInspeccion_${formattedDate}.pdf`;
  saveSurveyToPdf(fileName, survey);
});

survey.addNavigationItem({
  id: "deshabilit",
  title: "Save as PDF",
  action: function () {
    saveSurveyToPdf("Resultado_${formattedDate}.pdf", survey);
  },
});

survey.render("surveyContainer");

$("#surveyElement").Survey({ model: survey });


const SUPABASE_URL = "https://crudzqnpdfngqcamgabt.supabase.co";
const SUPABASE_API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNydWR6cW5wZGZuZ3FjYW1nYWJ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA4ODIxMjMsImV4cCI6MjA2NjQ1ODEyM30.aQ5uqsW0_tOBANRcHcqzDYHxnwbKzqw9kesXFxOEaCc";

function enviarADatabase(data) {
  let rawFecha = data.fecha || data["Fecha de Inspección"];
  let fechaISO = null;

  if (rawFecha && typeof rawFecha === "string") {
    let fechaNormalizada = rawFecha.replace(" ", "T");

    if (/^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}$/.test(fechaNormalizada)) {
      fechaNormalizada += ":00";
    }

    const parsedFecha = Date.parse(fechaNormalizada);
    if (!isNaN(parsedFecha)) {
      fechaISO = new Date(parsedFecha).toISOString();
    } else {
      console.warn("No se pudo parsear la fecha:", rawFecha);
    }
  }

  const payload = {
    nroSolicitud: data.nroSolicitud,
    referenciaExterna: data.referenciaExterna,
    fecha: fechaISO, // ✅ ahora este es seguro
    origen: data.origen,
    motivo: data.motivo,
    area: data.area,
    observaciones: data.observaciones,
    resultado: data.resultado,
    inspectores: data.inspectores,
    actas: data.actas,
    jsonCompleto: data
  };

  fetch(`${SUPABASE_URL}/rest/v1/inspecciones`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "apikey": SUPABASE_API_KEY,
      "Authorization": `Bearer ${SUPABASE_API_KEY}`,
      "Prefer": "return=representation"
    },
    body: JSON.stringify(payload)
  })
  .then(response => response.json())
  .then(data => {
    console.log("Datos enviados a Supabase:", data);
  })
  .catch(error => {
    console.error("Error al enviar a Supabase:", error);
  });
}



if (typeof survey !== 'undefined') {
  survey.onComplete.add(function (sender) {
    const data = sender.data;
    enviarADatabase(data);
  });
}
