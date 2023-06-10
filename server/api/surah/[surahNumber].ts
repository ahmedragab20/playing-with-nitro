import { ApiResponse } from '../../../types';
import { Surah } from './../../../types/index.d';

export default defineEventHandler(async (event) => {
  const { surahNumber } = event.context.params!;

  const config = useRuntimeConfig();

  const result: ApiResponse<Surah> = await $fetch(`/surah/${surahNumber}`, {
    baseURL: config.public.apiBase,
  });

  return result;
});
