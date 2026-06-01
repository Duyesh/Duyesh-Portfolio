import dns1 from '../assets/projects/dns-email/dns-1.png'
import dns2 from '../assets/projects/dns-email/dns-2.png'
import email1 from '../assets/projects/dns-email/email-1.png'
import email2 from '../assets/projects/dns-email/email-2.png'

import excel1 from '../assets/projects/excel-analytics/excel-1.png'
import excel2 from '../assets/projects/excel-analytics/excel-2.png'
import excel3 from '../assets/projects/excel-analytics/excel-3.png'
import excel4 from '../assets/projects/excel-analytics/excel-4.png'

import task1 from '../assets/projects/team-task/team-task-1.png'
import task2 from '../assets/projects/team-task/team-task-2.png'
import task3 from '../assets/projects/team-task/team-task-3.png'


const projectsData = [

    {
        id: 'dns',

        title: 'DNS & Email Spoofing Detection Tool',

        category: 'Cyber Security',

        description:
            'A cybersecurity extension designed to identify DNS spoofing attacks and email spoofing threats through intelligent detection mechanisms, monitoring, and security analysis.',

        tech: [
            'React',
            'Node.js',
            'Express',
            'MongoDB',
            'Cyber Security'
        ],

        github:
            'https://github.com/Duyesh/CyberDetect.git',

        screenshots: [
            dns1,
            dns2,
            email1,
            email2
        ]
    },

    {
        id: 'excel',

        title: 'Excel Analytics Platform',

        category: 'Data Analytics',

        description:
            'A modern analytics platform that allows users to upload spreadsheets, process datasets, and visualize insights through charts, dashboards, and interactive reporting.',

        tech: [
            'React',
            'Node.js',
            'MongoDB',
            'Charts',
            'Analytics'
        ],

        github:
            'https://github.com/Duyesh/Excel-Analytics-Platform.git',

        screenshots: [
            excel1,
            excel2,
            excel3,
            excel4
        ]
    },

    {
        id: 'team',

        title: 'Team Task Manager',

        category: 'Productivity',

        description:
            'A collaborative task management application focused on team productivity, workflow tracking, project organization, and real-time progress management.',

        tech: [
            'React',
            'Node.js',
            'MongoDB',
            'Task Management'
        ],

        github:
            'https://github.com/Duyesh/Team-Task-Manager.git',

        screenshots: [
            task1,
            task2,
            task3,
        ]
    }

]

export default projectsData