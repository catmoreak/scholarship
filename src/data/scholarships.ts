export interface Scholarship {
  id: string;
  name: string;
  provider: string;
  amount: string;
  description: string;
  eligibility: {
    class?: string[];
    gender?: string[];
    religion?: string[];
    caste?: string[];
    state?: string[];
    familyIncome?: string;
    academicPercentage?: number;
    subjects?: string[];
  };
  applicationDeadline: string;
  website: string;
  category: string;
  featured?: boolean;
}

export const scholarships: Scholarship[] = [
  {
    id: "1",
    name: "Central Sector Scholarship Scheme",
    provider: "Ministry of Education, Government of India",
    amount: "₹10,000 - ₹20,000 per year",
    description: "Merit-based scholarship for college and university students with family income below ₹8 lakh per annum.",
    eligibility: {
      class: ["11th", "12th", "Undergraduate", "Postgraduate"],
      familyIncome: "Below ₹8 lakh",
      academicPercentage: 80
    },
    applicationDeadline: "October 31, 2025",
    website: "https://scholarships.gov.in",
    category: "Merit-based",
    featured: true
  },
  {
    id: "2",
    name: "National Scholarship Portal - SC Students",
    provider: "Ministry of Social Justice & Empowerment",
    amount: "₹1,200 - ₹35,000 per year",
    description: "Financial assistance for Scheduled Caste students pursuing education from Class 9 to Post Graduation.",
    eligibility: {
      class: ["9th", "10th", "11th", "12th", "Undergraduate", "Postgraduate"],
      caste: ["Scheduled Caste"],
      familyIncome: "Below ₹2.5 lakh"
    },
    applicationDeadline: "November 30, 2025",
    website: "https://scholarships.gov.in",
    category: "Social Justice"
  },
  {
    id: "3",
    name: "National Scholarship Portal - ST Students",
    provider: "Ministry of Tribal Affairs",
    amount: "₹1,200 - ₹35,000 per year",
    description: "Financial support for Scheduled Tribe students from Class 9 onwards.",
    eligibility: {
      class: ["9th", "10th", "11th", "12th", "Undergraduate", "Postgraduate"],
      caste: ["Scheduled Tribe"],
      familyIncome: "Below ₹2.5 lakh"
    },
    applicationDeadline: "November 30, 2025",
    website: "https://scholarships.gov.in",
    category: "Social Justice"
  },
  {
    id: "4",
    name: "National Scholarship Portal - OBC Students",
    provider: "Ministry of Social Justice & Empowerment",
    amount: "₹1,000 - ₹30,000 per year",
    description: "Educational assistance for Other Backward Classes students.",
    eligibility: {
      class: ["9th", "10th", "11th", "12th", "Undergraduate", "Postgraduate"],
      caste: ["Other Backward Classes"],
      familyIncome: "Below ₹1 lakh"
    },
    applicationDeadline: "November 30, 2025",
    website: "https://scholarships.gov.in",
    category: "Social Justice"
  },
  {
    id: "5",
    name: "Inspire Scholarship",
    provider: "Department of Science and Technology",
    amount: "₹80,000 per year",
    description: "For students pursuing Natural and Basic Sciences at Bachelor's and Master's level.",
    eligibility: {
      class: ["Undergraduate", "Postgraduate"],
      subjects: ["Science", "Mathematics", "Physics", "Chemistry", "Biology"],
      academicPercentage: 60
    },
    applicationDeadline: "July 31, 2025",
    website: "http://online-inspire.gov.in",
    category: "Science & Technology",
    featured: true
  },
  {
    id: "6",
    name: "Kishore Vaigyanik Protsahan Yojana (KVPY)",
    provider: "Indian Institute of Science",
    amount: "₹5,000 - ₹7,000 per month",
    description: "For students with aptitude for research in Science and Mathematics.",
    eligibility: {
      class: ["11th", "12th", "Undergraduate"],
      subjects: ["Science", "Mathematics"],
      academicPercentage: 75
    },
    applicationDeadline: "September 15, 2025",
    website: "http://kvpy.iisc.ernet.in",
    category: "Science & Technology"
  },
  {
    id: "7",
    name: "Prime Minister's Special Scholarship Scheme",
    provider: "AICTE",
    amount: "₹1,250 - ₹30,000 per year",
    description: "For students from Jammu & Kashmir for technical education.",
    eligibility: {
      state: ["Jammu & Kashmir"],
      class: ["Undergraduate", "Postgraduate"],
      subjects: ["Engineering", "Technology"]
    },
    applicationDeadline: "October 15, 2025",
    website: "https://www.aicte-india.org",
    category: "Regional"
  },
  {
    id: "8",
    name: "Maulana Azad National Fellowship",
    provider: "University Grants Commission",
    amount: "₹25,000 per month + contingency",
    description: "For minority community students pursuing M.Phil/Ph.D in universities/colleges.",
    eligibility: {
      class: ["Postgraduate", "Doctoral"],
      religion: ["Muslim", "Christian", "Sikh", "Buddhist", "Jain", "Zoroastrian"],
      academicPercentage: 50
    },
    applicationDeadline: "December 31, 2025",
    website: "https://www.ugc.ac.in",
    category: "Minority",
    featured: true
  },
  {
    id: "9",
    name: "Begum Hazrat Mahal National Scholarship",
    provider: "Maulana Azad Education Foundation",
    amount: "₹5,000 - ₹12,000 per year",
    description: "For meritorious girl students from minority communities.",
    eligibility: {
      gender: ["Female"],
      religion: ["Muslim", "Christian", "Sikh", "Buddhist", "Jain", "Zoroastrian"],
      class: ["9th", "10th", "11th", "12th"],
      academicPercentage: 50
    },
    applicationDeadline: "September 30, 2025",
    website: "https://scholarships.gov.in",
    category: "Minority"
  },
  {
    id: "10",
    name: "Dr. Abdul Kalam Scholarship",
    provider: "Various State Governments",
    amount: "₹15,000 - ₹25,000 per year",
    description: "For students pursuing technical education with good academic record.",
    eligibility: {
      class: ["Undergraduate", "Postgraduate"],
      subjects: ["Engineering", "Technology", "Science"],
      academicPercentage: 70,
      familyIncome: "Below ₹3 lakh"
    },
    applicationDeadline: "August 31, 2025",
    website: "https://scholarships.gov.in",
    category: "Merit-based"
  },
  {
    id: "11",
    name: "Merit Cum Means Scholarship",
    provider: "Ministry of Minority Affairs",
    amount: "₹20,000 per year",
    description: "For economically weaker sections of minority communities.",
    eligibility: {
      religion: ["Muslim", "Christian", "Sikh", "Buddhist", "Jain", "Zoroastrian"],
      familyIncome: "Below ₹2.5 lakh",
      academicPercentage: 50,
      class: ["Undergraduate", "Postgraduate"]
    },
    applicationDeadline: "October 31, 2025",
    website: "https://scholarships.gov.in",
    category: "Minority"
  },
  {
    id: "12",
    name: "National Means cum Merit Scholarship",
    provider: "Ministry of Education",
    amount: "₹12,000 per year",
    description: "For economically weaker sections to continue studies in Class 9-12.",
    eligibility: {
      class: ["9th", "10th", "11th", "12th"],
      familyIncome: "Below ₹3.5 lakh",
      academicPercentage: 55
    },
    applicationDeadline: "November 30, 2025",
    website: "https://scholarships.gov.in",
    category: "Merit-based"
  },
  {
    id: "13",
    name: "Indian Oil Academic Scholarship",
    provider: "Indian Oil Corporation Limited",
    amount: "₹1,000 - ₹5,000 per month",
    description: "For meritorious students from Class 4 to professional courses.",
    eligibility: {
      class: ["4th", "5th", "6th", "7th", "8th", "9th", "10th", "11th", "12th", "Undergraduate"],
      familyIncome: "Below ₹6 lakh",
      academicPercentage: 60
    },
    applicationDeadline: "September 15, 2025",
    website: "https://iocl.com",
    category: "Corporate",
    featured: true
  },
  {
    id: "14",
    name: "Sitaram Jindal Foundation Scholarship",
    provider: "Sitaram Jindal Foundation",
    amount: "₹1,500 - ₹5,000 per month",
    description: "For meritorious students pursuing higher education.",
    eligibility: {
      class: ["11th", "12th", "Undergraduate", "Postgraduate"],
      familyIncome: "Below ₹5 lakh",
      academicPercentage: 75
    },
    applicationDeadline: "August 31, 2025",
    website: "https://www.sitaramjindalfoundation.org",
    category: "Corporate"
  },
  {
    id: "15",
    name: "HDFC Educational Crisis Scholarship",
    provider: "HDFC Bank",
    amount: "₹15,000 - ₹75,000 per year",
    description: "For students facing financial crisis but academically strong.",
    eligibility: {
      class: ["11th", "12th", "Undergraduate"],
      familyIncome: "Below ₹2.5 lakh",
      academicPercentage: 60
    },
    applicationDeadline: "December 15, 2025",
    website: "https://www.hdfcbank.com",
    category: "Corporate"
  },
  {
    id: "16",
    name: "Tata Scholarship for Cornell University",
    provider: "Tata Education and Development Trust",
    amount: "Full tuition + living expenses",
    description: "For Indian students admitted to Cornell University undergraduate programs.",
    eligibility: {
      class: ["12th", "Undergraduate"],
      academicPercentage: 90,
      familyIncome: "Need-based"
    },
    applicationDeadline: "February 15, 2025",
    website: "https://www.tatatrusts.org",
    category: "International"
  },
  {
    id: "17",
    name: "JN Tata Endowment for Higher Education",
    provider: "JN Tata Endowment",
    amount: "₹4 lakh - ₹10 lakh (loan)",
    description: "Interest-free loans for Indian students pursuing higher education abroad.",
    eligibility: {
      class: ["Postgraduate", "Doctoral"],
      academicPercentage: 60,
      familyIncome: "Below ₹10 lakh"
    },
    applicationDeadline: "March 31, 2025",
    website: "https://www.jntataendowment.org",
    category: "International",
    featured: true
  },
  {
    id: "18",
    name: "Swami Vivekananda Merit cum Means Scholarship",
    provider: "West Bengal Government",
    amount: "₹1,000 - ₹5,000 per month",
    description: "For meritorious students from economically disadvantaged families in West Bengal.",
    eligibility: {
      state: ["West Bengal"],
      familyIncome: "Below ₹2.5 lakh",
      academicPercentage: 75,
      class: ["Undergraduate", "Postgraduate"]
    },
    applicationDeadline: "October 31, 2025",
    website: "https://svmcm.wbhed.gov.in",
    category: "State Government"
  },
  {
    id: "19",
    name: "Rajiv Gandhi National Fellowship",
    provider: "University Grants Commission",
    amount: "₹25,000 per month + contingency",
    description: "For SC/ST students pursuing M.Phil/Ph.D.",
    eligibility: {
      class: ["Postgraduate", "Doctoral"],
      caste: ["Scheduled Caste", "Scheduled Tribe"],
      academicPercentage: 55
    },
    applicationDeadline: "December 31, 2025",
    website: "https://www.ugc.ac.in",
    category: "Social Justice"
  },
  {
    id: "20",
    name: "Indira Gandhi Scholarship for Single Girl Child",
    provider: "University Grants Commission",
    amount: "₹3,100 per month",
    description: "For single girl children pursuing postgraduate education.",
    eligibility: {
      gender: ["Female"],
      class: ["Postgraduate"],
      academicPercentage: 50
    },
    applicationDeadline: "November 30, 2025",
    website: "https://www.ugc.ac.in",
    category: "Women Empowerment",
    featured: true
  },
  {
    id: "21",
    name: "Kotak Kanya Scholarship",
    provider: "Kotak Education Foundation",
    amount: "₹1,00,000 per year",
    description: "For girl students pursuing undergraduate studies.",
    eligibility: {
      gender: ["Female"],
      class: ["Undergraduate"],
      familyIncome: "Below ₹10 lakh",
      academicPercentage: 85
    },
    applicationDeadline: "August 15, 2025",
    website: "https://www.kotak.com",
    category: "Women Empowerment"
  },
  {
    id: "22",
    name: "Fair and Lovely Foundation Scholarship",
    provider: "Unilever",
    amount: "₹30,000 - ₹50,000 per year",
    description: "For women pursuing higher education and career development.",
    eligibility: {
      gender: ["Female"],
      class: ["Undergraduate", "Postgraduate"],
      academicPercentage: 60
    },
    applicationDeadline: "September 30, 2025",
    website: "https://www.fairandlovely.in",
    category: "Women Empowerment"
  },
  {
    id: "23",
    name: "Aditya Birla Scholarship Programme",
    provider: "Aditya Birla Group",
    amount: "₹1,80,000 - ₹2,50,000",
    description: "For bright students admitted to premier institutions for engineering and management.",
    eligibility: {
      class: ["Undergraduate"],
      subjects: ["Engineering", "Management"],
      academicPercentage: 80
    },
    applicationDeadline: "August 31, 2025",
    website: "https://www.adityabirla.com",
    category: "Corporate"
  },
  {
    id: "24",
    name: "Reliance Foundation Undergraduate Scholarship",
    provider: "Reliance Foundation",
    amount: "₹2,00,000 per year",
    description: "For meritorious students from disadvantaged backgrounds.",
    eligibility: {
      class: ["Undergraduate"],
      familyIncome: "Below ₹6 lakh",
      academicPercentage: 80
    },
    applicationDeadline: "July 31, 2025",
    website: "https://www.reliancefoundation.org",
    category: "Corporate",
    featured: true
  },
  {
    id: "25",
    name: "NTSE (National Talent Search Examination)",
    provider: "NCERT",
    amount: "₹1,250 - ₹2,000 per month",
    description: "For Class 10 students with exceptional talent in science and social science.",
    eligibility: {
      class: ["10th"],
      academicPercentage: 60
    },
    applicationDeadline: "September 15, 2025",
    website: "http://www.ncert.nic.in",
    category: "Merit-based"
  },
  {
    id: "26",
    name: "DST-INSPIRE Fellowship",
    provider: "Department of Science and Technology",
    amount: "₹25,000 - ₹28,000 per month",
    description: "For doctoral studies in science and technology.",
    eligibility: {
      class: ["Doctoral"],
      subjects: ["Science", "Technology", "Mathematics"],
      academicPercentage: 60
    },
    applicationDeadline: "June 30, 2025",
    website: "http://inspire-dst.gov.in",
    category: "Science & Technology"
  },
  {
    id: "27",
    name: "CSIR-NET JRF",
    provider: "Council of Scientific and Industrial Research",
    amount: "₹25,000 per month",
    description: "For pursuing Ph.D in science subjects.",
    eligibility: {
      class: ["Postgraduate", "Doctoral"],
      subjects: ["Science", "Mathematics", "Computer Science"],
      academicPercentage: 55
    },
    applicationDeadline: "September 30, 2025",
    website: "https://csirnet.nta.nic.in",
    category: "Science & Technology"
  },
  {
    id: "28",
    name: "Pragati Scholarship for Girl Students",
    provider: "AICTE",
    amount: "₹30,000 per year + ₹2,000 incidental",
    description: "For girl students pursuing technical education.",
    eligibility: {
      gender: ["Female"],
      class: ["Undergraduate"],
      subjects: ["Engineering", "Technology"],
      familyIncome: "Below ₹8 lakh"
    },
    applicationDeadline: "October 31, 2025",
    website: "https://www.aicte-india.org",
    category: "Women Empowerment"
  },
  {
    id: "29",
    name: "Saksham Scholarship for Disabled Students",
    provider: "AICTE",
    amount: "₹30,000 per year + ₹2,000 incidental",
    description: "For specially-abled students in technical education.",
    eligibility: {
      class: ["Undergraduate"],
      subjects: ["Engineering", "Technology"],
      familyIncome: "Below ₹8 lakh"
    },
    applicationDeadline: "October 31, 2025",
    website: "https://www.aicte-india.org",
    category: "Disability Support"
  },
  {
    id: "30",
    name: "Vahani Scholarship",
    provider: "Bajaj Finserv",
    amount: "₹5,000 - ₹40,000 per year",
    description: "For economically disadvantaged students with good academic performance.",
    eligibility: {
      class: ["6th", "7th", "8th", "9th", "10th", "11th", "12th", "Undergraduate"],
      familyIncome: "Below ₹3 lakh",
      academicPercentage: 60
    },
    applicationDeadline: "August 31, 2025",
    website: "https://www.bajajfinserv.in",
    category: "Corporate"
  }
];

