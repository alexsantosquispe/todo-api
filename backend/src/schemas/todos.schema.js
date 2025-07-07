import z from 'zod';

const todoSchema = z.object({
  description: z
    .string()
    .min(10, 'Description must be at least 10 characters long')
    .max(100, 'Description must be at most 100 characters long'),
  status: z.enum(['not-started', 'in-progress'])
});

export const validateTodo = (todo) => {
  return todoSchema.safeParse(todo);
};
