import { useMutation, useQuery, useQueryClient } from 'react-query';
import {
  createPestleAnalysis,
  fetchAllPestleAnalysis,
} from '../api/pestleAnalysisApi';

export const useAddPestleAnalysis = (onSuccess) => {
  const queryClient = useQueryClient();
  return useMutation(({ data, id }) => createPestleAnalysis({ data, id }), {
    onSuccess: (response, { id }) => {
      queryClient.invalidateQueries('PestleAnalysis');
      if (onSuccess) {
        onSuccess?.();
      }
    },
    onError: (error) => {
      console.log('error', error);
    },
  });
};

export const useGetPestleAnalysis = () => {
  return useQuery('PestleAnalysis', fetchAllPestleAnalysis);
};
