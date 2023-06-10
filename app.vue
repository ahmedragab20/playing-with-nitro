<template>
  <div>
    <div v-if="surah">
      <div class="flex flex-col items-center justify-center h-screen">
        <div class="text-center">
          <template v-if="!loading">
            <div>{{ surah.name }} - {{ surah.number }}</div>
            <div>{{ surah.ayahs[1].text }}</div>
          </template>
        </div>
        <div>
          <UButton @click="getRandomSurah()" :loading="loading"> Change Surah </UButton>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
  const surah = ref();
  const surahNumber = ref(1);
  const loading = ref(false);
  const getSurah = async () => {
    try {
      loading.value = true;
      const s = useSurah(surahNumber.value);
      surah.value = await s.then((res) => res);
    } catch (error) {
      throw createError({
        message: 'Error getting surah',
        statusCode: 400,
      });
    } finally {
      loading.value = false;
    }
  };

  // create function to return random number between 1 and 114
  const getRandomSurah = () => {
    surahNumber.value = Math.floor(Math.random() * 114) + 1;
  };

  watch(
    () => surahNumber.value,
    (sNumber) => {
      console.log(`Surah Number: ${sNumber}`);

      getSurah();
    }
  );

  onMounted(() => {
    getSurah();
  });
</script>
