import { SIDEBAR_VISIBILITY} from './../constants';

const initialState = { isOpen: true};

export const sidebarVisibility = (state = initialState, actions) => {
    switch (actions.type){
        case SIDEBAR_VISIBILITY:
            return {
                ...state, 
                isOpen: !state.isOpen
            };
        default:
            return state;
    }
}