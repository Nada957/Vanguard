'use client';

import React from 'react';
import jsPDF from 'jspdf';

interface PDFExportProps {
  identity: any;
  skills: any[];
  projects: any[];
  experiences: any[];
}

export const PDFExport: React.FC<PDFExportProps> = ({ identity, skills, projects, experiences }) => {
  const generatePDF = () => {
    const pdf = new jsPDF();
    let yPosition = 20;

    // Header
    pdf.setFontSize(24);
    pdf.text(identity.user_name, 20, yPosition);
    yPosition += 15;

    pdf.setFontSize(12);
    pdf.text(identity.bio, 20, yPosition);
    yPosition += 10;

    pdf.setFontSize(10);
    pdf.text(`Email: ${identity.email}`, 20, yPosition);
    yPosition += 20;

    // Skills
    pdf.setFontSize(16);
    pdf.text('Skills', 20, yPosition);
    yPosition += 10;

    skills.forEach(skill => {
      pdf.setFontSize(10);
      pdf.text(`${skill.icon ? skill.icon + ' ' : ''}${skill.name}: ${skill.percentage}%`, 20, yPosition);
      yPosition += 8;
    });

    yPosition += 10;

    // Experience
    if (experiences && experiences.length > 0) {
      pdf.setFontSize(16);
      pdf.text('Experience', 20, yPosition);
      yPosition += 10;

      experiences.forEach(exp => {
        pdf.setFontSize(12);
        pdf.text(`${exp.role} at ${exp.company}`, 20, yPosition);
        yPosition += 8;
        pdf.setFontSize(10);
        pdf.text(`${exp.period}`, 20, yPosition);
        yPosition += 6;
        pdf.text(exp.description.substring(0, 100) + '...', 20, yPosition);
        yPosition += 12;
      });
    }

    // Projects
    if (projects && projects.length > 0) {
      pdf.setFontSize(16);
      pdf.text('Projects', 20, yPosition);
      yPosition += 10;

      projects.forEach(project => {
        pdf.setFontSize(12);
        pdf.text(project.title, 20, yPosition);
        yPosition += 8;
        pdf.setFontSize(10);
        pdf.text(project.link, 20, yPosition);
        yPosition += 12;
      });
    }

    pdf.save(`${identity.user_name}_resume.pdf`);
  };

  return (
    <button
      onClick={generatePDF}
      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
    >
      Download Resume PDF
    </button>
  );
};