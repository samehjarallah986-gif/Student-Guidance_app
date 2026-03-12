export type Career = {
  id: string;
  title: string;
  description: string;
  requiredEducation: string[];
  requiredSkills: string[];
  recommendedHighSchoolSubjects: string[];
  salaryRange: string;
  workEnvironment: string;
  futureDemand: string;
};

export const careers: Career[] = [

{
id: "1",
title: "Software Engineer",
description:
"Software engineers design, develop, and maintain computer programs and applications used by businesses and individuals.",

requiredEducation: [
"BSc in Computer Science or Software Engineering",
"Programming training or coding bootcamps",
"Continuous learning of new technologies"
],

requiredSkills: [
"Programming (JavaScript, Python, Java)",
"Problem solving",
"Logical thinking",
"Team collaboration"
],

recommendedHighSchoolSubjects: [
"Mathematics",
"Computer Science",
"Physics"
],

salaryRange: "₪20,000 – ₪40,000 per month",
workEnvironment: "Tech companies, startups, or remote work",
futureDemand: "Very high demand globally"
},

{
id: "2",
title: "Doctor",
description:
"Doctors diagnose and treat illnesses, provide medical advice, and help maintain patient health.",

requiredEducation: [
"Pre-medical undergraduate degree",
"Medical school (MD)",
"Hospital residency training"
],

requiredSkills: [
"Biology knowledge",
"Communication with patients",
"Attention to detail",
"Critical thinking"
],

recommendedHighSchoolSubjects: [
"Biology",
"Chemistry",
"Mathematics"
],

salaryRange: "₪15,000 – ₪35,000 per month",
workEnvironment: "Hospitals, clinics, healthcare centers",
futureDemand: "Consistently high demand"
},

{
id: "3",
title: "Architect",
description:
"Architects design buildings and plan structures that are functional, safe, and aesthetically pleasing.",

requiredEducation: [
"Bachelor in Architecture",
"Architecture internship",
"Professional licensing"
],

requiredSkills: [
"Creativity",
"Design thinking",
"Mathematics",
"3D visualization"
],

recommendedHighSchoolSubjects: [
"Art",
"Mathematics",
"Physics"
],

salaryRange: "₪10,000 – ₪22,000 per month",
workEnvironment: "Architecture firms, construction companies",
futureDemand: "Moderate demand"
},

{
id: "4",
title: "Lawyer",
description:
"Lawyers advise clients, represent them in court, and interpret laws and regulations.",

requiredEducation: [
"Bachelor degree",
"Law school (LLB / JD)",
"Bar exam certification"
],

requiredSkills: [
"Argumentation",
"Research skills",
"Communication",
"Critical thinking"
],

recommendedHighSchoolSubjects: [
"History",
"Civics",
"Literature"
],

salaryRange: "₪9,000 – ₪30,000 per month",
workEnvironment: "Law firms, government institutions",
futureDemand: "Moderate demand"
},

{
id: "5",
title: "Mechanical Engineer",
description:
"Mechanical engineers design and build machines and mechanical systems used in manufacturing, transportation and energy.",

requiredEducation: [
"BSc in Mechanical Engineering",
"Engineering internships"
],

requiredSkills: [
"Mathematics",
"Physics",
"CAD software",
"Problem solving"
],

recommendedHighSchoolSubjects: [
"Mathematics",
"Physics",
"Computer Science"
],

salaryRange: "₪14,000 – ₪28,000 per month",
workEnvironment: "Engineering firms, manufacturing companies",
futureDemand: "Stable demand"
},

{
id: "6",
title: "Data Scientist",
description:
"Data scientists analyze large datasets to find patterns and help organizations make data-driven decisions.",

requiredEducation: [
"BSc in Data Science, Statistics, Mathematics or Computer Science"
],

requiredSkills: [
"Python or R",
"Statistics",
"Machine learning",
"Data visualization"
],

recommendedHighSchoolSubjects: [
"Mathematics",
"Computer Science",
"Statistics"
],

salaryRange: "₪22,000 – ₪40,000 per month",
workEnvironment: "Technology companies, research labs",
futureDemand: "Very high demand"
},

{
id: "7",
title: "Civil Engineer",
description:
"Civil engineers design and supervise infrastructure projects such as roads, bridges and buildings.",

requiredEducation: [
"BSc in Civil Engineering",
"Engineering internship"
],

requiredSkills: [
"Structural analysis",
"Mathematics",
"Project planning"
],

recommendedHighSchoolSubjects: [
"Mathematics",
"Physics"
],

salaryRange: "₪13,000 – ₪26,000 per month",
workEnvironment: "Construction companies, government infrastructure projects",
futureDemand: "Stable demand"
},

{
id: "8",
title: "Graphic Designer",
description:
"Graphic designers create visual materials such as logos, advertisements and digital media.",

requiredEducation: [
"Degree in Graphic Design or Visual Communication"
],

requiredSkills: [
"Creativity",
"Adobe Photoshop / Illustrator",
"Visual storytelling"
],

recommendedHighSchoolSubjects: [
"Art",
"Design",
"Media"
],

salaryRange: "₪8,000 – ₪16,000 per month",
workEnvironment: "Design studios, marketing agencies, freelance",
futureDemand: "Moderate demand"
},

{
id: "9",
title: "Psychologist",
description:
"Psychologists study human behavior and help individuals manage emotional and mental challenges.",

requiredEducation: [
"Bachelor degree in Psychology",
"Master's or PhD in Psychology"
],

requiredSkills: [
"Empathy",
"Communication",
"Research",
"Analytical thinking"
],

recommendedHighSchoolSubjects: [
"Biology",
"Psychology",
"Social studies"
],

salaryRange: "₪10,000 – ₪22,000 per month",
workEnvironment: "Hospitals, clinics, schools, private practice",
futureDemand: "Growing demand"
},

{
id: "10",
title: "Cybersecurity Analyst",
description:
"Cybersecurity analysts protect computer networks and systems from hacking and cyber threats.",

requiredEducation: [
"BSc in Cybersecurity or Computer Science",
"Security certifications"
],

requiredSkills: [
"Network security",
"Ethical hacking",
"Risk analysis"
],

recommendedHighSchoolSubjects: [
"Computer Science",
"Mathematics",
"Information Technology"
],

salaryRange: "₪22,000 – ₪38,000 per month",
workEnvironment: "Tech companies, banks, government agencies",
futureDemand: "Very high demand"
},

{
id: "11",
title: "Teacher",
description:
"Teachers educate students and help them develop academic knowledge and critical thinking skills.",

requiredEducation: [
"Bachelor degree in Education",
"Teaching certification"
],

requiredSkills: [
"Communication",
"Patience",
"Teaching methods"
],

recommendedHighSchoolSubjects: [
"Literature",
"Mathematics",
"Social studies"
],

salaryRange: "₪8,000 – ₪16,000 per month",
workEnvironment: "Schools and educational institutions",
futureDemand: "Stable demand"
},

{
id: "12",
title: "Environmental Scientist",
description:
"Environmental scientists research environmental issues and help develop solutions to pollution and climate change.",

requiredEducation: [
"BSc in Environmental Science"
],

requiredSkills: [
"Scientific research",
"Data analysis",
"Environmental policy understanding"
],

recommendedHighSchoolSubjects: [
"Biology",
"Chemistry",
"Geography"
],

salaryRange: "₪12,000 – ₪22,000 per month",
workEnvironment: "Research institutes, environmental organizations",
futureDemand: "Increasing demand"
},

{
id: "13",
title: "Business Analyst",
description:
"Business analysts help organizations improve performance by analyzing data and business processes.",

requiredEducation: [
"Bachelor degree in Business Administration or Economics"
],

requiredSkills: [
"Data analysis",
"Business strategy",
"Problem solving"
],

recommendedHighSchoolSubjects: [
"Mathematics",
"Economics",
"Business studies"
],

salaryRange: "₪18,000 – ₪32,000 per month",
workEnvironment: "Corporations, consulting firms",
futureDemand: "Growing demand"
},

{
id: "14",
title: "Journalist",
description:
"Journalists research and report news stories across television, newspapers and digital media.",

requiredEducation: [
"Degree in Journalism or Communications"
],

requiredSkills: [
"Writing",
"Research",
"Communication"
],

recommendedHighSchoolSubjects: [
"Literature",
"History",
"Media studies"
],

salaryRange: "₪7,000 – ₪14,000 per month",
workEnvironment: "News organizations and media companies",
futureDemand: "Moderate demand"
},

{
id: "15",
title: "Pharmacist",
description:
"Pharmacists prepare and dispense medications while advising patients on safe drug use.",

requiredEducation: [
"Doctor of Pharmacy (PharmD)",
"Pharmacy license"
],

requiredSkills: [
"Chemistry knowledge",
"Attention to detail",
"Communication"
],

recommendedHighSchoolSubjects: [
"Chemistry",
"Biology",
"Mathematics"
],

salaryRange: "₪12,000 – ₪20,000 per month",
workEnvironment: "Hospitals, pharmacies, pharmaceutical companies",
futureDemand: "Stable demand"
},

{
id: "16",
title: "UX/UI Designer",
description:
"UX/UI designers create user-friendly and visually appealing interfaces for apps and websites.",

requiredEducation: [
"Degree in Design or Human-Computer Interaction"
],

requiredSkills: [
"User research",
"Wireframing",
"Design tools (Figma, Sketch)"
],

recommendedHighSchoolSubjects: [
"Art",
"Computer Science",
"Design"
],

salaryRange: "₪18,000 – ₪32,000 per month",
workEnvironment: "Tech companies, startups, freelance",
futureDemand: "High demand"
}

];