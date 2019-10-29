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
      'Deployed and managed cloud based web applications and databases using Cloud Foundry services.',
    ],
    project: 'Periodic Table of Software Tools',
    highlights: [
      'Refactored preliminary JQuery codebase to a container and presentational architecture using React.Js components.',
      'Increased UI responsiveness by 10ms after refactoring JQuery DOM manipulations to React.Js event handlers',
      'First on team to implement Spring Boot React CRUD application',
      'Wrote SQL schema and CRUD operations for persisting application state',
      'Deployed and managed application on Cloud Foundry instance',
    ],
  },
  {
    company: 'BAE Systems',
    icon: '',
    title: 'Embedded Software Engineer',
    dates: 'April 2016 - August 2017',
    location: 'Greenlawn, NY',
    tasks: [
      'Tasked as lead engineer on a greenfield embedded software project using C++ and INTEGRITY RTOS',
      'Applied geolocation algorithms and GUI fields to preexisting flight simulation software.',
      'Assisted in the development of VBA and Python scripts to streamline data analysis, code documentation, and document parsing.',
      'Advocated for the use of a MS Visual Studio plugin that allowed for fast, standardized code documentation templates for department wide use.',
    ],
    project: 'Embedded Messaging Proxy Tool',
    highlights: [],
  },
  {
    company: 'York College - CUNY',
    title: 'College Assistant / Blackboard Developer',
    dates: 'Fall 2015 - Jan 2016',
    location: 'Jamica, NY',
    tasks: [
      'Developed Developed chemistry lab application using Blackboard API.',
      'Installed and maintained Oracle 12c database, Tomcat Apache Server, and Ubuntu software.',
      'Worked with a team of fellow undergrads to deliver working websites for usability testing.',
    ],
    project: '',
    highlights: [],
  },
  {
    company: 'US Air Force',
    title: 'Aircraft Technician for Electrical and Environmental Systems',
    dates: 'Sept 2004 - Sept 2008',
    location: 'Travis - AFB, CA',
    tasks: [
      'Accurately troubleshot electrical and environmental discrepancies.',
      'Successfully led aircraft maintenance teams in during two tours.',
      'Received an honorable discharge after four years of active service.',
    ],
    project: '',
    highlights: [],
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
