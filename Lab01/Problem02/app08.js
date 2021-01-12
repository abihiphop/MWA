// =====================Avoid Intense Computations   --> Use Non-Blocking computaions e.g. Spawning child process =============
var childProcess = require("child_process");
console.log("1: Start"); // Process 1
var newProcess = childProcess.spawn("node",["./computation/_fibonacci"],{stdio:"inherit"});// Executing fibonnaci on child process, sharing the main standard i/o.
 console.log("2: End"); // Executed immediately after process 1 , fibonacci computation 2 does not block it 
