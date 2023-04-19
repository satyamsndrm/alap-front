import { useMutation, useQuery, useQueryClient } from 'react-query';
import {
  createBuisnessPlan,
  fetchAllBuisnessPlan,
} from '../api/buisnessPlanApi';

export const useAddBuisnessPlan = (onSuccess) => {
  const queryClient = useQueryClient();
  return useMutation(({ data, id }) => createBuisnessPlan({ data, id }), {
    onSuccess: (response, { id }) => {
      queryClient.invalidateQueries('BuisnessPlans');
      if (onSuccess) {
        onSuccess?.();
      }
    },
    onError: (error) => {
      console.log('error', error);
    },
  });
};

export const useGetBuisnessPlans = () => {
  return useQuery('BuisnessPlans', fetchAllBuisnessPlan);
};
