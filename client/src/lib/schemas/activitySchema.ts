import { z } from 'zod'
const requiredString = (fieldName: string) => z.string().min(1,
    { message: `${fieldName} is required` }
)
export const activitySchema = z.object({
    title: requiredString('title'),
    description: requiredString('description'),
    date: z.coerce.date({
        message: 'Date is required'
    }),
    category: requiredString('category'),
    location: z.object({
        venue: requiredString('Venue'),
        city: z.string().optional(),
        latitude: z.coerce.number(),
        longitude: z.coerce.number()
    })

})

export type ActivitySchema = z.infer<typeof activitySchema>;