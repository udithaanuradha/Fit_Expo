'use client';

import React from 'react';

const USER_ROLES = [
  {
    title: 'Students',
    description:
      'Submit proposals, upload deliverables, track project milestones, and communicate with supervisors and mentors in real time.',
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c0 1.1 2.7 3 6 3s6-1.9 6-3v-5" />
      </svg>
    ),
  },
  {
    title: 'Coordinators',
    description:
      'Oversee all ongoing projects, assign supervisors, manage timelines, and generate faculty-wide progress reports.',
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
  {
    title: 'Supervisors',
    description:
      'Review student submissions, provide feedback on deliverables, schedule meetings, and evaluate project progress.',
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="m16 11 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Admin',
    description:
      'Manage user accounts, configure system settings, control role permissions, and maintain platform-wide data integrity.',
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    title: 'Industry Mentors',
    description:
      'Guide students on industry practices, review technical deliverables, and provide professional feedback on project outcomes.',
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
  },
];

// Configuration for project links
const LIVE_DEMO_URL = 'https://drive.google.com/file/d/1CwHmddTr-0ZRYBSFeCyOibaoCJ3SaokO/view?usp=sharing';
const FRONTEND_REPO_URL = 'https://github.com/udithaanuradha/Edusync';
const BACKEND_REPO_URL = 'https://github.com/udithaanuradha/Edusync-Backend';

export default function Home() {
  const [codebaseOpen, setCodebaseOpen] = React.useState(false);

  return (
    <div className="site-wrapper">
      {/* Ambient background glow */}
      <div className="ambient-glow" aria-hidden="true" />

      {/* Header */}
      <header className="site-header">
        <div className="nav-container">
          <a href="#" className="brand-link" id="brand-logo" aria-label="EduSync Home">
            <div className="brand-icon-wrapper">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
                <path d="M6 6h10" />
                <path d="M6 10h10" />
                <path d="m14 15 2 2 4-4" />
              </svg>
            </div>
            <h1 className="brand-text">EduSync</h1>
          </a>

          <nav aria-label="Main Navigation">
            <ul className="nav-links">
              <li><a href="#roles">User Roles</a></li>
              <li><a href="#about">About</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main>
        <section className="hero-section">
          <div className="badge-tag">
            <span className="badge-dot" />
            <span>University of Moratuwa &middot; Faculty of Information Technology</span>
          </div>

          <h2 className="hero-title">
            FIT Project Management <span className="hero-highlight">System</span>
          </h2>

          <p className="hero-subtitle">
            A centralized platform for managing undergraduate projects — connecting students,
            supervisors, coordinators, industry mentors, and administrators throughout
            the entire project lifecycle.
          </p>

          {/* Navigation Buttons — stacked vertically */}
          <div className="quick-links">
            {/* Live Demo button */}
            <a
              href={LIVE_DEMO_URL}
              target={LIVE_DEMO_URL.startsWith('http') ? '_blank' : undefined}
              rel={LIVE_DEMO_URL.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="quick-link-btn"
            >
              <div className="quick-link-btn-content">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
                <span>Live Demo</span>
              </div>
              <span className="live-pill">Live</span>
            </a>

            {/* Codebase dropdown item with Frontend & Backend buttons */}
            <div className="codebase-wrapper">
              <button
                type="button"
                className={`quick-link-btn codebase-toggle-btn ${codebaseOpen ? 'is-active' : ''}`}
                onClick={() => setCodebaseOpen((prev) => !prev)}
                aria-expanded={codebaseOpen}
                aria-label="Toggle codebase repository links"
              >
                <div className="quick-link-btn-content">
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                  </svg>
                  <span>Codebase</span>
                </div>
                <svg
                  className={`chevron-icon ${codebaseOpen ? 'rotate-180' : ''}`}
                  width="18"
                  height="18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>

              {codebaseOpen && (
                <div className="codebase-sub-buttons">
                  <a
                    href={FRONTEND_REPO_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sub-codebase-btn frontend-btn"
                  >
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <rect width="20" height="14" x="2" y="3" rx="2" />
                      <line x1="8" x2="16" y1="21" y2="21" />
                      <line x1="12" x2="12" y1="17" y2="21" />
                    </svg>
                    <span>Frontend</span>
                    <svg className="external-icon" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" x2="21" y1="14" y2="3" />
                    </svg>
                  </a>

                  <a
                    href={BACKEND_REPO_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sub-codebase-btn backend-btn"
                  >
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
                      <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
                      <line x1="6" x2="6.01" y1="6" y2="6" />
                      <line x1="6" x2="6.01" y1="18" y2="18" />
                    </svg>
                    <span>Backend</span>
                    <svg className="external-icon" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" x2="21" y1="14" y2="3" />
                    </svg>
                  </a>
                </div>
              )}
            </div>

            <a href="#user-guide" className="quick-link-btn">
              <div className="quick-link-btn-content">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
                  <path d="M8 7h6" />
                  <path d="M8 11h8" />
                </svg>
                <span>User Guide</span>
              </div>
            </a>

            <a href="#references" className="quick-link-btn">
              <div className="quick-link-btn-content">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M12 2 2 7l10 5 10-5-10-5Z" />
                  <path d="m2 17 10 5 10-5" />
                  <path d="m2 12 10 5 10-5" />
                </svg>
                <span>References &amp; Acknowledgements</span>
              </div>
            </a>
          </div>
        </section>

        {/* User Roles Grid */}
        <section className="features-container" id="roles">
          <div className="section-label">
            <h2>Who Uses EduSync</h2>
            <p>Five key roles collaborating across the project lifecycle</p>
          </div>

          <div className="cards-grid cards-grid-5">
            {USER_ROLES.map((role) => (
              <article className="feature-card" key={role.title}>
                <div className="feature-icon">{role.icon}</div>
                <h3 className="feature-title">{role.title}</h3>
                <p className="feature-description">{role.description}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="site-footer" id="about">
        <p className="footer-uni">
          Faculty of Information Technology &middot; University of Moratuwa
        </p>
        <p>
          &copy; {new Date().getFullYear()} <span className="footer-brand">EduSync</span>. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
