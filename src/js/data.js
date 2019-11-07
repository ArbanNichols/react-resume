// Static data
// TODO: Create API for resume data.
const resume = [
  {
    company: 'J.P.Morgan Chase & Co',
    title: 'Frontend Developer',
    dates: 'August 2017 - May 2018',
    location: 'Brooklyn, NY',
    tasks: [
      'Designed React.Js component UI for single page applications',
      'Developed persistence layer components for Java web servlets using Spring+Hibernate/MyBatis',
      'Deployed and managed cloud based web applications and databases using Cloud Foundry services',
    ],
    project: 'Periodic Table of Software Tools',
    description: 'Software teams throughout the branch would often disagree on what software to use for both development and DevOps. This tool created a forum for conflict resolution between engineers, thus establishing the elements of a project.',
    highlights: [
      'Refactored preliminary JQuery codebase to a container and presentational architecture using React.Js components',
      'Increased UI responsiveness by 10ms after refactoring JQuery DOM manipulations to React.Js event handlers',
      'First on team to successfully implement Spring Boot React CRUD application',
      'Wrote SQL schema and CRUD operations for persisting application state',
      'Deployed and managed application on Cloud Foundry instance',
    ],
  },
  {
    company: 'BAE Systems',
    title: 'Embedded Software Engineer',
    dates: 'April 2016 - August 2017',
    location: 'Greenlawn, NY',
    tasks: [
      'Contributed to several projects aimed at upgrading avionics systems on fighter aircraft to support ADS-B',
      'Architected RTOS C++ applications for testing AdaCore software',
      'Refactored Windows software developed for testing and calibrating embedded equipment',
      'Assisted in the development of VBA and Python scripts to streamline data analysis, code documentation, and document parsing',
      'Guided interns through completion of C++ socket projects',
    ],
    project: 'Embedded Messaging Proxy Tool',
    description: 'The Ada developers needed hardware from an outside company to meet a one month deadline. Unfortunately, that hardware wasn\'t going to be ready until 2 months away. I was tasked to architect and implement an application that would serve as a proxy for the missing hardware.',
    highlights: [
      'Tasked as lead engineer on a greenfield embedded software project',
      'Wrote SRS highlighting key deliverables, sotware components, interfaces, and class diagram',
      'Implemented an INTEGRITY RTOS application that booted to either a ZC706 Evaluation Board or PC',
      'First successful project using INTEGRITY RTOS for the entire department',
    ],
  },
  {
    company: 'City University of New York',
    title: 'College Assistant / Blackboard Developer',
    dates: 'Fall 2015 - Jan 2016',
    location: 'Jamica, NY',
    tasks: [
      'Developed chemistry lab web application using Blackboard API',
      'Worked with a team of fellow undergrads to deliver working websites for usability testing',
    ],
    project: 'Online Chemistry Lab Assignments',
    description: 'Every semester at York College, Chem 101 has hundreds of paper labs to grade. A team of undergrad scholars and I took on the task of converting 12 paper labs to online assignments on Blackboard.',
    highlights: [
      'Installed, configured, and maintained Oracle 12c database and Tomcat Apache Servers on Linux OS',
      'Built and tested WAR file database configurations before deploying to the Blackbaord servers',
      'Implemented persistence layer for each lab allowing for data visibility to both faculty and students',
    ],
  },
  {
    company: 'US Air Force',
    title: 'Aircraft Technician for Electrical and Environmental Systems',
    dates: 'Sept 2004 - Sept 2008',
    location: 'Travis - AFB, CA',
    tasks: [
      'Routinely troubleshot electrical and environmental discrepancies',
      'Strictly adhered to safety standards set forth by Quality Assurance teams resulting in positve cross checks every quarter',
      'Safely serviced the aircraft with several hazardous materials including JP-8 fuel, liquid nitrogen, and liquid oxygen',
    ],
    project: 'Operation Enduring Freedom',
    description: 'In 2008 I served two 4 month tours in Iraq performing aviation maintenance, sortie dispatch, and cargo loading.',
    highlights: [
      'Solved an engine fault for a stranded C-5 aircraft which led to a letter of commendation',
      'Serviced and repaired C-5, C-130, and C-17 aircraft',
      'Volunteered at the base hospital aiding both military and civilian patients',
      'Escorted Vice President Dick Cheney\'s C-17 arrival party on the filghtline',
    ],
  },
];

const tools = [
  'react v16.8.3',
  'react-bootstrap v1.0.0-beta.5',
  'react-router-dom v4.3.1',
  'webpack v4.29.6',
  'babel/core v7.3.4',
  'react-transition-group v4.0.0',
  'react-hooks',
  'sass',
  'npm',
  'nodejs',
  'ecmascript 2016',
];

export { resume, tools };
