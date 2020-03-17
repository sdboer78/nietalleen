<template>
  <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1eDxpR0IUErARS5g1slGMmBlHpyDrPEbl" class="maps-iframe" />
</template>

<script>
export default {
  components: {},
  head () {
    return {
      title: 'Home',
      meta: [
        { hid: 'homepage', name: 'description', content: 'Op deze plek willen we mensen die getroffen zijn door de gevolgen van het coronavirus helpen door hulpvragen en lokale organisaties actief met elkaar in contact te brengen.' }
      ]
    }
  }
}
</script>

<style type="text/css" lang="scss">
.maps-iframe {
  border: 0;
  height: 100%;
  width: 100%;
}
</style>
