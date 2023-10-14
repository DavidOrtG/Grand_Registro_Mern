import { z } from "zod";

export const createHistoriaSchema = z.object({
  cod_historia: z.number({required_error: "cod_historia is required"}).int().positive({
    required_error: "Cod_historia must be a positive integer",
  }),
  paciente: z.string({required_error: "paciente is required"}).min(1, {
    required_error: "Paciente is required",
  }),/* 
  medico: z.string().min(1, {
    required_error: "Medico is required",
  }), */
  rif: z.object({
    dias: z.number({required_error: "dias is required"}).int().nonnegative({
      required_error: "Rif.dias must be a positive integer",
    }),
    meses: z.number({required_error: "meses is required"}).int().nonnegative({
      required_error: "Rif.meses must be a positive integer",
    }),
    anos: z.number({required_error: "anos is required"}).int().nonnegative({
      required_error: "Rif.anos must be a positive integer",
    }),
  },{required_error: "rif is required"}),
  /* fecha: z.date().min(new Date(), {
    required_error: "Fecha is required and must be a valid date",
  }), */
  motivos: z.string({required_error: "motivos is required"}).min(1, {
    required_error: "Motivos is required",
  }),
  antecedentes: z.string({required_error: "antecedentes is required"}),
  examen_externo: z.string({required_error: "examen_externo is required"}),
  lensometria: z.object({
    derecho: z.string({required_error: "lensometriaDerecho is required"}),
    izquierdo: z.string({required_error: "lensometriaIzquierdo is required"}),
  },{required_error: "lensometria is required"}),
  agudeza_visual: z.object({
    sin_correccion: z.object({
      lejana: z.object({
        derecho: z.string({required_error: "lejanaDerechoSinCorreccion  is required"}),
        izquierdo: z.string({required_error: "lejanaIzquierdoSinCorreccion  is required"}),
      },{required_error: "agudeza_visual.sin_correccion.lejana is required"}),
      proxima: z.object({
        derecho: z.string({required_error: "proximaDerechoSinCorreccion  is required"}),
        izquierdo: z.string({required_error: "proximaIzquierdoSinCorreccion  is required"}),
      },{required_error: "agudeza_visual.proxima is required"}),
    },{required_error: "agudeza_visual.sin_correccion is required"}),
    con_correccion: z.object({
      lejana: z.object({
        derecho: z.string({required_error: "lejanaDerechoConCorreccion  is required"}),
        izquierdo: z.string({required_error: "lejanaIzquierdoConCorreccion  is required"}),
      },{required_error: "agudeza_visual.con_correccion.lejana is required"}),
      proxima: z.object({
        derecho: z.string({required_error: "proximaDerechoConCorreccion  is required"}),
        izquierdo: z.string({required_error: "proximaIzquierdoConCorreccion  is required"}),
      },{required_error: "agudeza_visual.con_correccion.proxima is required"}),
    },{required_error: "agudeza_visual.con_correccion is required"}),
  },{required_error: "agudeza_visual is required"}),
  cover_test: z.object({
    derecho: z.string({required_error: "coverTestDerecho  is required"}),
    izquierdo: z.string({required_error: "coverTestIzquierdo  is required"}),
  },{required_error: "cover_test is required"}),
  versiones: z.string({required_error: "versiones is required"}),
  ducciones: z.object({
    derecho: z.string({required_error: "duccionesDerecho  is required"}),
    izquierdo: z.string({required_error: "duccionesIzquierdo  is required"}),
  },{required_error: "ducciones is required"}),
  ppc: z.string({required_error: "ppc is required"}),
  hirschberg: z.string({required_error: "hirschberg is required"}),
  fondo_ojo: z.object({
    derecho: z.string({required_error: "fondoOjoDerecho is required"}),
    izquierdo: z.string({required_error: "fondoOjoIzquierdo is required"}),
  },{required_error: "fondo_ojo is required"}),
  queratometria: z.object({
    derecho: z.string({required_error: "queratometriaDerecho is required"}),
    izquierdo: z.string({required_error: "queratometriaIzquierdo is required"}),
  },{required_error: "queratometria is required"}),
  retinoscopia: z.object({
    detalle: z.string({required_error: "retinoscopiaDetalle is required"}),
    derecho: z.string({required_error: "retinoscopiaDerecho is required"}),
    izquierdo: z.string({required_error: "retinoscopiaIzquierdo is required"}),
  },{required_error: "retinoscopia is required"}),
  subjetivo: z.object({
    derecho: z.string({required_error: "subjetivoDerecho is required"}),
    izquierdo: z.string({required_error: "subjetivoIzquierdo is required"}),
    add: z.string({required_error: "add is required"}),
    dp: z.string({required_error: "dp is required"}),
  },{required_error: "subjetivo is required"}),
  diagnostico: z.string({required_error: "diagnostico is required"}),
  tratamiento: z.string({required_error: "tratamiento is required"}),
  evolucion: z.string({required_error: "evolucion is required"}),
});