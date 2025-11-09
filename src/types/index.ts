export interface Job {
  id: string;
  title: string;
  companyName: string;
  location: string;
  salaryRange: string;
  experience: string;
  skills: string;
  employmentType: string;
  qualification: string;
  description: string;
  applyDeadline: string;
  companyLogoUrl: string;
  contactInfo: string;
  isActive: boolean;
  jobRole: string;
  jobCategory: string;
  createdAt: string;
}

export interface SelectedCandidate {
  id: string;
  name: string;
  jobTitle: string;
  companyName: string;
  location: string;
  dateOfJoining: string;
  contactInfo: string;
  imageUrl: string;
  remarks: string;
  createdAt: string;
}

export interface BranchInfo {
  city: string;
  address: string;
  phones: string[];
  justdialUrl: string;
}