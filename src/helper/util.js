
const connectors = ['next', 'yes', 'no'];

function uniqueID() {
  return '_' + Math.random().toString(36).substr(2, 9);
}

// Return the node with matching id
export function findById(o, id) {
  if (o.id === id) return o;
  var result, p;
  for (p in o) {
    if (connectors.includes(p) && o.hasOwnProperty(p) && typeof o[p] === 'object') {
      result = findById(o[p], id);
      if (result) {
        return result;
      }
    }
  }
}

// Return the parent node of a child with matching id
export function findParentByChildId(o, id) {
  if (o.method === 'condition') {
    if (o.hasOwnProperty('yes') && o.yes && o.yes.id === id) return o;
    if (o.hasOwnProperty('no') && o.no && o.no.id === id) return o;
  } else {
    if (o.hasOwnProperty('next') && o.next && o.next.id === id) return o;
  }

  var result, p;
  for (p in o) {
    if (connectors.includes(p) && o.hasOwnProperty(p) && typeof o[p] === 'object') {
      result = findParentByChildId(o[p], id);
      if (result) {
        return result;
      }
    }
  }
}

export function insertAfterId(o, id, step) {
  var current = findById(o, id);

  let newNode = {
    id: uniqueID(),
    method: 'NEW',
    next: undefined,
  }

  newNode.next = current[step];
  current[step] = newNode;
}

export function deleteId(o, id) {
  if (id === o.id) {
    alert('you cannot delete the root');
    return;
  }
  var parent = findParentByChildId(o, id);
  if (parent.next) {
    parent.next = undefined;
  } else if (parent.yes && parent.yes.id === id) {
    parent.yes = undefined;
  } else {
    parent.no = undefined;
  }
}
