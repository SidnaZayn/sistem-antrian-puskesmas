<template>
  <div class="mt-5">
    <p class="text-center text-3xl font-bold">AMBIL ANTRIAN</p>
    <div class="grid justify-items-center p-3">
      <Form @submit="ambilAntrian" class="w-6/12">
        <div class="mb-3">
          <div class="flex justify-between">
            <label for="name" class="block mb-1 font-bold text-gray-600">Nama</label>
            <span class="pt-1 text-sm text-red-500">
              <ErrorMessage name="name" />
            </span>
          </div>
          <Field
            type="text"
            id="name"
            name="name"
            placeholder="--isi nama--"
            class="border border-gray-300 shadow p-3 w-full rounded"
            :rules="validate"
          />
        </div>
        <div class="mb-3 flex">
          <div class="w-full mr-3">
            <div class="flex justify-between">
              <label for="poli" class="block mb-1 font-bold text-gray-600">Pilih Poli</label>
              <span class="pt-1 text-sm text-red-500">
                <ErrorMessage name="poli" />
              </span>
            </div>
            <Field
              name="poli"
              id="poli"
              class="border border-gray-300 shadow p-3 rounded w-full"
              as="select"
              :rules="validate"
            >
              <option value="" selected>Pilih Poli</option>
              <option value="1">Poli Umum</option>
              <option value="2">Poli Gigi</option>
              <option value="3">Poli Anak</option>
              <option value="4">Poli THT</option>
            </Field>
          </div>
          <div class="w-full">
            <div class="flex justify-between">
              <label for="gender" class="block mb-1 font-bold text-gray-600">Gender</label>
              <span class="pt-1 text-sm text-red-500">
                <ErrorMessage name="gender" />
              </span>
            </div>
            <Field
              name="gender"
              id="gender"
              class="border border-gray-300 shadow p-3 rounded w-full"
              as="select"
              :rules="validate"
            >
              <option value="" selected>Pilih Gender</option>
              <option value="L">Pria</option>
              <option value="P">Wanita</option>
            </Field>
          </div>
        </div>
        <div class="grid justify-items-center mt-5">
            <div class="flex">  
                <button class="bg-blue-700 hover:bg-blue-900 text-white p-4 rounded-lg text-center mr-2">
                  Ambil Antrian
                </button>
                <RouterLink class="bg-blue-700 hover:bg-blue-900 text-white p-4 rounded-lg text-center" to="/">
                  Kembali
                </RouterLink>
            </div>
        </div>
      </Form>
    </div>
  </div>
</template>

<script setup>
import { Form, Field, ErrorMessage } from "vee-validate";
import { useAntrianStore } from "../store/store";
import { RouterLink } from "vue-router";

const store = useAntrianStore();
const ambilAntrian = (value) => {
  const { poli, ...pasien } = value;
  if (poli == 1) {
    const id = `A${store.jmlUmum}`;
    store.poliUmum.push({ ...pasien, id: id });
    store.jmlUmum++;
    console.log(store.poliUmum);
  }
  if (poli == 2) {
    const id = `B${store.jmlGigi}`;
    store.poliGigi.push({ ...pasien, id: id });
    store.jmlGigi++;
    console.log(store.poliGigi);
  }
  if (poli == 3) {
    const id = `C${store.jmlAnak}`;
    store.poliAnak.push({ ...pasien, id: id });
    store.jmlAnak++;
    console.log(store.poliAnak);
  }
  if (poli == 4) {
    const id = `D${store.jmlTHT}`;
    store.poliTHT.push({ ...pasien, id: id });
    store.jmlTHT++;
    console.log(store.poliTHT);
  }
};

const validate = (value) => {
  // if the field is empty
  if (!value) {
    return "This field is required";
  }
  return true;
};
</script>
