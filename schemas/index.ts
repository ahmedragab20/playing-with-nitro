import { z } from 'zod';

export const Ayah = z.object({
  number: z.number(),
  text: z.string(),
  numberInSurah: z.number(),
  juz: z.number(),
  manzil: z.number(),
  page: z.number(),
  ruku: z.number(),
  hizbQuarter: z.number(),
  sajda: z.boolean(),
});
export const Surah = z.object({
  number: z.number(),
  name: z.string(),
  englishName: z.string(),
  englishNameTranslation: z.string(),
  numberOfAyahs: z.number(),
  revelationType: z.string(),
  ayahs: z.array(Ayah),
});

export function Response<T extends z.ZodTypeAny>(schema: T) {
  return z.object({
    status: z.number(),
    message: z.string(),
    data: schema,
  });
}
