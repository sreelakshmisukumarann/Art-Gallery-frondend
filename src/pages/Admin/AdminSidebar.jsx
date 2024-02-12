import React from 'react'
import './Sidebar.css'
import { Menu, MenuItem, Sidebar, SubMenu } from 'react-pro-sidebar'
import { Link } from 'react-router-dom'

function AdminSidebar() {
  return (
    <>
      
        <Sidebar style={{height:'100vh',backgroundColor:'white'}} className='shadow'>
            <img src="https://th.bing.com/th/id/OIP.dtAM7B6b8cU4LNXY3XlCHAHaJL?w=163&h=202&c=7&r=0&o=5&dpr=1.5&pid=1.7" width={'200px'} alt="" />
        <Menu className='mt-5'
         menuItemStyles={{
            button: {
              // the active class will be added automatically by react router
              // so we can use it to style the active menu item
              [`&.active`]: {
                backgroundColor: '#13395e',
                color: '#b6c8d9',
              },
            },
          }}>
    {/* <SubMenu label="Charts">
      <MenuItem component={<Link to="/admin-dashboard"/>}> Dashboard </MenuItem>
    </SubMenu> */}
    <MenuItem component={<Link to="/admin-dashboard"/>}>Dashboard</MenuItem>
    <MenuItem component={<Link to="/adminview-work"/>}>Art Work</MenuItem>
    <MenuItem component={<Link to="/adminview-userlist"/>}>User List</MenuItem>
    <MenuItem component={<Link to="/adminview-artist"/>}>Artist List</MenuItem>
    <MenuItem component={<Link to="/admin-login"/>}>Logout</MenuItem>
  </Menu>
        </Sidebar>
    </>
  )
}

export default AdminSidebar