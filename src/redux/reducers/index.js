import { combineReducers } from 'redux';
import {sidebarVisibility} from './sidebarVisivility';
import {navbarCollapse} from './navbarCollapse';

export default combineReducers({ 
    sidebarVisibility,
    navbarCollapse
 });