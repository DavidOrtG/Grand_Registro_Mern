import { z } from "zod";

export const createPacienteSchema = z.object({
  cod_paciente: z.string({
    required_error: "Cod_paciente must be a positive integer",
  }),
  documento: z.object({
    tipo_doc: z.string({
      required_error: "Tipo_doc is required",
    }),
    num_doc: z.string({
      required_error: "Num_doc is required",
    }),
  }),
  nombres: z.string({
    required_error: "Nombres is required",
  }),
  apellidos: z.string({
    required_error: "Apellidos is required",
  }),
  fecha_nacimiento: z.string(new Date(), {
    required_error: "Fecha_nacimiento is required and must be a valid date",
  }),
  genero: z.string({
    required_error: "Genero is required",
  }),
  telefono: z.array(z.string({
    required_error: 'Telefono is required'
  })),
  ocupacion: z.string({
    required_error: "Ocupacion is required",
  }),
  direccion: z.string({
    required_error: "Direccion is required",
  }),
  correo_e: z.string({
    required_error: "Correo_e is required",
  }),
});