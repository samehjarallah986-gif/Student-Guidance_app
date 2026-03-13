# Student Career Guidance Platform

## Project Overview
The student Career Guidance App is a mobile application tat helps students explore possible career paths and discover opportunities that support their future goals. The app combines career information, extracarricular activities, internships, and volunteering opportunities in one platfform.

Studens can search for experiences, filter them based ob their preferneces, and save activities they are interesed in. The platform also collects questionnaire data to better understand student interests and future aspirations.

---

## Features

### Career Exploration
Students can explore different careers and learn about:
- Career descriptions
- Required education
- Necessary skills
- Recommended high school subjects
- Work environments
- Salary ranges in the country ( Israel )

### Activities and Experiences
Students can discover real-world opportunities including:
- Volunteering
- Extracarricular clubs
- Workshops
- Job shadowing
- Internships
- University visists
- Professional networking events

### Search and Filters
Students can filter activities by:
- Location
- Category
- Maximum budget

### Saved Activities
Students can save opportunities they are interested in and access them later in the **Saved** tab.

### Student Questionnaire
Students complete a questionnaire that collects information about:
- Career interests
- Hobbies
- Volunteer interests
- Academic preferences

These responses are stored in the database and can later support personalized recommendations.

### User Profiles
The app stores user profile information in the backend database.

---

## Technologies Used

### Frontend
- React Native
- Expo Router
- TypeScript

### Backend
- Appwrite

### Database
The project uses Appwrite collections:

- `users_profiles`
- `questionnaires`
- `saved`

### Local Data
Local datasets used in the project:

- `data/activities.ts`
- `data/careers.ts`

---

## Project Structure

```bash

app
├── (tabs)
│   ├── index.tsx
│   ├── profile.tsx
│   └── saved.tsx
│
├── detail.tsx
├── questionnaire.tsx
├── results.tsx
├── sign-in.tsx
└── sign-up.tsx

components
├── ActivityCard.tsx
├── CustomButton.tsx
└── CustomInput.tsx

data
├── activities.ts
└── careers.ts

services
└── appwrite.ts
``` 

---


## How to Run the Project

Clone the repository:

```bash
git clone https://github.com/yourusername/student-career-guidance-app.git
```

Install dependencies:
```bash
npm install
```
Start the Expo development server:
```bash
npx expo start
```
You can run the app using:
- Expo Go on your phone
- Android emulator
- iOS simulator

## Appwrite Database Setup
### Database ID: 
```bash
69a741290018b7af01b3
```

### Collections:

 users_profiles:

Stores user profile information.

Fields:
- userId

- fullName

- school

- gradeLevel

- city

 questionnaires:

Stores questionnaire responses.

Fields:

- userId

- majors

- careerInMind

- hobbies

- parentsJobs

- daysjob

- volunteerInterest

- psychometricGrade

 saved:

Stores saved activities.

 Fields:

- userId

- itemType

- itemId

## Future Improvements

Planned improvements for future versions:

- Career recommendations based on questionnaire answers

- AI-powered career guidance

- Integration with external opportunity APIs

- Matching activities with career interests

- Notifications for new opportunities

- Expanded career database

## Purpose of the Project:

This project was developed as part of a developers workshop milestone to demonstrate:

- React Native mobile development

- Reusable components

- React hooks

- Backend/database integration

- Organized project architecture

## Author

Student Career Guidance Platform
Developed as part of the YL Developers Track Workshop.