import { defineStore } from 'pinia'

export const useAntrianStore = defineStore('antrian', () => {
    const poliUmum = [];
    const poliGigi = [];
    const poliAnak = [];
    const poliTHT = [];

    let jmlUmum = 0;
    let jmlGigi = 0;
    let jmlAnak = 0;
    let jmlTHT = 0;

    return { poliUmum, poliGigi, poliAnak, poliTHT, jmlUmum, jmlGigi, jmlAnak, jmlTHT }
})
