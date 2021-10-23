
<template>
  <div class="">
    <client-only>
      <div class="block text-center s-728x90" v-if="$device.isDesktopOrTablet">
        <a href="https://www.vultr.com/?ref=6872180"
          ><img
            src="https://www.vultr.com/media/banners/banner_728x90.png"
            width="728"
            height="90"
        /></a>
      </div>
      <div class="block text-center s300-250" v-else>
        <a href="https://www.vultr.com/?ref=6872180"
          ><img
            src="https://www.vultr.com/media/banners/banner_300x250.png"
            width="300"
            height="250"
        /></a>
      </div>
    </client-only>
  </div>
</template>
<style>
.s300-250 {
  width: 300px;
  margin: auto;
}
.s-728x90 {
  width: 728px;
  margin: auto;
}
</style>
