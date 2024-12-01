export default defineNuxtRouteMiddleware(async (to, _from) => {
  const {data} = await useFetch('/api/detectDevice');
  const isMobile = data.value.isMobile;
  const url = useRequestURL()
  
  const routeProduct = computed(() => to.path.startsWith('/product'))
  if ((isMobile && url.pathname.startsWith('/product')) || (isMobile && routeProduct.value)) {
    useState('deviceLayout').value = 'product';
    return
  }
  
  useState('deviceLayout').value = isMobile ? 'mobile' : 'default';
});