export function matchScholarships(criteria: {
  class?: string;
  gender?: string;
  religion?: string;
  caste?: string;
  state?: string;
  familyIncome?: string;
  academicPercentage?: number;
  subjects?: string;
}): Scholarship[] {
  return scholarships.filter(scholarship => {
    const { eligibility } = scholarship;
    
    // Check class eligibility
    if (criteria.class && eligibility.class && !eligibility.class.includes(criteria.class)) {
      return false;
    }
    
    // Check gender eligibility
    if (criteria.gender && eligibility.gender && !eligibility.gender.includes(criteria.gender)) {
      return false;
    }
    
    // Check religion eligibility
    if (criteria.religion && eligibility.religion && !eligibility.religion.includes(criteria.religion)) {
      return false;
    }
    
    // Check caste eligibility
    if (criteria.caste && eligibility.caste && !eligibility.caste.includes(criteria.caste)) {
      return false;
    }
    
    // Check state eligibility
    if (criteria.state && eligibility.state && !eligibility.state.includes(criteria.state)) {
      return false;
    }
    
    // Check family income eligibility
    if (criteria.familyIncome && eligibility.familyIncome) {
      const userIncome = parseInt(criteria.familyIncome.replace(/[^\d]/g, ''));
      const eligibleIncome = parseInt(eligibility.familyIncome.replace(/[^\d]/g, ''));
      if (userIncome > eligibleIncome) {
        return false;
      }
    }
    
    // Check academic percentage
    if (criteria.academicPercentage && eligibility.academicPercentage) {
      if (criteria.academicPercentage < eligibility.academicPercentage) {
        return false;
      }
    }
    
    // Check subjects
    if (criteria.subjects && eligibility.subjects && !eligibility.subjects.includes(criteria.subjects)) {
      return false;
    }
    
    return true;
  });
}
