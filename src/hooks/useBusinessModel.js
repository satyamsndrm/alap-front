import { useMutation, useQuery, useQueryClient } from 'react-query';
import {
  createBusinessModel,
  fetchAllBusinessModel,
} from '../api/businessModelApi';

export const useAddBusinessModel = (onSuccess) => {
  const queryClient = useQueryClient();
  return useMutation(({ data, id }) => createBusinessModel({ data, id }), {
    onSuccess: (response, { id }) => {
      queryClient.invalidateQueries('BusinessModels');
      if (onSuccess) {
        onSuccess?.();
      }
    },
    onError: (error) => {
      console.log('error', error);
    },
  });
};

export const useGetBusinessModels = () => {
  return useQuery('BusinessModels', fetchAllBusinessModel);
};
