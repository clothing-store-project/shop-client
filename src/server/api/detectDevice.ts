export default defineEventHandler((event) => {
  const userAgent = event.node.req.headers['user-agent'] || '';
  const isMobile = /iPhone|iPad|iPod|Android/i.test(userAgent);
  return { isMobile };
});
