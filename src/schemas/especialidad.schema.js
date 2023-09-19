import { z } from "zod";

export const createEspecialidadSchema = z.object({
  cod_esp: z.string({
    required_error: "Cod_esp is required",
  }),
  nombre: z.string({
    required_error: "Nombre is required",
  }),
});

