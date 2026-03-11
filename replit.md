# Festival NATUR - Full Stack Application

## Overview
Festival NATUR is the official website for the first sustainable tourism festival in Colombia, taking place on August 14–15, 2026 at Kinder (Calle 59 #6-21, Chapinero, Bogotá). The platform serves as a public-facing festival site with ticket sales, agenda, editorial content, and a B2B portal for companies and sponsors.

## Site Structure (8 pages only)
- **HOME** — `/` — 7 sections: Hero, ¿Qué vas a encontrar?, Entradas, Stand, Historias, Aliados, Contacto + Footer
- **ENTRADAS** — `/tickets` — 1 día $50.000 / 2 días $70.000 (NO tickets gratis)
- **AGENDA** — `/agenda`
- **¿QUÉ VAS A ENCONTRAR?** — `/que-vas-a-encontrar`
- **HISTORIAS NATUR** — `/historias` (Noticias.tsx)
- **NOSOTROS** — `/nosotros` (About.tsx)
- **CONTACTO** — `/contacto` (Contact.tsx)
- **PORTAL EMPRESAS** — `/portal-empresas`

### Homepage Sections (Index.tsx)
1. Hero — full-screen bg image + logo + botón COMPRAR ENTRADAS
2. QueVasPreview — preview de 3 subsecciones + botón DESCUBRIR
3. EntradasPreview — resumen visual 1-día/2-días + botón COMPRAR
4. Stand — sección Reserva tu Stand
5. HistoriasPreview — 3 artículos preview + botón VER HISTORIAS
6. Partners — grid de logos aliados
7. Location — venue Kinder
8. ContactForm — formulario rápido (email destino: info@festivalnatur.com)
9. Footer — logo, menú completo, contacto, redes, legal

### Navigation Requirements
- Logo always directs to HOME
- Menu visible at all times (sticky fixed header)
- Fully responsive (desktop + tablet + mobile)
- Portal Viajeros REMOVED from navigation

## User Preferences
Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript, Vite build tool, Wouter for routing.
- **Styling**: Tailwind CSS with a custom design system, `font-gasoek` and `Unbounded` fonts.
- **UI Components**: Radix UI and shadcn/ui.
- **State Management**: React Context for authentication, TanStack Query for server state.
- **Form Handling**: React Hook Form with Zod validation.
- **Design Philosophy**: Emphasizes brutalist and glassmorphism aesthetics. Features include organic background textures, interactive cards, and consistent typography. White themes are used for marketplace and dashboards, with dark themes for immersive experiences.
- **Color System**: Two-mode design token system using cream (#FCF8EE) for light mode, dark green (#0a1a0a) for dark mode, and NATUR brand green (#cad95e) as an accent.

### Backend Architecture
- **Runtime**: Node.js with TypeScript.
- **Framework**: Express.js for RESTful API.
- **Database ORM**: Drizzle ORM with PostgreSQL.
- **Security**: Proper client/server separation with API authentication and session management.

### Project Structure
- `client/`: Frontend React application
- `server/`: Backend Express API
- `shared/`: Shared types and schemas
- `migrations/`: Database migrations

### Key Features and Design Decisions
- **Unified Authentication**: Single system for "Portal Empresas" (businesses) and "Portal Viajeros" (travelers) with distinct login flows.
- **Interactive Map**: Mapbox-based 3D map with natural terrain and custom markers for businesses and experiences, serving as a central navigation element. Includes interactive company bubbles with real data and filtering.
- **Comprehensive Directories**:
    - **Portal Empresas (B2B)**: Minimalist, mobile-first dashboard with full-screen interactive map, transparent header navigation, and optimized mobile views. Includes a 6-step wizard for businesses to create and manage offerings.
    - **Portal Viajeros (B2C)**: Marketplace for browsing, filtering, and booking sustainable tourism experiences.
- **Messaging System**: Simple, B2B-focused chat system.
- **Event Agenda**: Two-division agenda (VIVE NATUR and NATUR PRO) with filtering and brutalist design.
- **Ticket Sales**: Dedicated page with different access tiers.
- **User Categories**: Robust classification for various tourism sector roles with specialized subcategories.
- **Admin Dashboard**: Comprehensive panel for user management, experience approval, and platform statistics.
- **Accessibility Enhancement**: Comprehensive features including high contrast modes, font size adjustment, reduced motion, link underlining, enhanced focus, and keyboard navigation (WCAG 2.1 compliant).
- **Visuals & UX**: Consistent application of glassmorphism, brutalist design elements, and white/dark theme contrast, focusing on high contrast and simplified typography.
- **7-Step User Flow System**: Complete user journey from registration to traveler map visibility with automatic feature activation, progress tracking, and verification levels.
- **Facebook-Style Profile System**: Redesigned profile view with cover photo, circular profile picture, and Facebook-inspired layout. Includes a 4-tab edit profile system and a dedicated configuration page for account management, notifications, and privacy settings.

## Recent Changes

### Registration System Expansion (September 2025)
- **New Tourism Categories**: Added Guía de turismo, Intérprete de idiomas, and DMC (Destination Management Company) to expand professional coverage
- **Enhanced Subcategories**: Integrated Turismo comunitario, Turismo regenerativo, and Turismo de naturaleza as specialized tourism types
- **Streamlined Registration Flow**: Reduced from 10+ steps to 4 essential steps:
  1. Basic Information
  2. Company Information  
  3. Complete Profile Configuration
  4. Location & Emergency Contact
- **Smart Address Input**: Created MapboxAddressInput component with coordinate integration for Colombian cities
- **Regional City Selector**: Implemented CitySelector with Colombian cities organized by regions (Andina, Caribe, Pacífica, Orinoquía, Amazónica)
- **Enhanced Country Selection**: Updated CountrySelector with focus on Spanish-speaking countries and major tourism markets
- **Form Validation**: Integrated all new components with proper form validation and error handling

### Technical Improvements
- Comprehensive UX/UI optimization across all Portal Empresas views with proper spacing and mobile responsiveness
- Fixed overlapping elements and layout issues between sidebar, pages, and cards
- Enhanced map view with improved mobile map point visibility and coordinate validation
- Automated default values for removed registration steps to maintain data integrity

## External Dependencies

- `@neondatabase/serverless`: Serverless PostgreSQL connection
- `drizzle-orm`: Type-safe database ORM
- `@tanstack/react-query`: Server state management
- `wouter`: Lightweight routing
- `@radix-ui/*`: Accessible UI primitives
- `tailwindcss`: Utility-first CSS framework
- `react-hook-form`: Form state management
- `zod`: Schema validation
- `date-fns`: Date manipulation and formatting
- `ws`: WebSocket server
- `uuid`: Unique ID generation