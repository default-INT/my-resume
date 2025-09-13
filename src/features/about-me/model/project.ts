import { Period } from './common';

export interface Project {
  id: string;
  name: string;
  position?: string;
  logoUrl: string;
  period: Period
  link?: string;
  linkPreview?: string;
  techStack?: string[];
  other?: {
    teamMembersCount?: number | null;
    businessProcess?: string
  }
}
