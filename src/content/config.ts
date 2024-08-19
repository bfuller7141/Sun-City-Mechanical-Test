import { defineCollection, z } from 'astro:content';

// Cities Collection
const cities = defineCollection({
  type: 'content',
  schema: z.object({
    city: z.string(),
    image: z.string(),
    about: z.string(),
  }),
});

// Testimonials Collection
const testimonials = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    testimonial: z.string(),
    rating: z.number().min(0).max(5), // Rating with a max of 5
  }),
});

// Air Quality Collection
const airQuality = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string(),
    content: z.string(),
    question1: z.string().optional(),
    answer1: z.string().optional(),
    question2: z.string().optional(),
    answer2: z.string().optional(),
    question3: z.string().optional(),
    answer3: z.string().optional(),
  }),
});

// Heating Collection
const heating = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string(),
    content: z.string(),
    question1: z.string().optional(),
    answer1: z.string().optional(),
    question2: z.string().optional(),
    answer2: z.string().optional(),
    question3: z.string().optional(),
    answer3: z.string().optional(),
  }),
});

// Cooling Collection
const cooling = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string(),
    content: z.string(),
    question1: z.string().optional(),
    answer1: z.string().optional(),
    question2: z.string().optional(),
    answer2: z.string().optional(),
    question3: z.string().optional(),
    answer3: z.string().optional(),
  }),
});

// Export Collections
export const collections = { cities, testimonials, airQuality, heating, cooling };
