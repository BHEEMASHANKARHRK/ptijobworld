import type { Job, SelectedCandidate, BranchInfo } from '../types';


export const mockJobs: Job[] = [
  {
    id: '1',
    title: 'Sales Executive',
    location: 'Kalaburagi',
    salaryRange: '₹15,000 - ₹25,000',
    experience: 'Fresher',
    skills: 'Communication, Sales, Customer Relations',
    employmentType: 'Full-Time',
    qualification: 'Any Graduate',
    description: 'Looking for energetic sales executives to join our team. Responsible for client acquisition and relationship management.',
    applyDeadline: '2025-11-15',
    companyLogoUrl: '',
    contactInfo: 'hr@abcpvtltd.com',
    isActive: true,
    jobRole: 'Sales / Marketing Executive',
    jobCategory: 'Sales and Marketing',
    createdAt: '2025-10-01'
  },
  {
    id: '2',
    title: 'Customer Support Executive',
    location: 'Solapur',
    salaryRange: '₹12,000 - ₹18,000',
    experience: '0-1 Years',
    skills: 'Communication, Problem Solving, MS Office',
    employmentType: 'Full-Time',
    qualification: '12th Pass or Graduate',
    description: 'Handle customer queries, provide technical support, and ensure customer satisfaction.',
    applyDeadline: '2025-11-20',
    companyLogoUrl: '',
    contactInfo: 'careers@xyztech.com',
    isActive: true,
    jobRole: 'BPO / Telecallers',
    jobCategory: 'BPO',
    createdAt: '2025-10-02'
  },
  {
    id: '3',
    title: 'Data Entry Operator',
    location: 'Raichur',
    salaryRange: '₹10,000 - ₹15,000',
    experience: 'Fresher',
    skills: 'Typing Speed, MS Excel, Attention to Detail',
    employmentType: 'Full-Time',
    qualification: '10th Pass',
    description: 'Accurate data entry and maintenance of records. Good typing speed required.',
    applyDeadline: '2025-11-10',
    companyLogoUrl: '',
    contactInfo: 'jobs@techsolutions.com',
    isActive: true,
    jobRole: 'Computer Operator / Back Office',
    jobCategory: 'Computer Operator',
    createdAt: '2025-10-03'
  }
];

export const mockCandidates: SelectedCandidate[] = [
  {
    id: '1',
    name: 'Naveen K. Sharma',
    jobTitle: 'Managing Director ',
    // location: '',
    dateOfJoining: '',
    contactInfo: '',
    imageUrl: '../../public/naveen-sharma.jpeg?auto=compress&cs=tinysrgb&w=400',
    remarks: 'Excellent performance in training',
    createdAt: '2025-09-15'
  },
  {
    id: '2',
    name: 'Sharanu kunnur',
    jobTitle: 'Programing Trainer',
    // location: 'Kalaburagi, Solapur, Raichur',
    dateOfJoining: '2025-09-20',
    contactInfo: '',
    imageUrl: '../../public/sharanu_kunnur.jpeg?auto=compress&cs=tinysrgb&w=400',
    remarks: 'Placed through campus drive',
    createdAt: '2025-09-20'
  },
  {
    id: '3',
    name: 'Suhasini Dalge',
    jobTitle: 'HR recruiter',
    location: 'Solapur',
    dateOfJoining: '2025-09-25',
    contactInfo: '',
    imageUrl: '../../public/SuhasiniDalge.jpeg?auto=compress&cs=tinysrgb&w=400',
    createdAt: '2025-09-25'
  },
  {
    id: '4',
    name: 'Ashiyam JD',
    jobTitle: 'HR recruiter',
    location: 'Kalaburagi',
    dateOfJoining: '2025-09-28',
    contactInfo: '',
    imageUrl: '../../public/AshiyamJD.jpeg?auto=compress&cs=tinysrgb&w=400',
    createdAt: '2025-09-28'
  },
  {
    id: '5',
    name: 'Pallavi Chorgasti',
    jobTitle: 'HR recruiter',
    location: 'Kalaburagi',
    dateOfJoining: '2025-10-01',
    contactInfo: '',
    imageUrl: '../../public/anu.jpeg?auto=compress&cs=tinysrgb&w=400',
    remarks: 'Quick learner with technical aptitude',
    createdAt: '2025-10-01'
  },

  {
    id: '6',
    name: 'Pallavi Hadpad',
    jobTitle: 'HR recruiter',
    location: 'Raichur',
    dateOfJoining: '2025-10-01',
    contactInfo: '',
    imageUrl: '../../public/PallaviHadpad.jpeg?auto=compress&cs=tinysrgb&w=400',
    remarks: 'Quick learner with technical aptitude',
    createdAt: '2025-10-01'
  },

  {
    id: '7',
    name: 'Mohammed Shoaib',
    jobTitle: 'Marketing Manager',
    location: 'Kalaburagi, Solapur',
    dateOfJoining: '2025-10-01',
    contactInfo: '',
    imageUrl: '../../public/MohammedShoaib.jpeg?auto=compress&cs=tinysrgb&w=400',
    remarks: 'Quick learner with technical aptitude',
    createdAt: '2025-10-01'
  }
];

