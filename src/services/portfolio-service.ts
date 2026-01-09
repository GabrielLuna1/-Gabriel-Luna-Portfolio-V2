import { profile } from "@/data/profile";
import { experience } from "@/data/experience";
import { projects } from "@/data/projects";
import { stack } from "@/data/stack";
import { education } from "@/data/education";
import type { Profile, ExperienceItem, Project, TechItem, EducationItem } from "@/data/types";

export const PortfolioService = {
  getProfile: async (): Promise<Profile> => profile,
  getExperiences: async (): Promise<ExperienceItem[]> => experience,
  getProjects: async (): Promise<Project[]> => projects,
  getStack: async (): Promise<TechItem[]> => stack,
  getEducation: async (): Promise<EducationItem[]> => education,
};