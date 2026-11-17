export type Role = "candidate" | "recruiter" | "admin";
export type JobStatus = "active" | "paused" | "closed" | "pending";
export type ApplicationStatus =
  | "Applied"
  | "Under Review"
  | "Shortlisted"
  | "Interview Scheduled"
  | "Selected"
  | "Rejected"
  | "Withdrawn";

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  title?: string;
  location?: string;
  status: "active" | "suspended";
  skills?: string[];
  avatar?: string;
}

export interface Company {
  id: string;
  name: string;
  logo: string;
  industry: string;
  location: string;
  size: string;
  description: string;
  openJobs: number;
}

export interface Job {
  id: string;
  title: string;
  companyId: string;
  company: string;
  logo: string;
  location: string;
  salary: string;
  salaryMin: number;
  type: string;
  workplace: "Remote" | "Hybrid" | "On-site";
  experience: string;
  category: string;
  education: string;
  posted: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  skills: string[];
  featured: boolean;
  status: JobStatus;
  approval: "approved" | "pending" | "rejected";
  applicants: number;
  expiresIn: number;
}

export interface Application {
  id: string;
  jobId: string;
  candidateId: string;
  candidateName: string;
  jobTitle: string;
  company: string;
  status: ApplicationStatus;
  appliedAt: string;
  coverLetter?: string;
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: "application" | "interview" | "message" | "system";
  time: string;
  read: boolean;
}

export interface Interview {
  id: string;
  applicationId: string;
  candidateName: string;
  jobTitle: string;
  date: string;
  time: string;
  type: string;
  link: string;
}

export interface Message {
  id: string;
  conversationId: string;
  sender: "me" | "them";
  text: string;
  time: string;
  read: boolean;
}
