<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header class="grid justify-items-center mt-2">
    <div class="border-2 border-white-900 w-75 grid justify-items-center p-3 rounded-lg">
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
      <h1 class="text-2xl font-bold text-white text-center">Antrian Pasien Puskesmas</h1>
    </div>
  </header>

  <RouterView />
</template>
