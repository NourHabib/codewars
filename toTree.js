const tasks = [
    { id: 1, parent: null, value: 'Make breakfast' },
    { id: 2, parent: 1, value: 'Brew coffee' },
    { id: 3, parent: 2, value: 'Boil water' },
    { id: 4, parent: 2, value: 'Grind coffee beans' },
    { id: 5, parent: 2, value: 'Pour water over coffee grounds' }
  ];
  
  function list_to_tree(list) {
    var map = {}, node, roots = [], i;
    for (i = 0; i < list.length; i += 1) {
        map[list[i].id] = i; // initialize the map
        list[i].children = []; // initialize the children
    }
    for (i = 0; i < list.length; i += 1) {
        node = list[i];
        if (node.parentId !== null) {
            // if you have dangling branches check that map[node.parentId] exists
            list[map[node.parentId]].children.push(node);
        } else {
            roots.push(node);
        }
    }
    return roots;
}

console.log(list_to_tree(tasks));