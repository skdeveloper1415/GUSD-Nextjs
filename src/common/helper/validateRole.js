import { reactLocalStorage } from 'reactjs-localstorage';
import { USER_TYPES } from './enum';

// function ValidateHRRole() {
//     if (reactLocalStorage.get('loggedUserRole') === USER_TYPES.HR) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }

function ValidateEmployeeRole() {
    if (reactLocalStorage.get('loggedUserRole') === USER_TYPES.Employee) {
        return true;
    }
    else {
        return false;
    }
}

export { ValidateEmployeeRole };