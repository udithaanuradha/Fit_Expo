import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'EduSync | FIT Project Management System',
  description: 'Project management system for the University of Moratuwa, Faculty of Information Technology — connecting students, supervisors, coordinators, admins, and industry mentors.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
