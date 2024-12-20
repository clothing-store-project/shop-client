export default defineNuxtRouteMiddleware(async (to, _from) => {
  const {data} = await useFetch('/api/detectDevice');
  const isMobile = data.value.isMobile;

  const routeProduct = computed(() => to.path.startsWith('/product'));
  const routeCart = computed(() => to.path.startsWith('/cart'));
  const categories = to.params.category;

  useState('deviceLayout').value = isMobile ? 'mobile' : 'default';
  const routeCheckout = computed(() => to.path.startsWith('/checkout'))
  if (isMobile && (routeProduct.value || routeCart.value || categories || routeCheckout.value)) {
    useState('deviceLayout').value = 'no-layout';
  } else {
    useState('deviceLayout').value = isMobile ? 'mobile' : 'default';
    if (!isMobile && to.path === '/cart') {
      throw createError({
        statusCode: 404
      })
    }
    if (routeCheckout.value) {
      useState('deviceLayout').value = 'checkout';
      return
    }
  }
});
