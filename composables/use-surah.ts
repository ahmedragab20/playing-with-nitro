import { Response, Surah } from '@/schemas';
export default async (surahNumber: number) => {
  const surah = await useFetch(`/api/surah/${surahNumber}`, {
    transform: (data) => Response(Surah).parse(data),
  }).then((res) => {
    if (!res) {
      throw createError({
        statusCode: 404,
        message: 'Surah not found',
      });
    }
    return res.data.value;
  });

  if (surah?.status?.toLocaleLowerCase() === 'ok') {
    return surah.data;
  } else {
    throw createError({
      statusCode: 500,
      message: 'Could not fetch surah',
    });
  }
};
