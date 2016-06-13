/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */

//CREATING A LINKED LIST
var newLinkedList = linkedListGenerator();
newLinkedList.add('June');
newLinkedList.add('July');
newLinkedList.add('August');

function linkedListGenerator(){
  var head = null;
  var tail = null;

  var newObj = {
    getHead: function(){
      return head;
    },
    getTail: function(){
      return tail;
    },
    add: function(n){
      //takes in any data value and adds a new node to the end of the list
      newNode = {
        value: n,
        next: null
      };

      if(head === null){
        head = newNode;
        tail = newNode;
      } else {
        tail.next = newNode;
        tail = newNode;
      }
      return newNode;

    },

    remove: function(n){

      var thisNode = head;
      var lastNode;
      for(var i = 0; i <= n; i++){


      lastNode = thisNode;

      if(thisNode === null){
                return false;
              }

      thisNode = thisNode.next;

        }
      return lastNode;
      },


    get: function(n){
      var thisNode = head;
      var lastNode;
      for(var i = 0; i <= n; i++){


      lastNode = thisNode;

      if(thisNode === null){
                return false;
              }

      thisNode = thisNode.next;

        }
      return lastNode;
      },

    insert: function(){

    }
  };
  return newObj;
}