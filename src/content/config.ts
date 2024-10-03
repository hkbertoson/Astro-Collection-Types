import {defineCollection} from 'astro:content';
import {z} from 'astro:schema';

const firstName = defineCollection({
	schema: z.object({
		name: z.string(),
	}),
});

const middleName = defineCollection({
	schema: z.object({
		name: z.string(),
	}),
});

const lastName = defineCollection({
	schema: z.object({
		name: z.string(),
	}),
});

export const collections = {
	firstName,
	middleName,
	lastName,
};
