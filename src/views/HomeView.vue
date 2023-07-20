<script setup>
import { RouterLink } from "vue-router";
import { useAntrianStore } from "../store/store";
import { computed } from "vue";

const store = useAntrianStore();

const isNotNull = computed(()=>{
  store.poliUmum && store.poliGigi && store.poliAnak && store.poliTHT
})
</script>

<template>
  <div>
    <main>
      <div class="text-center text-4xl text-center mb-2 mt-6 text-white">Antrian Saat Ini :</div>
      <div class="grid md:grid-cols-4 grid-cols-2" v-if="isNotNull">
        <div class="bg-yellow-700 m-3 text-white text-center rounded-lg p-3">
          <span class="material-symbols-outlined text-3xl"> stethoscope </span>
          <p class="text-2xl">Poli Umum</p>
          <p class="text-5xl">{{ store.poliUmum[0].id ? store.poliUmum[0].id : 0 }}</p>
          <small>(A.N. {{ store.poliUmum[0].nama ? store.poliUmum[0].nama : 0 }})</small>
          <p class="mt-5">
            jumlah antrian : <span>{{ store.poliUmum.length }}</span>
          </p>
        </div>
        <div class="bg-yellow-700 m-3 text-white text-center rounded-lg p-3">
          <span class="material-symbols-outlined text-3xl"> dentistry </span>
          <p class="text-2xl">Poli Gigi</p>
          <p class="text-5xl">{{ store.poliGigi[0].id }}</p>
          <small>(A.N. {{ store.poliGigi[0].nama }})</small>
          <p class="mt-5">
            jumlah antrian : <span>{{ store.poliGigi.length }}</span>
          </p>
        </div>
        <div class="bg-yellow-700 m-3 text-white text-center rounded-lg p-3">
          <span class="material-symbols-outlined text-3xl"> oxygen_saturation </span>
          <p class="text-2xl">Poli THT</p>
          <p class="text-5xl">{{ store.poliTHT[0].id }}</p>
          <small>(A.N. {{ store.poliTHT[0].nama }})</small>
          <p class="mt-5">
            jumlah antrian : <span>{{ store.poliTHT.length }}</span>
          </p>
        </div>
        <div class="bg-yellow-700 m-3 text-white text-center rounded-lg p-3">
          <span class="material-symbols-outlined text-3xl"> child_care </span>
          <p class="text-2xl">Poli Anak</p>
          <p class="text-5xl">{{ store.poliAnak[0].id }}</p>
          <small>(A.N. {{ store.poliAnak[0].nama }})</small>
          <p class="mt-5">
            jumlah antrian : <span>{{ store.poliAnak.length }}</span>
          </p>
        </div>
      </div>
      <div class="text-gray-700 text-center mt-3">
        <p class="text-lg font-bold">
          Nomor antrian diatas silahkan masuk ruangan poli. Terima kasih
        </p>
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
