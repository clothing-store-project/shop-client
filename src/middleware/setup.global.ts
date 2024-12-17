export default defineNuxtRouteMiddleware(async (to, _from) => {
  const {data} = await useFetch('/api/detectDevice');
  const isMobile = data.value.isMobile;
  const url = useRequestURL()

  const routeProduct = computed(() => to.path.startsWith('/product'))
  const routeCart = computed(() => to.path.startsWith('/cart'))
  useState('deviceLayout').value = isMobile ? 'mobile' : 'default';

  if ((isMobile && url.pathname.startsWith('/product')) || (isMobile && routeProduct.value)) {
    useState('deviceLayout').value = 'no-layout';
    return
  }
  if ((isMobile && url.pathname.startsWith('/cart')) || (isMobile && routeCart.value)) {
    useState('deviceLayout').value = 'no-layout';
    return
  }

  const categories = to.params.category
  if (isMobile && categories) {
    useState('deviceLayout').value = 'no-layout';
    return
  }
});
