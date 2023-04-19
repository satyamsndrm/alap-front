import { useMutation, useQuery, useQueryClient } from 'react-query';
import {
  createPestAnalysis,
  fetchAllPestAnalysis,
} from '../api/pestAnalysisApi';

export const useAddPestAnalysis = (onSuccess) => {
  const queryClient = useQueryClient();
  return useMutation(({ data, id }) => createPestAnalysis({ data, id }), {
    onSuccess: (response, { id }) => {
      queryClient.invalidateQueries('PestAnalysis');
      if (onSuccess) {
        onSuccess?.();
      }
    },
    onError: (error) => {
      console.log('error', error);
    },
  });
};

export const useGetPestAnalysis = () => {
  return useQuery('PestAnalysis', fetchAllPestAnalysis);
};
