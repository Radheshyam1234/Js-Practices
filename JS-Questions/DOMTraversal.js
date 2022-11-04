// DFS using Recursion

function recursiveDFS(element) {
  console.log(element);

  Array.from(element.children).forEach((child) => {
    recursiveDFS(child);
  });
}

recursiveDFS(document.getElementById("a"));

// DFS using STACK

function stackDFS(element) {
  let stack = [];
  stack.push(element);

  while (stack.length > 0) {
    let ele = stack.pop();
    console.log(ele);
    Array.from(ele.children)
      .reverse()
      .forEach((child) => {
        stack.push(child);
      });
  }
}

stackDFS(document.getElementById("a"));

// BFS using QUEUE

function queueBFS(element) {
  let queue = [];
  queue.push(element);
  while (queue.length > 0) {
    let ele = queue.shift();
    console.log(ele);
    Array.from(ele.children).forEach((child) => {
      queue.push(child);
    });
  }
}

queueBFS(document.getElementById("a"));
