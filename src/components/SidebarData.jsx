import React from 'react'
//import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as RiIcons from 'react-icons/ri';
import *as  GrIcons from "react-icons/gr";

export const SidebarData = [
    
    {
        title: 'Home',
        path: '/',
        icon: React.createElement(AiIcons.AiFillHome),
        cName: 'nav-text'
    },
    {
    title: 'Projects',
        path: '/projects',
        icon: React.createElement(GrIcons.GrProjects),
        cName: 'nav-text'
    },
    {
    title: 'Contact Info',
        path: '/contactInfo',
        icon: React.createElement(RiIcons.RiContactsLine),
        cName: 'nav-text'
    }
]