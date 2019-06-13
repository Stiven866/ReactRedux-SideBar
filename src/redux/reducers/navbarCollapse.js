import { NAVBAR_COLLAPSE} from './../constants';
const intialState= {isOpenCollapse:false} 
export const navbarCollapse = (state = intialState, actions) => {
    switch (actions.type){
        case NAVBAR_COLLAPSE:
                return {
                    ...state, 
                    isOpenCollapse: !state.isOpenCollapse
        };
        default:
            return state;
    }
}