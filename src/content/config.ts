import { defineCollection } from 'astro:content';
import { z } from 'astro:schema';

const firstName = defineCollection({
  schema: z.object({
    firstName: z.string(),
  }),
});

const middleName = defineCollection({
  schema: z.object({
    middleName: z.string(),
  }),
});

const lastName = defineCollection({
  schema: z.object({
    lastName: z.string(),
  }),
});

export const collections = {
  firstName,
  middleName,
  lastName,
};