export const branches: BranchInfo[] = [
  {
    city: 'Kalaburagi',
    address: '1st floor, Asian business centre, Kalaburagi',
    phones: ['9108012711', '7411174069'],
    justdialUrl: 'https://www.justdial.com/Gulbarga/Pti-Job-World-Placement-Near-Lahoti-Petrol-Bunk-College-Road-Gulbarga/9999P8472-8472-211020123150-B8U8_BZDET',
    instagram: 'https://www.instagram.com/ptijobs.klb/',
    facebook: 'https://www.facebook.com/professionalTraining.55/',
    linkedin: 'https://www.linkedin.com/company/pti-job-world-placement/'
  },
  {
    city: 'Solapur',
    address: '2nd floor, Vyas building, Opp. City Post office, chaupad, Navi peth, Solapur',
    phones: ['9591409911', '9272021110'],
    justdialUrl: 'https://www.justdial.com/Solapur/Pti-Job-World-Placement-Opposite-City-Post-Office-Chaupad-Navi-Peth/9999PX217-X217-230728095529-M4A8_BZDET',
    instagram: 'https://www.instagram.com/ptijobssolapur/',
    facebook: 'https://www.facebook.com/professionalTraining.55/',
    linkedin: 'https://www.linkedin.com/company/pti-job-world-placement/'
  },
  {
    city: 'Raichur',
    address: '1st floor, Beroon kille, Oppo. Ek minar Masjid, Raichur',
    phones: ['8861531411', '6364099034'],
    justdialUrl: 'https://www.justdial.com/Raichur/Pti-Job-World-Placement-Near-Old-Hospital-Station-Road-Raichur/9999P8532-8532-250127141930-N5T6_BZDET',
    instagram: 'https://www.instagram.com/ptijobs.klb/',
    facebook: 'https://www.facebook.com/professionalTraining.55/',
    linkedin: 'https://www.linkedin.com/company/pti-job-world-placement/'
  }, 
  {
    city: 'Bengaluru',
    address: 'SKS Compound, Beside Dayanand Sagar University, Kudlu Gate, Bengaluru - 560068',
    phones: ['9108012711', '7411174069'],
    justdialUrl: 'https://www.justdial.com/Gulbarga/Pti-Job-World-Placement-Near-Lahoti-Petrol-Bunk-College-Road-Gulbarga/9999P8472-8472-211020123150-B8U8_BZDET',
    instagram: 'https://www.instagram.com/ptijobs.klb/',
    facebook: 'https://www.facebook.com/professionalTraining.55/',
    linkedin: 'https://www.linkedin.com/company/pti-job-world-placement/'
  }
];