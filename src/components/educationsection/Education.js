import React from 'react';
import './education.css';

const Education = () => {
  const educationData = [
    {
      institution: 'Goverment Engineering College Modasa',
      degree: 'Bachelor of Science in Information Technology',
      startYear: 2021,
      endYear: 2025,
      description: 'Studied various aspects of computer science including algorithms, data structures, and software engineering.'
    },
    {
      institution: 'Kamala Rani Sanghi Public School',
      degree: 'HSC',
      startYear: 2020,
      endYear: 2021,
      description: 'Focused on science and mathematics, participated in computer science club and science fairs.'
    }
  ];

  return (
    <section id='education' className="education-section">
      <h2>Education</h2>
      <table className="education-table">
        <thead>
          <tr>
            <th>Institution</th>
            <th>Degree</th>
            <th>Years</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {educationData.map((item, index) => (
            <tr key={index}>
              <td>{item.institution}</td>
              <td>{item.degree}</td>
              <td>{item.startYear} - {item.endYear}</td>
              <td>{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Education;
