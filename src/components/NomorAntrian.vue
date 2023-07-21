<template>
  <div class="grid justify-items-center">
    <div class="border-2 border-white-900 w-75 grid justify-items-center p-5 rounded-lg">
      <p class="text-lg text-white text-neutral-900">Nomor Antrian Anda :</p>
      <p class="text-2xl text-white text-neutral-900 font-bold">{{ nomorAntrian.nomorAntrian }}</p>
      <div class="flex mt-5">
        <button
          class="bg-blue-700 hover:bg-blue-900 text-white px-3 py-2 rounded-lg mr-2"
          @click="$emit('back')"
        >
          Ambil Antrian Lagi
        </button>
        <button
          class="bg-blue-700 hover:bg-blue-900 text-white px-3 py-2 rounded-lg"
          @click="$emit('print')"
        >
          Cetak
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const nomorAntrian = defineProps({ nomorAntrian: String });
</script>
