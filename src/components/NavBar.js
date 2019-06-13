import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignLeft } from '@fortawesome/free-solid-svg-icons';
import { Navbar, Button, NavbarToggler, Collapse, Nav, NavItem, NavLink} from 'reactstrap';

const NavBar = ({ toggle, toggleCollapse, isOpenCollapse }) => (
    <Navbar color="light" light className="navbar shadow-sm p-3 mb-5 bg-white rounded" expand="md">
        <Button color="info" onClick={toggle}>
            <FontAwesomeIcon icon={faAlignLeft}/>
        </Button>
        <NavbarToggler onClick={toggleCollapse}/>
        <Collapse isOpen={isOpenCollapse} navbar>
            <Nav className="ml-auto" navbar>
                <NavItem >
                    <NavLink href="#">page</NavLink>
                </NavItem>
                <NavItem >
                    <NavLink href="#">page</NavLink>
                </NavItem>
                <NavItem >
                    <NavLink href="#">page</NavLink>
                </NavItem>
                <NavItem >
                    <NavLink href="#">page</NavLink>
                </NavItem>
            </Nav>
        </Collapse>
    </Navbar>
);



NavBar.propTypes = {
    toggle: PropTypes.func.isRequired,
    toggleCollapse: PropTypes.func.isRequired,
    isOpenCollapse:PropTypes.bool.isRequired,
};


export default NavBar;