import { useMutation, useQuery, useQueryClient } from 'react-query';
import {
  createSwotAnalysis,
  fetchAllSwotAnalysis,
} from '../api/swotAnalysisApi';

export const useAddSwotAnalysis = (onSuccess) => {
  const queryClient = useQueryClient();
  return useMutation(({ data, id }) => createSwotAnalysis({ data, id }), {
    onSuccess: (response, { id }) => {
      queryClient.invalidateQueries('SwotAnalysis');
      if (onSuccess) {
        onSuccess?.();
      }
    },
    onError: (error) => {
      console.log('error', error);
    },
  });
};

export const useGetSwotAnalysis = () => {
  return useQuery('SwotAnalysis', fetchAllSwotAnalysis);
};
