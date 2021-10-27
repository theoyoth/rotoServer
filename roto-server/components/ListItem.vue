<template>
<div>
    <HeaderListItem :server="server.nama" v-if="server"/>
    <HeaderListItem :rak="rak.nama" v-if="rak"/>
    <HeaderListItem :ups="ups.nama" v-if="ups"/>
    <HeaderListItem :baterai="baterai.nama" v-if="baterai"/>
    <HeaderListItem :ac="ac.nama" v-if="ac"/>
    <HeaderListItem :cctv="cctv.nama" v-if="cctv"/>
    <HeaderListItem :network="network.nama" v-if="network"/>
    <HeaderListItem :apar="apar.nama" v-if="apar"/>
    <HeaderListItem :monitor="monitor.nama" v-if="monitor"/>
    <HeaderListItem :keyboard="keyboard.nama" v-if="keyboard"/>
    <HeaderListItem :mouse="mouse.nama" v-if="mouse"/>
    <HeaderListItem :nas="nas.nama" v-if="nas"/>
    <HeaderListItem :genset="genset.nama" v-if="genset"/>
</div>
</template>

<script>
export default {
    props:['monitor','server','ups','baterai','rak','ac','cctv','network','apar','monitor','keyboard','mouse','nas','genset','servers','raks','upss','baterais','acs','cctvs','networks','apars','monitors','mouses','keyboards','nass','gensets'],
}
</script>
