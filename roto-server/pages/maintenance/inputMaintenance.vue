<template>
<div class="bg-gray-300 min-h-screen w-widthContent ml-auto overflow-x-hidden">
    <section class="bg-gray-100 min-h-screen w-widthContentField m-auto mt-7 p-4 ">
        <NuxtLink to="/maintenance"
          class="flex items-center justify-between rounded-md w-28 px-4 py-2 bg-gray-700 hover:bg-gray-600 transition duration-200">
          <div>
            <font-awesome-icon :icon="['fas', 'arrow-left']" class="text-gray-200" />
          </div>
          <p class="font-medium text-sm text-gray-200">kembali</p>
        </NuxtLink> 
        <p class="text-center text-xl text-gray-700 font-semibold mt-4 mb-4">Input maintenance</p>
        <hr>

        <div v-if="inputMaintenance.suhu > 30 || inputMaintenance.kelembapan > 60 || inputMaintenance.ac === 'tidak baik' || inputMaintenance.ups === 'tidak baik' || inputMaintenance.baterai === 'tidak baik' || inputMaintenance.server === 'tidak baik' || inputMaintenance.jaringan === 'tidak baik'" class="transition-all duration-200 bg-red-400 px-5 py-2 text-center"><p class="text-md text-gray-900">Ruangan server dalam keadaan tidak baik, harap melakukan pemeriksaan</p></div>

    <ValidationObserver v-slot={invalid,valid} v-if="user.role === 'EDP' || user.role === 'PA' || user.role === 'Security'">
    <form @submit.prevent="[postInputMaintenance(),sendNotifyMaintenance()]" class="min-w-min mt-10" id="inputmaintenance">
        <div>
            <div class="grid grid-cols-2">
                <div class="mb-4">
                    <div class="has-tooltip">
                        <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-24">masukan suhu ruangan server</span>
                        <label for="suhu" class="block mb-2 text-sm">suhu</label>
                        <div class="flex flex-col w-72">
                            <ValidationProvider rules="required|numeric" v-slot={errors}>
                            <div class="flex items-center w-full">
                                <div class="flex">
                                    <input type="text" v-model="inputMaintenance.suhu" name="suhu" id="suhu" class="p-2 w-full rounded-l-lg bg-gray-300 outline-none">
                                    <input type="text" readonly class="rounded-r-lg py-2 w-16 bg-gray-200 cursor-default text-center text-gray-700 outline-none" value="℃">
                                </div>
                                <font-awesome-icon :icon="['fas', 'times-circle']" class="transition-all duration-200 text-red-500 ml-2 opacity-10" :class="{checktrue : inputMaintenance.suhu!=='' && !errors[0]}" v-if="inputMaintenance.suhu > 30"/>
                                <font-awesome-icon :icon="['fas', 'check-circle']" class="transition-all duration-200 text-green-500 ml-2 opacity-10" :class="{checktrue : inputMaintenance.suhu!=='' && !errors[0]}" v-else/>
                            </div>
                            <p class="text-xs mt-1 text-right text-red-500">{{ errors[0] }}</p>
                            </ValidationProvider>
                        </div>
                        <small v-if="inputMaintenance.suhu > 30" class="text-red-500">suhu ruangan tinggi</small>
                    </div>
                </div>
                <div class="mb-2" :class="[inputMaintenance.suhu !== '' ? 'incop' : 'decop']">
                    <div class="has-tooltip">
                        <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-36">masukan kelembapan ruangan server</span>
                        <label for="kelembapan" class="block mb-2 text-sm">kelembapan</label>
                        <div class="flex flex-col w-72">
                            <ValidationProvider rules="required|numeric" v-slot={errors}>
                            <div class="flex items-center">
                                <div class="flex">
                                    <input type="text" v-model="inputMaintenance.kelembapan" name="kelembapan" id="kelembapan" class="p-2 w-full rounded-l-lg outline-none bg-gray-300" :disabled="inputMaintenance.suhu === ''">
                                    <input type="text" readonly class="rounded-r-lg py-2 w-16 bg-gray-200 cursor-default text-center text-gray-700 outline-none" value="%">
                                </div>
                                <font-awesome-icon :icon="['fas', 'times-circle']" class="transition-all duration-200 text-red-500 ml-2 opacity-10" :class="{checktrue : inputMaintenance.kelembapan !=='' && !errors[0]}" v-if="inputMaintenance.kelembapan > 60"/>
                                <font-awesome-icon :icon="['fas', 'check-circle']" class="transition-all duration-200 text-green-500 ml-2 opacity-10" :class="{checktrue : inputMaintenance.kelembapan !=='' && !errors[0]}" v-else/>
                            </div>
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                            </ValidationProvider>
                        </div>
                        <small v-if="inputMaintenance.kelembapan > 60" class="text-red-500">kelembapan ruangan tinggi</small>
                    </div>
                </div>
                <div class="mb-2" :class="[inputMaintenance.kelembapan !== '' ? 'incop' : 'decop']">
                    <div class="has-tooltip">
                        <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-36">masukan kondisi suhu AC</span>
                        <label for="ac" class="block mb-2 text-sm">AC</label>
                        <div class="flex flex-col w-72">
                            <ValidationProvider rules="required" v-slot={errors}>
                            <div class="flex items-center">
                                <select name="ac" id="ac" class="p-2 w-full rounded-lg  bg-gray-300 outline-none uppercase" v-model="inputMaintenance.ac" :disabled="inputMaintenance.kelembapan === ''">
                                    <option value="" disabled>pilih kondisi</option>
                                    <option value="baik">BAIK</option>
                                    <option value="tidak baik">TIDAK BAIK</option>
                                </select>
                                <font-awesome-icon :icon="['fas', 'times-circle']" class="transition-all duration-200 text-red-500 ml-2 opacity-10" :class="{checktrue : inputMaintenance.ac !=='' && !errors[0]}" v-if="inputMaintenance.ac === 'tidak baik'"/>
                                <font-awesome-icon :icon="['fas', 'check-circle']" class="transition-all duration-200 text-green-500 ml-2 opacity-10" :class="{checktrue : inputMaintenance.ac !=='' && !errors[0]}" v-else/>
                            </div>
                            <textarea v-if="inputMaintenance.ac === 'tidak baik'" v-model="inputMaintenance.keteranganAc" name="acexplain" id="acexplain" cols="15" rows="3" class="w-full bg-gray-300 mt-1 p-2 outline-none rounded-lg" placeholder="note..."></textarea>
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                            </ValidationProvider>
                        </div>
                    </div>
                </div>
                <div class="mb-2" :class="[inputMaintenance.ac !== '' ? 'incop' : 'decop']">
                    <div class="has-tooltip">
                        <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-36">masukan kondisi UPS</span>
                        <label for="ups" class="block mb-2 text-sm">UPS</label>
                        <div class="flex flex-col w-72">
                            <ValidationProvider rules="required" v-slot={errors}>
                            <div class="flex items-center">
                                <select name="ups" id="ups" class="p-2 w-full rounded-lg bg-gray-300  outline-none uppercase" v-model="inputMaintenance.ups" :disabled="inputMaintenance.ac === ''">
                                    <option value="" disabled>pilih kondisi</option>
                                    <option value="baik">BAIK</option>
                                    <option value="tidak baik">TIDAK BAIK</option>
                                </select>
                                <font-awesome-icon :icon="['fas', 'times-circle']" class="transition-all duration-200 text-red-500 ml-2 opacity-10" :class="{checktrue : inputMaintenance.ups !=='' && !errors[0]}" v-if="inputMaintenance.ups === 'tidak baik'"/>
                                <font-awesome-icon :icon="['fas', 'check-circle']" class="transition-all duration-200 text-green-500 ml-2 opacity-10" :class="{checktrue : inputMaintenance.ups !=='' && !errors[0]}" v-else/>
                            </div>
                            <textarea v-if="inputMaintenance.ups === 'tidak baik'" v-model="inputMaintenance.keteranganUps" name="acexplain" id="acexplain" cols="15" rows="3" class="w-full bg-gray-300 mt-1 p-2 outline-none rounded-lg" placeholder="note..."></textarea>
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                            </ValidationProvider>
                        </div>
                    </div>
                </div>
                <div class="mb-2" :class="[inputMaintenance.ups !== '' ? 'incop' : 'decop']">
                    <div class="has-tooltip">
                        <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-36">masukan kondisi baterai</span>
                        <label for="baterai" class="block mb-2 text-sm">baterai</label>
                        <div class="flex flex-col w-72">
                            <ValidationProvider rules="required" v-slot={errors}>
                            <div class="flex items-center">
                                <select v-model="inputMaintenance.baterai" name="baterai" id="baterai" class="p-2 w-full rounded-lg bg-gray-300 outline-none uppercase" :disabled="inputMaintenance.ups === ''">
                                    <option value="" disabled>pilih kondisi</option>
                                    <option value="baik">BAIK</option>
                                    <option value="tidak baik">TIDAK BAIK</option>
                                </select>
                                <font-awesome-icon :icon="['fas', 'times-circle']" class="transition-all duration-200 text-red-500 ml-2 opacity-10" :class="{checktrue : inputMaintenance.baterai !=='' && !errors[0]}" v-if="inputMaintenance.baterai === 'tidak baik'"/>
                                <font-awesome-icon :icon="['fas', 'check-circle']" class="transition-all duration-200 text-green-500 ml-2 opacity-10" :class="{checktrue : inputMaintenance.baterai !== '' && !errors[0]}" v-else/>
                            </div>
                            <textarea v-if="inputMaintenance.baterai === 'tidak baik'" v-model="inputMaintenance.keteranganBaterai" name="acexplain" id="acexplain" cols="15" rows="3" class="w-full bg-gray-300 mt-1 p-2 outline-none rounded-lg" placeholder="note..."></textarea>
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                            </ValidationProvider>
                        </div>
                    </div>
                </div>
                <div class="mb-2" :class="[inputMaintenance.baterai !== '' ? 'incop' : 'decop']">
                    <div class="has-tooltip">
                        <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-20">masukan kondisi server</span>
                        <label for="server" class="block mb-2 text-sm">server</label>
                        <div class="flex flex-col w-72">
                            <ValidationProvider rules="required|alpha_spaces" v-slot={errors}>
                            <div class="flex items-center">
                                <select v-model="inputMaintenance.server" name="server" id="server" class="p-2 w-full rounded-lg bg-gray-300 outline-none uppercase" :disabled="inputMaintenance.baterai === ''">
                                    <option value="" disabled>pilih kondisi</option>
                                    <option value="baik">BAIK</option>
                                    <option value="tidak baik">TIDAK BAIK</option>
                                </select>
                                <font-awesome-icon :icon="['fas', 'times-circle']" class="transition-all duration-200 text-red-500 ml-2 opacity-10" :class="{checktrue : inputMaintenance.server !=='' && !errors[0]}" v-if="inputMaintenance.server === 'tidak baik'"/>
                                <font-awesome-icon :icon="['fas', 'check-circle']" class="transition-all duration-200 text-green-500 ml-2 opacity-10" :class="{checktrue : inputMaintenance.server !== '' && !errors[0]}" v-else/>
                            </div>
                            <textarea v-if="inputMaintenance.server === 'tidak baik'" v-model="inputMaintenance.keteranganServer" name="acexplain" id="acexplain" cols="15" rows="3" class="w-full bg-gray-300 mt-1 p-2 outline-none rounded-lg" placeholder="note..."></textarea>
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                            </ValidationProvider>
                        </div>
                    </div>
                </div>
                <div class="mb-2" :class="[inputMaintenance.server !== '' ? 'incop' : 'decop']">
                    <div class="has-tooltip">
                        <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-20">masukan kondisi jaringan</span>
                        <label for="jaringan" class="block mb-2 text-sm">jaringan</label>
                        <div class="flex flex-col w-72">
                            <ValidationProvider rules="required|alpha_spaces" v-slot={errors}>
                            <div class="flex items-center">
                                <select v-model="inputMaintenance.jaringan" name="jaringan" id="jaringan" class="p-2 w-full rounded-lg bg-gray-300 outline-none uppercase" :disabled="inputMaintenance.server === ''">
                                    <option value="" disabled>pilih kondisi</option>
                                    <option value="baik">BAIK</option>
                                    <option value="tidak baik">TIDAK BAIK</option>
                                </select>
                                <font-awesome-icon :icon="['fas', 'times-circle']" class="transition-all duration-200 text-red-500 ml-2 opacity-10" :class="{checktrue : inputMaintenance.jaringan !=='' && !errors[0]}" v-if="inputMaintenance.jaringan === 'tidak baik'"/>
                                <font-awesome-icon :icon="['fas', 'check-circle']" class="transition-all duration-200 text-green-500 ml-2 opacity-10" :class="{checktrue : inputMaintenance.jaringan !== '' && !errors[0]}" v-else/>
                            </div>
                            <textarea v-if="inputMaintenance.jaringan === 'tidak baik'" v-model="inputMaintenance.keteranganJaringan" name="acexplain" id="acexplain" cols="15" rows="3" class="w-full bg-gray-300 mt-1 p-2 outline-none rounded-lg" placeholder="note..."></textarea>
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                            </ValidationProvider>
                        </div>
                    </div>
                </div>
                <div class="mb-2" :class="[inputMaintenance.jaringan !== '' ? 'incop' : 'decop']">
                    <div class="has-tooltip">
                        <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-20">masukan keterangan</span>
                        <label for="keterangan" class="block mb-2 text-sm">keterangan</label>
                        <div class="flex flex-col w-72">
                            <textarea rows="4" form="inputmaintenance" type="text" v-model="inputMaintenance.keterangan" name="keterangan" id="keterangan" class="p-2 w-full rounded-lg bg-gray-300 outline-none uppercase" :disabled="inputMaintenance.jaringan === ''"></textarea>
                        </div>
                    </div>
                </div>
            </div>
            <button class="opacity-10 w-24 bg-gray-700 text-gray-200 py-2 rounded cursor-default mt-4 text-center transition duration-200 hover:bg-gray-600" :class="{activesubmit : valid}" type="submit" :disabled="invalid">simpan</button>
        </div>
    </form>
    </ValidationObserver>

             
    <!-- inputan untuk user teknisi AC -->
    <ValidationObserver v-slot={invalid,valid} v-else-if="user.role === 'Teknisi ac'">
        <form @submit.prevent="[postInputMaintenance(),sendNotifyMaintenance()]" class="min-w-min mt-10" id="inputmaintenance">
            <div>
                <div class="mb-2">
                    <div class="has-tooltip">
                        <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-36">masukan kondisi suhu AC</span>
                        <label for="ac" class="block mb-2 text-sm">AC</label>
                        <div class="flex flex-col w-72">
                            <ValidationProvider rules="required" v-slot={errors}>
                            <div class="flex items-center">
                                <select name="ac" id="ac" class="p-2 w-full rounded-lg  bg-gray-300 outline-none uppercase" v-model="inputMaintenance.ac">
                                    <option value="" disabled>pilih kondisi</option>
                                    <option value="baik">BAIK</option>
                                    <option value="tidak baik">TIDAK BAIK</option>
                                </select>
                                <font-awesome-icon :icon="['fas', 'times-circle']" class="transition-all duration-200 text-red-500 ml-2 opacity-10" :class="{checktrue : inputMaintenance.ac !=='' && !errors[0]}" v-if="inputMaintenance.ac === 'tidak baik'"/>
                                <font-awesome-icon :icon="['fas', 'check-circle']" class="transition-all duration-200 text-green-500 ml-2 opacity-10" :class="{checktrue : inputMaintenance.ac !=='' && !errors[0]}" v-else/>
                            </div>
                            <textarea v-if="inputMaintenance.ac === 'tidak baik'" v-model="inputMaintenance.keteranganAc" name="acexplain" id="acexplain" cols="15" rows="3" class="w-full bg-gray-300 mt-1 p-2 outline-none rounded-lg" placeholder="note..."></textarea>
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                            </ValidationProvider>
                        </div>
                    </div>
                </div>
            </div>
            <button class="opacity-10 w-24 bg-gray-700 text-gray-200 py-2 rounded cursor-default mt-4 text-center transition duration-200 hover:bg-gray-600" type="submit" :class="{activesubmit : valid}" :disabled="invalid">simpan</button>
        </form>
    </ValidationObserver>


    <!-- Teknisi listrik -->
    <ValidationObserver v-slot={invalid,valid} v-else-if="user.role === 'Teknisi listrik'">
        <form @submit.prevent="[postInputMaintenance(),sendNotifyMaintenance()]" class="min-w-min mt-10" id="inputmaintenance">
        <div>
            <div class="grid grid-cols-2">
                <div class="mb-2">
                    <div class="has-tooltip">
                        <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-36">masukan kondisi UPS</span>
                        <label for="ups" class="block mb-2 text-sm">UPS</label>
                        <div class="flex flex-col w-72">
                            <ValidationProvider rules="required" v-slot={errors}>
                            <div class="flex items-center">
                                <select name="ups" id="ups" class="p-2 w-full rounded-lg bg-gray-300  outline-none uppercase" v-model="inputMaintenance.ups">
                                    <option value="" disabled>pilih kondisi</option>
                                    <option value="baik">BAIK</option>
                                    <option value="tidak baik">TIDAK BAIK</option>
                                </select>
                                <font-awesome-icon :icon="['fas', 'times-circle']" class="transition-all duration-200 text-red-500 ml-2 opacity-10" :class="{checktrue : inputMaintenance.ups !=='' && !errors[0]}" v-if="inputMaintenance.ups === 'tidak baik'"/>
                                <font-awesome-icon :icon="['fas', 'check-circle']" class="transition-all duration-200 text-green-500 ml-2 opacity-10" :class="{checktrue : inputMaintenance.ups !=='' && !errors[0]}" v-else/>
                            </div>
                            <textarea v-if="inputMaintenance.ups === 'tidak baik'" v-model="inputMaintenance.keteranganUps" name="acexplain" id="acexplain" cols="15" rows="3" class="w-full bg-gray-300 mt-1 p-2 outline-none rounded-lg" placeholder="note..."></textarea>
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                            </ValidationProvider>
                        </div>
                    </div>
                </div>
                <div class="mb-2" :class="[inputMaintenance.ups !== '' ? 'incop' : 'decop']">
                    <div class="has-tooltip">
                        <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-36">masukan kondisi baterai</span>
                        <label for="baterai" class="block mb-2 text-sm">baterai</label>
                        <div class="flex flex-col w-72">
                            <ValidationProvider rules="required" v-slot={errors}>
                            <div class="flex items-center">
                                <select v-model="inputMaintenance.baterai" name="baterai" id="baterai" class="p-2 w-full rounded-lg bg-gray-300 outline-none uppercase" :disabled="inputMaintenance.ups === ''">
                                    <option value="" disabled>pilih kondisi</option>
                                    <option value="baik">BAIK</option>
                                    <option value="tidak baik">TIDAK BAIK</option>
                                </select>
                                <font-awesome-icon :icon="['fas', 'times-circle']" class="transition-all duration-200 text-red-500 ml-2 opacity-10" :class="{checktrue : inputMaintenance.baterai !=='' && !errors[0]}" v-if="inputMaintenance.baterai === 'tidak baik'"/>
                                <font-awesome-icon :icon="['fas', 'check-circle']" class="transition-all duration-200 text-green-500 ml-2 opacity-10" :class="{checktrue : inputMaintenance.baterai !== '' && !errors[0]}" v-else/>
                            </div>
                            <textarea v-if="inputMaintenance.baterai === 'tidak baik'" v-model="inputMaintenance.keteranganBaterai" name="acexplain" id="acexplain" cols="15" rows="3" class="w-full bg-gray-300 mt-1 p-2 outline-none rounded-lg" placeholder="note..."></textarea>
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                            </ValidationProvider>
                        </div>
                    </div>
                </div>
                <div class="mb-2" :class="[inputMaintenance.baterai !== '' ? 'incop' : 'decop']">
                    <div class="has-tooltip">
                        <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-20">masukan kondisi server</span>
                        <label for="server" class="block mb-2 text-sm">server</label>
                        <div class="flex flex-col w-72">
                            <ValidationProvider rules="required|alpha_spaces" v-slot={errors}>
                            <div class="flex items-center">
                                <select v-model="inputMaintenance.server" name="server" id="server" class="p-2 w-full rounded-lg bg-gray-300 outline-none uppercase" :disabled="inputMaintenance.baterai === ''">
                                    <option value="" disabled>pilih kondisi</option>
                                    <option value="baik">BAIK</option>
                                    <option value="tidak baik">TIDAK BAIK</option>
                                </select>
                                <font-awesome-icon :icon="['fas', 'times-circle']" class="transition-all duration-200 text-red-500 ml-2 opacity-10" :class="{checktrue : inputMaintenance.server !=='' && !errors[0]}" v-if="inputMaintenance.server === 'tidak baik'"/>
                                <font-awesome-icon :icon="['fas', 'check-circle']" class="transition-all duration-200 text-green-500 ml-2 opacity-10" :class="{checktrue : inputMaintenance.server !== '' && !errors[0]}" v-else/>
                            </div>
                            <textarea v-if="inputMaintenance.server === 'tidak baik'" v-model="inputMaintenance.keteranganServer" name="acexplain" id="acexplain" cols="15" rows="3" class="w-full bg-gray-300 mt-1 p-2 outline-none rounded-lg" placeholder="note..."></textarea>
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                            </ValidationProvider>
                        </div>
                    </div>
                </div>
                <div class="mb-2" :class="[inputMaintenance.server !== '' ? 'incop' : 'decop']">
                    <div class="has-tooltip">
                        <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-20">masukan keterangan</span>
                        <label for="keterangan" class="block mb-2 text-sm">keterangan</label>
                        <div class="flex flex-col w-72">
                            <textarea rows="4" form="inputmaintenance" type="text" v-model="inputMaintenance.keterangan" name="keterangan" id="keterangan" class="p-2 w-full rounded-lg bg-gray-300 outline-none uppercase" :disabled="inputMaintenance.server === ''"></textarea>
                        </div>
                    </div>
                </div>
                <button class="opacity-10 w-24 bg-gray-700 text-gray-200 py-2 rounded cursor-default mt-4 text-center transition duration-200 hover:bg-gray-600" :class="{activesubmit : valid}" type="submit" :disabled="invalid">simpan</button>
            </div>
        </div>
        </form>
    </ValidationObserver>

    <!-- Admin teknisi -->
    <ValidationObserver v-slot={invalid,valid} v-if="user.role === 'Admin teknisi'">
    <form @submit.prevent="[postInputMaintenance(),sendNotifyMaintenance()]" class="min-w-min mt-10" id="inputmaintenance">
        <div>
            <div class="grid grid-cols-2">
                <div class="mb-2">
                    <div class="has-tooltip">
                        <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-36">masukan kondisi suhu AC</span>
                        <label for="ac" class="block mb-2 text-sm">AC</label>
                        <div class="flex flex-col w-72">
                            <ValidationProvider rules="required" v-slot={errors}>
                            <div class="flex items-center">
                                <select name="ac" id="ac" class="p-2 w-full rounded-lg  bg-gray-300 outline-none uppercase" v-model="inputMaintenance.ac">
                                    <option value="" disabled>pilih kondisi</option>
                                    <option value="baik">BAIK</option>
                                    <option value="tidak baik">TIDAK BAIK</option>
                                </select>
                                <font-awesome-icon :icon="['fas', 'times-circle']" class="transition-all duration-200 text-red-500 ml-2 opacity-10" :class="{checktrue : inputMaintenance.ac !=='' && !errors[0]}" v-if="inputMaintenance.ac === 'tidak baik'"/>
                                <font-awesome-icon :icon="['fas', 'check-circle']" class="transition-all duration-200 text-green-500 ml-2 opacity-10" :class="{checktrue : inputMaintenance.ac !=='' && !errors[0]}" v-else/>
                            </div>
                            <textarea v-if="inputMaintenance.ac === 'tidak baik'" v-model="inputMaintenance.keteranganAc" name="acexplain" id="acexplain" cols="15" rows="3" class="w-full bg-gray-300 mt-1 p-2 outline-none rounded-lg" placeholder="note..."></textarea>
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                            </ValidationProvider>
                        </div>
                    </div>
                </div>
                <div class="mb-2" :class="[inputMaintenance.ac !== '' ? 'incop' : 'decop']">
                    <div class="has-tooltip">
                        <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-36">masukan kondisi UPS</span>
                        <label for="ups" class="block mb-2 text-sm">UPS</label>
                        <div class="flex flex-col w-72">
                            <ValidationProvider rules="required" v-slot={errors}>
                            <div class="flex items-center">
                                <select name="ups" id="ups" class="p-2 w-full rounded-lg bg-gray-300  outline-none uppercase" v-model="inputMaintenance.ups" :disabled="inputMaintenance.ac === ''">
                                    <option value="" disabled>pilih kondisi</option>
                                    <option value="baik">BAIK</option>
                                    <option value="tidak baik">TIDAK BAIK</option>
                                </select>
                                <font-awesome-icon :icon="['fas', 'times-circle']" class="transition-all duration-200 text-red-500 ml-2 opacity-10" :class="{checktrue : inputMaintenance.ups !=='' && !errors[0]}" v-if="inputMaintenance.ups === 'tidak baik'"/>
                                <font-awesome-icon :icon="['fas', 'check-circle']" class="transition-all duration-200 text-green-500 ml-2 opacity-10" :class="{checktrue : inputMaintenance.ups !=='' && !errors[0]}" v-else/>
                            </div>
                            <textarea v-if="inputMaintenance.ups === 'tidak baik'" v-model="inputMaintenance.keteranganUps" name="acexplain" id="acexplain" cols="15" rows="3" class="w-full bg-gray-300 mt-1 p-2 outline-none rounded-lg" placeholder="note..."></textarea>
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                            </ValidationProvider>
                        </div>
                    </div>
                </div>
                <div class="mb-2" :class="[inputMaintenance.ups !== '' ? 'incop' : 'decop']">
                    <div class="has-tooltip">
                        <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-36">masukan kondisi baterai</span>
                        <label for="baterai" class="block mb-2 text-sm">baterai</label>
                        <div class="flex flex-col w-72">
                            <ValidationProvider rules="required" v-slot={errors}>
                            <div class="flex items-center">
                                <select v-model="inputMaintenance.baterai" name="baterai" id="baterai" class="p-2 w-full rounded-lg bg-gray-300 outline-none uppercase" :disabled="inputMaintenance.ups === ''">
                                    <option value="" disabled>pilih kondisi</option>
                                    <option value="baik">BAIK</option>
                                    <option value="tidak baik">TIDAK BAIK</option>
                                </select>
                                <font-awesome-icon :icon="['fas', 'times-circle']" class="transition-all duration-200 text-red-500 ml-2 opacity-10" :class="{checktrue : inputMaintenance.baterai !=='' && !errors[0]}" v-if="inputMaintenance.baterai === 'tidak baik'"/>
                                <font-awesome-icon :icon="['fas', 'check-circle']" class="transition-all duration-200 text-green-500 ml-2 opacity-10" :class="{checktrue : inputMaintenance.baterai !== '' && !errors[0]}" v-else/>
                            </div>
                            <textarea v-if="inputMaintenance.baterai === 'tidak baik'" v-model="inputMaintenance.keteranganBaterai" name="acexplain" id="acexplain" cols="15" rows="3" class="w-full bg-gray-300 mt-1 p-2 outline-none rounded-lg" placeholder="note..."></textarea>
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                            </ValidationProvider>
                        </div>
                    </div>
                </div>
                <div class="mb-2" :class="[inputMaintenance.baterai !== '' ? 'incop' : 'decop']">
                    <div class="has-tooltip">
                        <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-20">masukan kondisi server</span>
                        <label for="server" class="block mb-2 text-sm">server</label>
                        <div class="flex flex-col w-72">
                            <ValidationProvider rules="required|alpha_spaces" v-slot={errors}>
                            <div class="flex items-center">
                                <select v-model="inputMaintenance.server" name="server" id="server" class="p-2 w-full rounded-lg bg-gray-300 outline-none uppercase" :disabled="inputMaintenance.baterai === ''">
                                    <option value="" disabled>pilih kondisi</option>
                                    <option value="baik">BAIK</option>
                                    <option value="tidak baik">TIDAK BAIK</option>
                                </select>
                                <font-awesome-icon :icon="['fas', 'times-circle']" class="transition-all duration-200 text-red-500 ml-2 opacity-10" :class="{checktrue : inputMaintenance.server !=='' && !errors[0]}" v-if="inputMaintenance.server === 'tidak baik'"/>
                                <font-awesome-icon :icon="['fas', 'check-circle']" class="transition-all duration-200 text-green-500 ml-2 opacity-10" :class="{checktrue : inputMaintenance.server !== '' && !errors[0]}" v-else/>
                            </div>
                            <textarea v-if="inputMaintenance.server === 'tidak baik'" v-model="inputMaintenance.keteranganServer" name="acexplain" id="acexplain" cols="15" rows="3" class="w-full bg-gray-300 mt-1 p-2 outline-none rounded-lg" placeholder="note..."></textarea>
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                            </ValidationProvider>
                        </div>
                    </div>
                </div>
                <div class="mb-2" :class="[inputMaintenance.server !== '' ? 'incop' : 'decop']">
                    <div class="has-tooltip">
                        <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-20">masukan keterangan</span>
                        <label for="keterangan" class="block mb-2 text-sm">keterangan</label>
                        <div class="flex flex-col w-72">
                            <textarea rows="4" form="inputmaintenance" type="text" v-model="inputMaintenance.keterangan" name="keterangan" id="keterangan" class="p-2 w-full rounded-lg bg-gray-300 outline-none uppercase" :disabled="inputMaintenance.server === ''"></textarea>
                        </div>
                    </div>
                </div>
            </div>
            <button class="opacity-10 w-24 bg-gray-700 text-gray-200 py-2 rounded cursor-default mt-4 text-center transition duration-200 hover:bg-gray-600" :class="{activesubmit : valid}" type="submit" :disabled="invalid">simpan</button>
        </div>
    </form>
    </ValidationObserver>
