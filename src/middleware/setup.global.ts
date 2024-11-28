export default defineNuxtRouteMiddleware(async () => {
  const {data} = await useFetch('/api/detectDevice');
  const isMobile = data.value.isMobile;
  useState('deviceLayout').value = isMobile ? 'mobile' : 'default';
});
