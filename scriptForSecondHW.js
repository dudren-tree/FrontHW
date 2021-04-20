//Make a person

var Person = function(firstAndLast) {
  
    var fullName = firstAndLast;
   
    this.getFirstName = function() {
      return fullName.split(" ")[0];
    };
   
    this.getLastName = function() {
      return fullName.split(" ")[1];
    };
   
    this.getFullName = function() {
      return fullName;
    };
   
    this.setFirstName = function(name) {
      fullName = name + " " + fullName.split(" ")[1];
    };
   
    this.setLastName = function(name) {
      fullName = fullName.split(" ")[0] + " " + name;
    };
   
    this.setFullName = function(name) {
      fullName = name;
    };
};
   
   var bob = new Person('Bob Ross');
   console.log(bob.getFullName());

  //Diff Two Arrays

  function diffArray(arr1, arr2) {
    var newArr = [];
     function newArrayCreate(first, second) {
      for (var i = 0; i < first.length; i++) {
        if (second.indexOf(first[i]) === -1) {
          newArr.push(first[i]);
        }
      }
    }
    newArrayCreate(arr1,arr2)
    newArrayCreate(arr2,arr1)
    return newArr;
  }
  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

  //Pig Latin 
  
  function translatePigLatin(str) {
    var pigLatin = "";
    var regex = /[aeiou]/gi;
  
    if (str[0].match(regex)) {
      pigLatin = str + "way";
    } else if (str.match(regex) === null) {
      pigLatin = str + "ay";
    } else {
      var vowelIndice = str.indexOf(str.match(regex)[0]);
      pigLatin = str.substr(vowelIndice) + str.substr(0, vowelIndice) + "ay";
    }
  
    return pigLatin;
  }
  
  translatePigLatin("consonant");