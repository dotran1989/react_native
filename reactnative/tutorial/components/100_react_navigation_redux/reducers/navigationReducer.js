import AppNavigator from '../navigation/navigationStack';

// perform this action to navigate screen 1
const actionForScreen1 = AppNavigator.router.getActionForPathAndParams("screen1");
// console.log(`actionForScreen1: ${JSON.stringify(actionForScreen1)}`);

// state for this action
const initialState = AppNavigator.router.getStateForAction(actionForScreen1);
// console.log(`initialState: ${JSON.stringify(initialState)}`);

// get new state base on action and current state
const navigationReducer = (state = initialState, action) => {

    // **action**  will be of type: {"type": "Navigation/NAVIGATE", "routeName": SOME_ROUTE}

    const newState = AppNavigator.router.getStateForAction(action, state);
    // console.log(`newState: ${JSON.stringify(newState)}`);
    return newState || state;
};

export default navigationReducer;

// Action
// actionForScreen1: {"type":"Navigation/NAVIGATE","routeName":"screen1"}

// initialState
// {  
//     "key":"StackRouterRoot",
//     "isTransitioning":false,
//     "index":0,
//     "routes":[  
//        {  
//           "key":"id-1524563436867-0",
//           "routeName":"screen1"
//        }
//     ]
//  }

// newState -> pass to AppNavigator. We will also pass the dispatch to the navigator.
// {  
//     "key":"StackRouterRoot",
//     "isTransitioning":true,
//     "index":1,
//     "routes":[  
//        {  
//           "key":"id-1524563436867-0",
//           "routeName":"screen1"
//        },
//        {  
//           "params":{  
//              "name":"CuongDNQ"
//           },
//           "routeName":"screen2",
//           "key":"id-1524563436867-1"
//        }
//     ]
//  }