</section>
</div>
</template>

<script>

import { ValidationObserver, ValidationProvider } from "vee-validate";
require('dotenv').config()

export default {
    middleware:"isAuthenticated",
    components: {
        ValidationObserver,
        ValidationProvider
    },
    data(){
        return{
            inputMaintenance:{
                tanggal:'',
                suhu:'',
                kelembapan:'',
                ac:'',
                ups:'',
                baterai:'',
                server:'',
                jaringan:'',
                keterangan:'',
                keteranganAc:'',
                keteranganUps:'',
                keteranganBaterai:'',
                keteranganServer:'',
                keteranganJaringan:'',
            },
            disabled:true,
            tokentelegram:process.env.TokenTelegram,
            chatId:process.env.ChatId,
        }
    },
    computed: {
        loggedIn() {
            return this.$auth.loggedIn
        },
        user() {
            return this.$auth.user
        },
        validated(){
            if(this.inputMaintenance.suhu !== ''){
                return true
            }
        }
    },
    methods:{
        async postInputMaintenance(){
            const resp = await this.$axios.post('/inputmaintenance',{
                iduser: this.$auth.user.id,
                nama:this.$auth.user.nama,
                lokasiServer:this.$auth.user.lokasi,
                tanggal:this.inputMaintenance.tanggal,
                suhu: this.inputMaintenance.suhu,
                kelembapan: this.inputMaintenance.kelembapan,
                ac: this.inputMaintenance.ac,
                ups: this.inputMaintenance.ups,
                baterai: this.inputMaintenance.baterai,
                network: this.inputMaintenance.network,
                server: this.inputMaintenance.server,
                jaringan:this.inputMaintenance.jaringan,
                keterangan: this.inputMaintenance.keterangan,
                keteranganAc: this.inputMaintenance.keteranganAc,
                keteranganUps: this.inputMaintenance.keteranganUps,
                keteranganBaterai: this.inputMaintenance.keteranganBaterai,
                keteranganServer: this.inputMaintenance.keteranganServer,
                keteranganJaringan: this.inputMaintenance.keteranganJaringan,
            })
                if(resp){
                    swal('data berhasil ditambahkan',{icon:'success'})
                    this.$router.push('/maintenance')
                } else {
                    swal('Error','data gagal di input',{icon:'error'})
                }
        },
        async sendNotifyMaintenance(){
            if(this.inputMaintenance.suhu > 30 && this.$auth.user.role === 'Security'){
                const flashMessage = `suhu ruangan server : ${this.inputMaintenance.suhu}℃. suhu terlalu tinggi. harap melakukan pemeriksaan di ${this.user.lokasi}`
                const resp = await this.$axios.post(`https://api.telegram.org/bot${this.tokentelegram}/sendMessage?chat_id=${this.chatId}&parse_mode=Markdown&text=${flashMessage}`)
                if(resp){
                    swal('pesan di kirim ke EDP dan PA',{icon:'success'})
                    this.$router.push('/maintenance')
                }
                else{ 
                    swal('data tidak terkirim',{icon:'error'})
                }
            }
            if(this.inputMaintenance.kelembapan > 60 && this.$auth.user.role === 'Security'){
                const flashMessage = `kelembapan ruangan server : ${this.inputMaintenance.kelembapan}%. kelembapan terlalu tinggi. harap melakukan pemeriksaan ${this.user.lokasi}`
                const resp = await this.$axios.post(`https://api.telegram.org/bot${this.tokentelegram}/sendMessage?chat_id=${this.chatId}&parse_mode=Markdown&text=${flashMessage}`)
                if(resp){
                    swal('pesan di kirim ke EDP dan PA',{icon:'success'})
                    this.$router.push('/maintenance')
                }
                else{ 
                    swal('data tidak terkirim',{icon:'error'})
                }
            }
            if(this.inputMaintenance.ac === 'tidak baik' && this.$auth.user.role === "Security" || this.inputMaintenance.ac === 'tidak baik' && this.$auth.user.role === "Admin teknisi" || this.inputMaintenance.ac === 'tidak baik' && this.$auth.user.role === "Admin teknisi" || this.inputMaintenance.ac === 'tidak baik' && this.$auth.user.role === "Teknisi listrik" || this.inputMaintenance.ac === 'tidak baik' && this.$auth.user.role === "Teknisi ac"){
                const flashMessage = `AC sedang bermasalah, harap melakukan pemeriksaan. note : ${this.inputMaintenance.keteranganAc} di ${this.user.lokasi}`
                const resp = await this.$axios.post(`https://api.telegram.org/bot${this.tokentelegram}/sendMessage?chat_id=${this.chatId}&parse_mode=Markdown&text=${flashMessage}`)
                if(resp){
                    swal('pesan di kirim ke EDP dan PA',{icon:'success'})
                    this.$router.push('/maintenance')
                }
                else{ 
                    swal('data tidak terkirim',{icon:'error'})
                }
            }
            if(this.inputMaintenance.ups === 'tidak baik' && this.$auth.user.role === "Security" || this.inputMaintenance.ups === 'tidak baik' && this.$auth.user.role === "Admin teknisi" || this.inputMaintenance.ups === 'tidak baik' && this.$auth.user.role === "Teknisi listrik"){
                const flashMessage = `UPS sedang bermasalah, harap melakukan pemeriksaan. note : ${this.inputMaintenance.keteranganUps} di ${this.user.lokasi}`
                const resp = await this.$axios.post(`https://api.telegram.org/bot${this.tokentelegram}/sendMessage?chat_id=${this.chatId}&parse_mode=Markdown&text=${flashMessage}`)
                if(resp){
                    swal('pesan di kirim ke EDP dan PA',{icon:'success'})
                    this.$router.push('/maintenance')
                }
                else{ 
                    swal('data tidak terkirim',{icon:'error'})
                }
            }
            if(this.inputMaintenance.baterai === 'tidak baik' && this.$auth.user.role === "Security" || this.inputMaintenance.baterai === 'tidak baik' && this.$auth.user.role === "Admin teknisi" || this.inputMaintenance.baterai === 'tidak baik' && this.$auth.user.role === "Teknisi listrik"){
                const flashMessage = `Baterai sedang bermasalah, harap melakukan pemeriksaan. note : ${this.inputMaintenance.keteranganBaterai} di ${this.user.lokasi}`
                const resp = await this.$axios.post(`https://api.telegram.org/bot${this.tokentelegram}/sendMessage?chat_id=${this.chatId}&parse_mode=Markdown&text=${flashMessage}`)
                if(resp){
                    swal('pesan di kirim ke EDP dan PA',{icon:'success'})
                    this.$router.push('/maintenance')
                }
                else{ 
                    swal('data tidak terkirim',{icon:'error'})
                }
            }
            if(this.inputMaintenance.server === 'tidak baik' && this.$auth.user.role === "Security" || this.inputMaintenance.server === 'tidak baik' && this.$auth.user.role === "Admin teknisi" || this.inputMaintenance.server === 'tidak baik' && this.$auth.user.role === "Teknisi listrik"){
                const flashMessage = `Server sedang bermasalah, harap melakukan pemeriksaan. note : ${this.inputMaintenance.keteranganServer} di ${this.user.lokasi}`
                const resp = await this.$axios.post(`https://api.telegram.org/bot${this.tokentelegram}/sendMessage?chat_id=${this.chatId}&parse_mode=Markdown&text=${flashMessage}`)
                if(resp){
                    swal('pesan di kirim ke EDP dan PA',{icon:'success'})
                    this.$router.push('/maintenance')
                }
                else{ 
                    swal('data tidak terkirim',{icon:'error'})
                }
            }
            if(this.inputMaintenance.jaringan === 'tidak baik' && this.$auth.user.role === "Security" || this.inputMaintenance.jaringan === 'tidak baik' && this.$auth.user.role === "Admin teknisi" || this.inputMaintenance.jaringan === 'tidak baik' && this.$auth.user.role === "Teknisi listrik"){
                const flashMessage = `Server sedang bermasalah, harap melakukan pemeriksaan. note : ${this.inputMaintenance.keteranganServer} di ${this.user.lokasi}`
                const resp = await this.$axios.post(`https://api.telegram.org/bot${this.tokentelegram}/sendMessage?chat_id=${this.chatId}&parse_mode=Markdown&text=${flashMessage}`)
                if(resp){
                    swal('pesan di kirim ke EDP dan PA',{icon:'success'})
                    this.$router.push('/maintenance')
                }
                else{ 
                    swal('data tidak terkirim',{icon:'error'})
                }
            }
        }
    }, 
    mounted(){
        this.inputMaintenance.tanggal = this.$moment().format('YYYY-MM-DD HH:mm:ss')
    }
}
</script>

<style>
.checktrue{
    opacity:1;
}
.activesubmit {
    background-color: rgb(55, 65, 81);
    color:whitesmoke;
    cursor:pointer;
    opacity:1;
    transition: all 0.5s;
    width:100px;
}
.redring:focus {
    outline: 1px solid rgb(238, 56, 56);
}
.bluering {
    outline: 1px solid rgb(56, 135, 238);
}
.incop{
    opacity:1,
}
.decop{
    opacity: 0.1;
}
</style>