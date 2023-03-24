import { useMutation, useQuery, useQueryClient } from 'react-query';
import { createTask, fetchAllTask } from '../api/taskApi';
import axios from '../utils/axios';

export const useAddTask = (onSuccess) => {
  const queryClient = useQueryClient();
  // const navigation = useNavigate();
  return useMutation(({ data, id }) => createTask({ data, id }), {
    onSuccess: (response, { id }) => {
      queryClient.invalidateQueries('tasks');
      if (onSuccess) {
        onSuccess?.();
      }
    },
    onError: (error) => {
      console.log('error', error);
    },
  });
};

export const useGetTasks = () => {
  return useQuery('tasks', fetchAllTask);
};
