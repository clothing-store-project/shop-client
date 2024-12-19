export default defineNuxtRouteMiddleware(async (to, _from) => {
  const {data} = await useFetch('/api/detectDevice');
  const isMobile = data.value.isMobile;
  const url = useRequestURL()
  
  const routeProduct = computed(() => to.path.startsWith('/product'))
  if ((isMobile && url.pathname.startsWith('/product')) || (isMobile && routeProduct.value)) {
    useState('deviceLayout').value = 'no-layout';
    return
  }
  const categories = to.params.category
  if (isMobile && categories) {
    useState('deviceLayout').value = 'no-layout';
    return
  }

  const routeCheckout = computed(() => to.path.startsWith('/checkout'))
  if (isMobile && url.pathname.startsWith('/checkout')) {
    useState('deviceLayout').value = 'no-layout';
    return
  }
  if (routeCheckout.value) {
    useState('deviceLayout').value = 'checkout';
    return
  }
  
  useState('deviceLayout').value = isMobile ? 'mobile' : 'default';
});
