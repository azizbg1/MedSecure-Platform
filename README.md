# MedSecure

**MedSecure** is a secure full-stack medical platform designed to improve the consultation journey for both patients and doctors through structured pre-consultation workflows, AI-assisted medical summaries and modern healthcare interfaces.

The platform focuses on helping patients prepare their consultations while giving doctors a clearer view of symptoms, history and potential alerts before the appointment begins.

---

## 🩺 Project Vision

MedSecure aims to make medical consultations more efficient by connecting three key steps:

```text
Patient preparation
        ↓
AI-assisted pre-consultation
        ↓
Doctor consultation & reporting
```

The goal is not to replace medical professionals, but to help organize information, reduce repetitive work and improve the quality of preparation before each consultation.

---

## 👤 Patient Experience

The patient space is designed to centralize the main steps of the healthcare journey.

### Main features

- Appointment management
- Pre-consultation questionnaire
- Symptom description
- Medical history access
- Consultation history
- Active prescriptions overview
- Medical reports access
- Secure patient dashboard
- Messaging interface
- Upcoming consultation reminders

The patient can prepare information before the appointment so that the doctor receives a more structured overview before the consultation starts.

---

## 🩺 Doctor Workspace

The doctor dashboard provides a dedicated medical workspace focused on preparation, follow-up and assisted reporting.

### Main features

- Daily appointment schedule
- Patient overview
- Medical history access
- AI-generated pre-consultation reports
- Symptom summaries
- Detected alerts and risk indicators
- Consultation priority indicators
- Assisted medical report workflow
- Voice dictation concept for consultation reports
- Patient records
- Analytics dashboard
- AI assistant workspace

---

## 🤖 AI-Assisted Consultation Workflow

A core concept of MedSecure is the preparation of a structured pre-consultation report.

```text
Patient
  │
  ├── Symptoms
  ├── Questionnaire
  ├── Medical context
  └── Pain / complaint information
          │
          ▼
   AI-assisted analysis
          │
          ├── Structured summary
          ├── Potential alerts
          └── Risk / priority indicator
          │
          ▼
        Doctor
          │
          ▼
Prepared consultation
```

The current interface demonstrates this workflow through AI-generated summaries, warning indicators and consultation preparation views.

---

## 🔐 Security Architecture

MedSecure was designed with healthcare security and access control in mind.

The project architecture includes or plans integration with:

- Keycloak
- OpenID Connect
- JWT authentication
- Role-Based Access Control
- Two-Factor Authentication
- PostgreSQL
- Redis
- MinIO object storage
- Audit and traceability concepts
- Docker-based infrastructure

The Docker environment also includes supporting services for identity, storage, caching and development email testing.

---

## 🧱 Architecture

```text
                    ┌─────────────────────┐
                    │   Next.js Frontend  │
                    │ Patient / Doctor UI │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │   Application API   │
                    │    Flask / REST     │
                    └──────┬──────┬──────┘
                           │      │
             ┌─────────────┘      └─────────────┐
             ▼                                  ▼
      ┌───────────────┐                  ┌──────────────┐
      │  PostgreSQL   │                  │    Redis     │
      └───────────────┘                  └──────────────┘
             │
             ▼
      ┌───────────────┐
      │    MinIO      │
      │ Medical files │
      └───────────────┘

Additional services:
Keycloak · AI Service · Audit / Ledger Service
```

> Some backend and AI services are currently represented as architectural components or prototype integrations and are not all fully connected in the current version.

---

## 🛠️ Tech Stack

### Frontend

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion

### Infrastructure

- Docker
- Docker Compose
- PostgreSQL
- Redis
- MinIO
- Keycloak
- MailHog

### Planned / Service Architecture

- Flask
- FastAPI
- AI service
- REST APIs
- Role-based authentication
- Medical data audit trail

---

## 📱 Main Interfaces

### Landing Page

The application introduces the platform around four main areas:

- Patient space
- Medical AI
- Doctor space
- Cybersecurity

### Doctor Dashboard

The doctor interface includes:

- Daily appointments
- Patient list
- AI pre-consultation summaries
- Alerts
- Risk indicators
- Report preparation
- Analytics

### Patient Dashboard

The patient interface includes:

- Next appointment
- Pre-consultation questionnaire
- Consultation history
- Prescriptions
- Medical records
- Secure access

---

## 🚀 Getting Started

### Requirements

- Node.js
- npm
- Docker
- Docker Compose

### Frontend

```bash
git clone https://github.com/azizbg1/MedSecure-Platform.git
cd MedSecure-Platform
npm install
npm run dev
```

The application will be available at:

```text
http://localhost:3000
```

### Infrastructure

Create your local environment configuration, then run:

```bash
docker compose up -d
```

The Docker stack contains infrastructure services such as PostgreSQL, Keycloak, Redis, MinIO and MailHog.

---

## 📂 Project Structure

```text
MedSecure/
├── src/
│   └── app/
│       ├── login/
│       ├── medecin/
│       ├── patient/
│       └── page.tsx
├── docker-compose.yml
├── package.json
├── next.config.ts
└── README.md
```

---

## 🎯 What This Project Demonstrates

MedSecure showcases several aspects of modern full-stack development:

- Healthcare-oriented UX
- Multi-role application design
- Modern React / Next.js development
- Secure authentication architecture
- Containerized infrastructure
- AI-assisted workflow design
- Doctor / patient dashboards
- Modular service-oriented architecture

---

## 🔮 Future Improvements

- Fully connect the backend services
- Persist patient and consultation data
- Implement complete Keycloak authentication
- Connect the AI pre-consultation service
- Add real speech-to-text consultation dictation
- Generate structured medical reports
- Add medical document upload and storage
- Improve audit logs and traceability
- Add automated tests
- Add CI/CD
- Deploy a production-ready environment

---

## 👨‍💻 Developer

**Aziz Ben Guirat**  
Full-Stack Developer  
[GitHub Profile](https://github.com/azizbg1)

---

> MedSecure is a prototype and portfolio project. It is not intended for real-world medical diagnosis or clinical decision-making.
