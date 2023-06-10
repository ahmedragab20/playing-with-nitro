export default defineEventHandler(async (event) => {
  const { surahNumber } = event.context.params!;

  const config = useRuntimeConfig();

  const result = await $fetch(`/surah/${surahNumber}`, {
    baseURL: config.public.apiBase,
  });

  return result;
});
