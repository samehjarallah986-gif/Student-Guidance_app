# Implementation Analysis: Frontend vs Backend Data Storage

## Current Status Overview

### ✅ IMPLEMENTED: User Authentication
- **Sign-up flow**: Users create account with email/password via `account.create()`
- **Sign-in flow**: Users authenticate via `createEmailPasswordSession()`
- **Session management**: `getMe()` retrieves current authenticated user
- **Storage**: User credentials stored in Appwrite Auth system
- **Data stored**: `$id`, `email`, `name` (only these from auth system)

### ⚠️ PARTIALLY IMPLEMENTED: User Profile Data
- **Questionnaire data**: Stored in database collection `questionnaires` linked to `userId`
- **Profile info collected but NOT saved**: 
  - `role` (student/teacher)
  - username (separate from auth system name)
  - `school`

---

## Data Flow Comparison

### Current Sign-Up Flow:
```
User Input (email, role, username, password, school)
    ↓
account.create(ID, email, password, name)  ← Only email/password/name → Auth System
    ↓
createEmailPasswordSession()  ← Session created
    ↓
Router → Questionnaire  ← Other data (role, school) LOST
```

### Current Questionnaire Flow:
```
User enters questionnaire answers
    ↓
databases.createDocument() → questionnaires collection
    ↓
Document stored with: userId, majors, careerInMind, hobbies, etc.
```

### What's Missing - User Profile Collection:
```
User Input (email, role, username, password, school)
    ↓
account.create()  → Auth System
    ↓
databases.createDocument('users_profiles') → Store profile data  ← NOT IMPLEMENTED
    ↓
createEmailPasswordSession()
    ↓
Router → Questionnaire
```

---

## What IS Stored in Appwrite

### Authentication System (Auth):
- ✅ User `$id` (unique identifier)
- ✅ User `email`
- ✅ User `name` (from signup username parameter)
- ✅ `emailVerification` status
- ✅ Password hash (backend only)

### Database (questionnaires collection):
- ✅ User ID
- ✅ Career preferences (majors, career ideas, hobbies)
- ✅ Social context (parents jobs, dream job)
- ✅ Assessment scores (psychometric grade)

### Database (users_profiles collection - DEFINED BUT EMPTY):
- ❌ Profile data NOT being written
- Collection exists but has no documents

---

## What's Missing

### 1. **User Profile Storage** (Critical Gap)
Currently collected in sign-up but never saved:
```typescript
Fields being collected but discarded:
- role (student/teacher/admin)
- school
- username (stored only in auth 'name' field, not in profile)
```

### 2. **User Profile Retrieval**
No function to fetch user's full profile data including:
- School
- Role
- Other personal student information

### 3. **Profile Update Capability**
Users cannot update their profile after signup.

---

## What the API Secret is For

The API secret you provided (`standard_c91155217c9...`) is for the **Server SDK** (backend operations).

### Current Architecture:
- **Frontend (React Native)**: Uses **Client SDK** (frontend auth only)
- **Backend (Server-side)**: Would use **Server SDK** with API key (full access)

### Server SDK Use Cases:
1. **Create user profiles after signup** - When user signs up, immediately store their profile data
2. **Admin operations** - Query all users, delete accounts, verify emails
3. **Scheduled tasks** - Process user data, send emails, clean up old data
4. **Bulk operations** - Migrate users, batch updates
5. **Restricted operations** - Data that shouldn't be modified by frontend

---

## Recommendations

### Option 1: Store Profile on Sign-Up (Frontend)
**Pros**: Simple, works now
**Cons**: User could modify their own profile data

```typescript
// In sign-up after createEmailPasswordSession:
await databases.createDocument(DB_ID, COL_PROFILES, me.$id, {
  userId: me.$id,
  email: me.email,
  role: role.trim(),
  school: school.trim(),
  createdAt: new Date().toISOString(),
});
```

### Option 2: Use Backend API with Server Key (Recommended)
**Pros**: Secure, validated, prevents tampering
**Cons**: Requires backend server setup

```typescript
// After signup, call your backend:
POST /api/users/create-profile
{
  userId: "...",
  email: "...",
  role: "...",
  school: "..."
}
// Your backend uses API key to store securely
```

---

## Current Database Collections

### Defined Exports in appwrite.ts:
- ✅ `COL_QUESTIONNAIRES` = "questionnaires" (IN USE)
- ✅ `COL_SAVED` = "saved" (NOT USED)
- ✅ `COL_PROFILES` = "users_profiles" (NOT USED)

---

## Summary Table

| Feature | Implemented | Storage Location | Status |
|---------|-------------|------------------|--------|
| Email/Password Auth | ✅ Yes | Appwrite Auth | Working |
| Sign-up Flow UI | ✅ Yes | Frontend only | Working |
| Session Management | ✅ Yes | Appwrite Auth | Working |
| Store Questionnaire | ✅ Yes | questionnaires collection | Working |
| Store User Profile | ❌ No | users_profiles (empty) | Missing |
| Retrieve User Profile | ❌ No | N/A | Missing |
| Store role/school | ❌ No | Discarded | Missing |
| Update Profile | ❌ No | N/A | Missing |

---

## Next Steps to Complete Implementation

1. **Create profile storage function** after sign-up
2. **Create profile retrieval function** for questionnaire/tabs screens
3. **Display user profile info** in the profile tab
4. **Add profile update capability**
5. **(Optional) Create backend endpoint** to secure profile creation

