import {plastics} from '../data/plastics.json'

const byItem = key => searchTerm =>
  plastics.filter(element => {
    const prop = element[key];

    if(Array.isArray(prop)) {
      return prop.find(code => {
        if(searchTerm === code) {
          return prop;
        }

        return false;
      })
    }

    if (searchTerm === prop) {
      return element;
    }

    return false;
  });

const byCode = key => byItem("code")(key);
const byName = key => byItem("name")(key);
const byNumber = key => byItem("number")(key);

export default {
  byCode,
  byName,
  byNumber,
  // createSVG,
};