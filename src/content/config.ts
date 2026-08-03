import { defineCollection, z } from 'astro:content';

const arquivo = defineCollection({
  type: 'content',
  schema: z.object({
    titulo: z.string(),
    subtitulo: z.string().optional(),
    // o eixo editorial: quem fez (criadores) ou quem inspirou (musas/mecenas)
    eixo: z.enum(['quem-fez', 'quem-inspirou']),
    categoria: z.string().default('Design'),
    data: z.date(),
    periodo: z.string().optional(), // ex: "1903–1999" ou "1933"
    leitura: z.string().optional(), // ex: "6 min"
    rascunho: z.boolean().default(false),
  }),
});

export const collections = { arquivo };
