//import React from 'react'; // Import React
import { Sidebar } from 'flowbite-react';
//import { Link } from 'react-router-dom';
import { GrProjects, GrContactInfo } from "react-icons/gr";
import { FaHome } from "react-icons/fa";
import '../index.css';

function ComponentSidebar() {
    return (
        <Sidebar aria-label="Sidebar with logo branding example">
          <Sidebar.Logo href="#" img="/favicon.svg" imgAlt="Flowbite logo">
            Flowbite
          </Sidebar.Logo>
          <Sidebar.Items>
            <Sidebar.ItemGroup style={{ padding: "10px", marginBottom: "100px", fontSize: "25px"}}>
              <Sidebar.Item href="#" icon={FaHome}>
                Home
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={GrProjects}>
                Projects
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={GrContactInfo}>
                Contact Info
              </Sidebar.Item>
              
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      );
    }
    /* return (
    <Sidebar aria-label="Default sidebar example">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item as={Link} to="/" icon={<FaHome />} style={{ padding: '10px', marginBottom: '20px' }}>
            Home
          </Sidebar.Item>
          <Sidebar.Item as={Link} to="/projects" icon={<GrProjects />}>
            Projects
          </Sidebar.Item>
          <Sidebar.Item as={Link} to="/contact-info" icon={<GrContactInfo />}>
            Contact Info
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
 */
export default ComponentSidebar;
