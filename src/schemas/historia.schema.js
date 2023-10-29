import { z } from "zod";

export const createHistoriaSchema = z.object({
  cod_historia: z.number().int().positive({
    required_error: "Cod_historia must be a positive integer",
  }),
  paciente: z.string().min(1, {
    required_error: "Paciente is required",
  }),
  medico: z.string().min(1, {
    required_error: "Medico is required",
  }),
  rif: z.object({
    dias: z.number().int().positive({
      required_error: "Rif.dias must be a positive integer",
    }),
    meses: z.number().int().positive({
      required_error: "Rif.meses must be a positive integer",
    }),
    anos: z.number().int().positive({
      required_error: "Rif.anos must be a positive integer",
    }),
  }),
  fecha: z.string(new Date(), {
    required_error: "Fecha is required and must be a valid date",
  }),
  motivos: z.string().min(1, {
    required_error: "Motivos is required",
  }),
  antecedentes: z.string(),
  examen_externo: z.string(),
  lensometria: z.object({
    derecho: z.string(),
    izquierdo: z.string(),
  }),
  agudeza_visual: z.object({
    sin_correccion: z.object({
      lejana: z.object({
        derecho: z.string(),
        izquierdo: z.string(),
      }),
      proxima: z.object({
        derecho: z.string(),
        izquierdo: z.string(),
      }),
    }),
    con_correccion: z.object({
      lejana: z.object({
        derecho: z.string(),
        izquierdo: z.string(),
      }),
      proxima: z.object({
        derecho: z.string(),
        izquierdo: z.string(),
      }),
    }),
  }),
  cover_test: z.object({
    derecho: z.string(),
    izquierdo: z.string(),
  }),
  versiones: z.string(),
  ducciones: z.object({
    derecho: z.string(),
    izquierdo: z.string(),
  }),
  ppc: z.string(),
  hirschberg: z.string(),
  fondo_ojo: z.object({
    derecho: z.string(),
    izquierdo: z.string(),
  }),
  queratometria: z.object({
    derecho: z.string(),
    izquierdo: z.string(),
  }),
  retinoscopia: z.object({
    detalle: z.string(),
    derecho: z.string(),
    izquierdo: z.string(),
  }),
  subjetivo: z.object({
    derecho: z.string(),
    izquierdo: z.string(),
    add: z.string(),
    dp: z.string(),
  }),
  diagnostico: z.string(),
  tratamiento: z.string(),
  evolucion: z.string(),
});