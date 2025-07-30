import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";
import agent from "../api/agent";
const queryClient = new QueryClient();
export const useActivities = () => {
    const { data: activities, isPending } = useQuery({
        queryKey: ['activities'],
        queryFn: async () => {
            const response = await agent.get<Activity[]>('/Activities');
            return response.data;
        }
    })

    const updateActivity = useMutation({
        mutationFn: async (activity: Activity) => {
            await agent.put('/activities', activity)
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries({
                queryKey: ['activities']
            })
        }
    })

    const createActivity = useMutation({
        mutationFn: async (activity: Activity) => {
            await agent.post('/activities', activity)
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries({
                queryKey: ['activities']
            })
        }
    })
    const deleteActivity = useMutation({
        mutationFn: async (id: string) => {
            await agent.delete(`/activities/${id}`)
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries({
                queryKey: ['activities']
            })
        }
    })
    return {
        activities,
        isPending,
        updateActivity,
        createActivity,
        deleteActivity
    }
}