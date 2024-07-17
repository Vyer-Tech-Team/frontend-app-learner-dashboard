import {
  AvatarButton,
  Dropdown, Nav, Navbar,
} from '@openedx/paragon';
import React from 'react';
import { AppContext } from '@edx/frontend-platform/react';
import './index.scss';
import { getConfig } from '@edx/frontend-platform';
import { ArrowDropDown } from '@openedx/paragon/icons';
import CourseIcon from '../../assets/course-icon.svg';
import UserIcon from '../../assets/user-icon.svg';

const CustomHeader = () => {
  const { authenticatedUser } = React.useContext(AppContext);

  return (
    <div className="navigation-wrapper">
      <div className="container-xl">
        <Navbar className="custom-navigation">
          <Navbar.Brand className="custom-brand" href="/learner-dashboard">
            {/* TODO dynamic logos we have part of solution in frontend-component-header header */}
            <img height={35} src="https://lms-logos.s3.amazonaws.com/Vector.png" alt="logo" />
          </Navbar.Brand>
          <div className="custom-nav-bar">
            <Nav.Link className="custom-nav-link" href="/learner-dashboard/"><img src={CourseIcon} alt="courses icon" />Courses</Nav.Link>
            {
              authenticatedUser && (
              <Dropdown className="user-dropdown pr4">
                <Dropdown.Toggle
                  className="custom-dropdown-button"
                  as={AvatarButton}
                  src={UserIcon}
                  id="user"
                  variant="tertiary"
                  iconAfter={ArrowDropDown}
                >
                  <span data-hj-suppress className="d-md-inline">
                    {authenticatedUser.username}
                  </span>
                </Dropdown.Toggle>
                <Dropdown.Menu className="dropdown-menu-right custom-dropdown-menu">
                  <Dropdown.Item href={getConfig().LOGOUT_URL}>
                    Logout
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              )
            }
          </div>
        </Navbar>
      </div>
    </div>
  );
};

export default CustomHeader;
