<script setup>
import { RouterLink } from "vue-router";
import { useAntrianStore } from "../store/store";
import { computed } from "vue";

const store = useAntrianStore();

const isNotNull = computed(() => {
  if (
    store.poliUmum.length > 0 &&
    store.poliGigi.length > 0 &&
    store.poliAnak.length > 0 &&
    store.poliTHT.length > 0
  ) {
    return true;
  }
  return false;
});
</script>

<template>
  <div>
    <main>
      <div class="text-center text-4xl text-center mb-2 mt-6 text-white">Antrian Saat Ini :</div>
      <div class="grid md:grid-cols-4 grid-cols-2">
        <div class="bg-yellow-700 m-3 text-white text-center rounded-lg p-3">
          <span class="material-symbols-outlined text-3xl"> stethoscope </span>
          <p class="text-2xl">Poli Umum</p>
          <p :class="[isNotNull ? 'text-5xl' : 'text-2xl mt-3 text-yellow-200']">
            {{ store.poliUmum.length > 0 ? store.poliUmum[store.poliUmum.length - 1].id : "Belum Ada" }}
          </p>
          <small v-if="isNotNull"
            >(A.N. {{ store.poliUmum[store.poliUmum.length - 1].name }})</small
          >
          <p class="mt-5">
            jumlah antrian : <span>{{ store.poliUmum.length }}</span>
          </p>
        </div>
         <div class="bg-yellow-700 m-3 text-white text-center rounded-lg p-3">
          <span class="material-symbols-outlined text-3xl"> dentistry </span>
          <p class="text-2xl">Poli Gigi</p>
          <p :class="[isNotNull ? 'text-5xl' : 'text-2xl mt-3 text-yellow-200']">
            {{ store.poliGigi.length > 0 ? store.poliGigi[store.poliGigi.length-1].id : "Belum Ada" }}
          </p>
          <small v-if="isNotNull">(A.N. {{ store.poliGigi[store.poliGigi.length-1].nama }})</small>
          <p class="mt-5">
            jumlah antrian : <span>{{ store.poliGigi.length }}</span>
          </p>
        </div>
        <div class="bg-yellow-700 m-3 text-white text-center rounded-lg p-3">
          <span class="material-symbols-outlined text-3xl"> oxygen_saturation </span>
          <p class="text-2xl">Poli THT</p>
          <p :class="[isNotNull ? 'text-5xl' : 'text-2xl mt-3 text-yellow-200']">
            {{ store.poliTHT.length > 0 ? store.poliTHT[store.poliTHT.length-1].id : "Belum Ada" }}
          </p>
          <small v-if="isNotNull">(A.N. {{ store.poliTHT[store.poliTHT.length-1].nama }})</small>
          <p class="mt-5">
            jumlah antrian : <span>{{ store.poliTHT.length }}</span>
          </p>
        </div>
        <div class="bg-yellow-700 m-3 text-white text-center rounded-lg p-3">
          <span class="material-symbols-outlined text-3xl"> child_care </span>
          <p class="text-2xl">Poli Anak</p>
          <p :class="[isNotNull ? 'text-5xl' : 'text-2xl mt-3 text-yellow-200']">
            {{ store.poliAnak.length > 0 ? store.poliAnak[store.poliAnak.length-1].id : "Belum Ada" }}
          </p>
          <small v-if="isNotNull">(A.N. {{ store.poliAnak[store.poliAnak.length-1].nama }})</small>
          <p class="mt-5">
            jumlah antrian : <span>{{ store.poliAnak.length }}</span>
          </p>
        </div>
      </div>
      <div class="text-gray-700 text-center mt-3" v-if="isNotNull">
        <p class="text-lg font-bold">
          Nomor antrian diatas silahkan masuk ruangan poli. Terima kasih
        </p>
      </div>
      <div class="text-gray-700 text-center mt-3" v-else>
        <p class="text-lg font-bold">Belum Ada Antrian</p>
      </div>
    </main>
    <footer class="grid justify-items-center mt-8">
      <RouterLink
        class="bg-blue-700 hover:bg-blue-900 text-white p-4 rounded-lg text-center"
        to="ambil-antrian"
      >
        <span class="material-symbols-outlined text-3xl"> login </span>
        <p>Ambil Antrian</p>
      </RouterLink>
    </footer>
  </div>
</template>

<style>
.material-symbols-outlined {
  font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 48;
}
</style>
