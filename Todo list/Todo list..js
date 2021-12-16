// let firstPrompt = prompt("Enter a special code out of the four!!!");
// let totalTasks = ["Wake Up"];



// while (firstPrompt !== "quit") {
//     if (firstPrompt = "new") {
//         let newTasks = prompt("Enter your new task:");
//         console.log(totalTasks.push(newTasks));
//     }
// }

// if (firstPrompt = "quit") {
//     console.log("Ok You Quit :(");
// }




let input = prompt("Enter a special code out of the four!!!");
const todos = ["Brush your teeth", "drink hot water"];

while (input !== "quit" && input !== "q") {
    if (input === "list") {
        console.log("****************")
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log("****************");
    }
    else if (input === "new") {
        const newTask = prompt("Enter your new task:");
        todos.push(newTask);
        console.log(`${newTask} added to the list!!!`);
    }
    else if (input === "delete") {
        const index = parseInt(prompt("Enter a index to delete:"));
        if (!Number.isNaN(index)) {
            const deleted = todos.splice(index, 1);
            console.log(`Ok, deleted ${deleted}`);
        }
        else {
            console.log("Unknown index")
        }
    }
    input = prompt("Enter a special code out of the four!!!")
}

console.log("Ok You Quit :(");