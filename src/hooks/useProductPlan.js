import { useMutation, useQuery, useQueryClient } from 'react-query';
import { createProductPlan, fetchAllProductPlan } from '../api/productPlanApi';
import axios from '../utils/axios';

export const useAddProductPlan = (onSuccess) => {
  const queryClient = useQueryClient();
  // const navigation = useNavigate();
  return useMutation(({ data, id }) => createProductPlan({ data, id }), {
    onSuccess: (response, { id }) => {
      console.log('id,response', id, response);
      queryClient.invalidateQueries('productPlans');
      if (onSuccess) {
        onSuccess?.();
      }
    },
    onError: (error) => {
      console.log('error', error);
    },
  });
};

export const useGetProductPlans = () => {
  return useQuery('productPlans', fetchAllProductPlan);
};
