import { Sidebar } from 'flowbite-react';
//import { HiArrowSmRight, HiShoppingBag, HiTable } from 'react-icons/hi';
import { GrProjects, GrContactInfo } from "react-icons/gr";
import { FaHome } from "react-icons/fa";
import '../index.css'
function ComponentSidebar() {
try {

  return (
    <Sidebar aria-label="Default sidebar example">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={FaHome} style={{ padding: '10px', marginBottom: '100px' }}>
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
catch (error) {
  console.error(error);
}
}
export default ComponentSidebar