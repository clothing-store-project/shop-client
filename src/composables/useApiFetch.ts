import type {UseFetchOptions} from 'nuxt/app';

const useApiFetch = (url: string | (() => string), options: UseFetchOptions<null> = {}): Promise<any> => {
  const customFetch = $fetch.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    onResponseError({ response }: { response: Response }) {
      const statusMessage = response?.status === 401 ? 'Unauthorized' : 'Response failed';
      throw showError({
        statusCode: response?.status,
        statusMessage,
        fatal: true,
      });
    },
  });
  
  return useFetch(url, {
    ...options,
    $fetch: customFetch,
  });
};

export default useApiFetch;