import { createClient } from "next-sanity";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "YOUR_PROJECT_ID",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});

// GROQ queries
export const personalInfoQuery = `*[_type == "personalInfo"][0]`;

export const experienceQuery = `*[_type == "experience"] | order(sortOrder asc) {
  _id,
  role,
  company,
  location,
  period,
  highlights
}`;

export const educationQuery = `*[_type == "education"] | order(sortOrder asc) {
  _id,
  degree,
  institution,
  location,
  period,
  details
}`;

export const skillsQuery = `*[_type == "skills"] {
  _id,
  category,
  skillList
}`;