<script setup lang="ts">
import("~/assets/js/jquery.min.js")
import("~/assets/vendor/wow/wow.min.js")
import("~/assets/vendor/bootstrap/dist/js/bootstrap.bundle.min.js")
import("~/assets/vendor/bootstrap-select/dist/js/bootstrap-select.min.js")
import("~/assets/vendor/bootstrap-touchspin/bootstrap-touchspin.js")
import("~/assets/vendor/swiper/swiper-bundle.min.js")
import("~/assets/vendor/magnific-popup/magnific-popup.js")
import("~/assets/vendor/imagesloaded/imagesloaded.js")
import("~/assets/vendor/masonry/masonry-4.2.2.js")
import("~/assets/vendor/masonry/isotope.pkgd.min.js")
import("~/assets/vendor/countdown/jquery.countdown.js")
import("~/assets/vendor/wnumb/wNumb.js")
import("~/assets/vendor/nouislider/nouislider.min.js")
import("~/assets/js/dz.carousel.js")
import("~/assets/vendor/lightgallery/dist/lightgallery.min.js")
import("~/assets/vendor/lightgallery/dist/plugins/thumbnail/lg-thumbnail.min.js")
import("~/assets/vendor/lightgallery/dist/plugins/zoom/lg-zoom.min.js")
import("~/assets/js/dz.ajax.js")
import("~/assets/js/custom.js")
</script>

<template>
  <LayoutsClientAppHeader/>
  <slot/>
  <LayoutsClientAppFooter/>
</template>

<style>
@import url("~/assets/css/style.css");
@import url("~/assets/icons/iconly/index.min.css");
@import url("~/assets/vendor/magnific-popup/magnific-popup.min.css");
@import url("~/assets/vendor/bootstrap-select/dist/css/bootstrap-select.min.css");
@import url("~/assets/vendor/swiper/swiper-bundle.min.css");
@import url("~/assets/vendor/nouislider/nouislider.min.css");
@import url("~/assets/vendor/animate/animate.css");
@import url("~/assets/vendor/lightgallery/dist/css/lightgallery.css");
@import url("~/assets/vendor/lightgallery/dist/css/lg-thumbnail.css");
@import url("~/assets/vendor/lightgallery/dist/css/lg-zoom.css");
@import url("~/assets/css/skin/skin-1.css");
</style>


