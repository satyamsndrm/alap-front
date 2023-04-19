import { useMutation, useQuery, useQueryClient } from 'react-query';
import { createNotebook, fetchAllNotebook } from '../api/notebookApi';

export const useAddNotebook = (onSuccess) => {
  const queryClient = useQueryClient();
  return useMutation(({ data, id }) => createNotebook({ data, id }), {
    onSuccess: (response, { id }) => {
      queryClient.invalidateQueries('Notebooks');
      if (onSuccess) {
        onSuccess?.();
      }
    },
    onError: (error) => {
      console.log('error', error);
    },
  });
};

export const useGetNotebooks = () => {
  return useQuery('Notebooks', fetchAllNotebook);
};
