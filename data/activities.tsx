export type Category =
 | "Volunteering"
 | "Extracurricular"
 | "Professional Meetings"
 | "Workshop"
 | "Job Shadowing"
 | "Internship"
 | "University Visit";

export type Activity = {
 id: string;
 title: string;
 category: Category;
 location: string;
 price: string;      // UI display
 priceNumber: number; // used for filtering
 description: string;
};

export const activities: Activity[] = [

{
id: "1",
title: "Hospital Volunteer Program",
category: "Volunteering",
location: "Jerusalem",
price: "Free",
priceNumber: 0,
description: "Help patients, support staff, and gain healthcare exposure.",
},

{
id: "2",
title: "Engineering Career Workshop",
category: "Workshop",
location: "Haifa",
price: "₪20",
priceNumber: 20,
description: "Hands-on workshop exploring engineering study paths and careers.",
},

{
id: "3",
title: "Job Shadowing at Tech Company",
category: "Job Shadowing",
location: "Tel Aviv",
price: "Free",
priceNumber: 0,
description: "Shadow professionals and learn what a real workday looks like.",
},

{
id: "4",
title: "University Open Day Visit",
category: "University Visit",
location: "Jerusalem",
price: "Free",
priceNumber: 0,
description: "Explore majors, meet students, and attend info sessions.",
},

{
id: "5",
title: "Professional Networking Meetup",
category: "Professional Meetings",
location: "Haifa",
price: "₪10",
priceNumber: 10,
description: "Meet professionals, ask questions, and learn about career fields.",
},

{
id: "6",
title: "Summer Internship Intro Program",
category: "Internship",
location: "Remote",
price: "Free",
priceNumber: 0,
description: "Intro internship experience with mentorship and weekly tasks.",
},

{
id: "7",
title: "Animal Shelter Volunteer",
category: "Volunteering",
location: "Tel Aviv",
price: "Free",
priceNumber: 0,
description: "Assist with caring for rescued animals and helping visitors.",
},

{
id: "8",
title: "Startup Founder Q&A",
category: "Professional Meetings",
location: "Tel Aviv",
price: "₪15",
priceNumber: 15,
description: "Meet startup founders and ask questions about entrepreneurship.",
},

{
id: "9",
title: "Robotics Engineering Workshop",
category: "Workshop",
location: "Haifa",
price: "₪25",
priceNumber: 25,
description: "Build and program simple robots with university mentors.",
},

{
id: "10",
title: "Architecture Job Shadow Day",
category: "Job Shadowing",
location: "Jerusalem",
price: "Free",
priceNumber: 0,
description: "Spend a day with architects learning about design and planning.",
},

{
id: "11",
title: "Environmental Volunteer Cleanup",
category: "Volunteering",
location: "Haifa",
price: "Free",
priceNumber: 0,
description: "Join a community beach and park cleanup initiative.",
},

{
id: "12",
title: "Medical Research Internship Intro",
category: "Internship",
location: "Tel Aviv",
price: "Free",
priceNumber: 0,
description: "Assist research assistants in basic data collection tasks.",
},

{
id: "13",
title: "University Science Lab Tour",
category: "University Visit",
location: "Haifa",
price: "₪8",
priceNumber: 8,
description: "Tour advanced science laboratories and meet professors.",
},

{
id: "14",
title: "Creative Writing Workshop",
category: "Workshop",
location: "Jerusalem",
price: "₪14",
priceNumber: 14,
description: "Improve storytelling and writing skills with professional authors.",
},

{
id: "15",
title: "Law Firm Job Shadow Program",
category: "Job Shadowing",
location: "Tel Aviv",
price: "Free",
priceNumber: 0,
description: "Observe lawyers during meetings and legal preparation.",
},

{
id: "16",
title: "Community Food Bank Volunteer",
category: "Volunteering",
location: "Jerusalem",
price: "Free",
priceNumber: 0,
description: "Help organize food donations and assist families in need.",
},

{
id: "17",
title: "Tech Industry Networking Event",
category: "Professional Meetings",
location: "Tel Aviv",
price: "₪20",
priceNumber: 20,
description: "Connect with software engineers and startup employees.",
},

{
id: "18",
title: "Computer Science University Visit",
category: "University Visit",
location: "Tel Aviv",
price: "₪6",
priceNumber: 6,
description: "Learn about computer science degrees and student projects.",
},

{
id: "19",
title: "Marine Life Conservation Volunteer",
category: "Volunteering",
location: "Eilat",
price: "Free",
priceNumber: 0,
description: "Assist marine biologists with coral reef monitoring and beach cleanups.",
},

{
id: "20",
title: "Sustainability & Climate Workshop",
category: "Workshop",
location: "Modiin",
price: "₪16",
priceNumber: 16,
description: "Learn about sustainability practices and environmental impact.",
},

{
id: "21",
title: "Hotel Management Job Shadow",
category: "Job Shadowing",
location: "Eilat",
price: "Free",
priceNumber: 0,
description: "Spend a day shadowing hotel managers and learning hospitality operations.",
},

{
id: "22",
title: "Cyber Security Networking Event",
category: "Professional Meetings",
location: "Modiin",
price: "₪18",
priceNumber: 18,
description: "Meet cyber security professionals and discuss careers in digital security.",
},

{
id: "23",
title: "Youth Education Internship",
category: "Internship",
location: "Nazareth",
price: "Free",
priceNumber: 0,
description: "Assist educators in youth learning programs and workshops.",
},

{
id: "24",
title: "Northern Campus Exploration Day",
category: "University Visit",
location: "Nazareth",
price: "₪7",
priceNumber: 7,
description: "Visit university facilities, meet students, and attend mini lectures.",
},

{
id: "25",
title: "Youth Environmental Club",
category: "Extracurricular",
location: "Nazareth",
price: "Free",
priceNumber: 0,
description: "Students organize sustainability projects and environmental awareness campaigns."
},

{
id: "26",
title: "Robotics Club",
category: "Extracurricular",
location: "Haifa",
price: "₪15",
priceNumber: 15,
description: "Join a robotics team and build programmable robots for competitions."
},

{
id: "27",
title: "Photography Club",
category: "Extracurricular",
location: "Haifa",
price: "₪12",
priceNumber: 12,
description: "Learn photography techniques and participate in creative exhibitions."
},

{
id: "28",
title: "School Debate Team",
category: "Extracurricular",
location: "Jerusalem",
price: "Free",
priceNumber: 0,
description: "Develop public speaking, persuasion and critical thinking skills."
},

];