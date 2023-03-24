import { useMutation, useQuery, useQueryClient } from 'react-query';
import { createInvestor, fetchAllInvestor } from '../api/investorApi';

export const useAddInvestor = (onSuccess) => {
  const queryClient = useQueryClient();
  return useMutation(({ data, id }) => createInvestor({ data, id }), {
    onSuccess: (response, { id }) => {
      queryClient.invalidateQueries('Investors');
      if (onSuccess) {
        onSuccess?.();
      }
    },
    onError: (error) => {
      console.log('error', error);
    },
  });
};

export const useGetInvestors = () => {
  return useQuery('Investors', fetchAllInvestor);
};
