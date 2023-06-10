export default async (surahNumber: number) => {
  const surah = await useFetch('/api/surah/' + surahNumber).then((res) => {
    if (!res)
      throw createError({
        statusCode: 404,
        message: 'Surah not found',
      });

    return res.data.value;
  });

  return surah;
};
