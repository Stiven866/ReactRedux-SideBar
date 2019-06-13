import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';
import SideBar from './../components/sidebar/SideBar';
import NavBar from './../components/NavBar';
import { Container } from 'reactstrap';
import { sidebarVisibility, navbarCollapse } from './../redux/actions';
import { getIsOpen, getIsOpenCollapse } from './../selectors';


class HomeContainer extends Component {
    
    toggle = () => {
        this.props.sidebarVisibility();
    }
    toggleCollapse = () => {
        this.props.navbarCollapse();
    }
    render() {
            
        return (
            <div className="App wrapper">
                <SideBar toggle={this.toggle} isOpen={this.props.isOpen}/>
                <Container fluid className={classNames('content', {'is-open':this.props.isOpen})}>
                    <NavBar 
                        toggle={this.toggle} 
                        toggleCollapse={this.toggleCollapse} 
                        isOpenCollapse={this.props.isOpenCollapse}/>
                </Container>
            </div>
            
        );
    }
}

HomeContainer.propTypes = {
    sidebarVisibility: PropTypes.func.isRequired,
    navbarCollapse:PropTypes.func.isRequired,
}


const mapStateToProps = state => ({
    isOpen: getIsOpen(state),
    isOpenCollapse: getIsOpenCollapse(state)
     
})

const mapDispatchToProps = dispatch => ({
    sidebarVisibility: payload => dispatch(sidebarVisibility(payload)),
    navbarCollapse: payload => dispatch(navbarCollapse(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);