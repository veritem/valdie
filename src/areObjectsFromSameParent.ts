import ErrorMessage from './utils/Error'

export default function areObjectsFromSameParent(object1: any, object2: any): Boolean {

    let keys1 = Object.entries(object1);

    let keys2 = Object.entries(object2);
  
    if (keys1.length !== keys2.length) {

      return false;

    }
  
    for (let key in keys1 ) {

      if (object1[key] !== object2[key]) {

        return false;

      }

    }
  
    return true;

}