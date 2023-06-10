import { Response, Surah } from '@/schemas';
export default async (surahNumber: number) => {
  const surah = await useFetch(`/api/surah/${surahNumber}`, {
    transform: (data) => {
      console.log({ data });

      return Response(Surah).parse(data);
    },
  }).then((res) => {
    if (!res) {
      throw createError({
        statusCode: 404,
        message: 'Surah not found',
      });
    }

    console.log(res);

    return res.data.value;
  });

  console.log(surah);

  return surah?.data;
};
