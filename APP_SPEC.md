# Iterum Application Specification

## Overview

Iterum is an AI-powered job interview practice platform. It helps users prepare for real interview processes by creating role-specific job profiles, uploading their resume, and practicing interview rounds tailored to the job they want.

The goal is to make interview preparation feel structured, realistic, and repeatable. A user should be able to define the job they are targeting, generate relevant practice rounds, answer interview questions, and improve through feedback over time.

## Core Concept

Users create job profiles for specific applications or target companies. For example, a user could create a profile for a Google software engineering role, add the job description, define the role, list qualifications, and upload their resume.

From that profile, Iterum can generate interview practice rounds that reflect the job and the user's background.

## Job Profiles

A job profile represents one target opportunity. It can include:

- Company name
- Job title or role
- Job description
- Required qualifications
- Preferred qualifications
- Skills and technologies mentioned in the posting
- Notes about the company, team, or interview process
- Uploaded resume connected to the application

These profiles become the context for AI-generated interview practice.

## Resume Upload

Users can upload a resume and associate it with one or more job profiles. The resume helps the AI understand the user's experience, projects, skills, and background.

The platform can use resume content to make interview questions more personal and realistic, such as asking about past projects, technical decisions, leadership experience, or gaps between the resume and the job description.

## Interview Rounds

Users can create multiple interview rounds for each job profile. Common interview rounds may include:

- HR screening
- Recruiter screen
- Behavioral interview
- Technical interview
- Coding interview
- System design interview
- Hiring manager interview
- Team fit interview
- Final interview

Each round can have its own focus, question style, evaluation criteria, and AI feedback.

## AI Practice Flow

A typical practice flow could look like this:

1. The user creates a job profile.
2. The user adds the role, job description, qualifications, and company details.
3. The user uploads their resume.
4. The user creates or selects interview rounds.
5. The AI generates questions based on the job profile, resume, and selected round type.
6. The user answers the questions.
7. The AI provides feedback, follow-up questions, and improvement suggestions.

## Authentication

Iterum uses Supabase Auth for authentication.

Supported authentication methods include:

- OAuth login
- Email and password login

OAuth providers can be configured through Supabase depending on the needs of the application.

## Backend Architecture

Iterum does not use a separate traditional backend service. The application relies on Supabase for backend capabilities.

Supabase will provide:

- Authentication
- Database storage
- File storage for uploaded resumes
- Row-level security policies
- Edge Functions for server-side logic

Any backend-style operations should be implemented through Supabase Edge Functions rather than a separate API server.

## Frontend Architecture

The app is built with React and Tailwind CSS.

Frontend data fetching and server-state management should use TanStack Query. This will help manage loading states, caching, refetching, mutations, and synchronization with Supabase-backed data.

Client-side application state should use Zustand. This can be used for local UI state, active interview sessions, temporary form state, selected job profile context, and other state that does not need to live directly in the server cache.

## Planned Technology Stack

- React
- Tailwind CSS
- Supabase Auth
- Supabase Database
- Supabase Storage
- Supabase Edge Functions
- TanStack Query
- Zustand

## Product Goals

- Help users practice interviews based on real job descriptions.
- Personalize interview questions using resume data.
- Support common interview round types.
- Keep the architecture simple by using Supabase instead of a separate backend.
- Make interview preparation repeatable across different companies and roles.

## Future Ideas

- Interview performance history
- AI-generated scoring by round
- Suggested answer improvements
- Resume-to-job match analysis
- Practice streaks and preparation plans
- Voice-based interview simulation
- Company-specific interview templates
- Exportable feedback reports
