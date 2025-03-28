import _ from "lodash";
const obj = [
    {
      "id": 1,
      "name": "sachin",
      "age": 22,
      "email": "sachin@gmail.com"
    },
    {
      "id": 2,
      "name": "virat",
      "age": 24,
      "email": "virat@gmail.com"
    }
  ]
console.log(_.find(obj, _.matchesProperty("id",1)));