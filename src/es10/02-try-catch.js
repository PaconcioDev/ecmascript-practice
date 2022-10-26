try {
  hello();
} catch (error) {
  console.error(error);
}
//! This will return 
/* 
ReferenceError: hello is not defined
    at file:///home/paco/Documents/platziProjects/ecmasript-practice/src/es10/tempCodeRunnerFile.js:2:3
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at async Loader.import (internal/modules/esm/loader.js:178:24)
    at async Object.loadESM (internal/process/esm_loader.js:68:5)
    at async handleMainPromise (internal/modules/run_main.js:59:12)

*/

try {
  anotherFn();
} catch {
  console.error("This is an error");
}
//! This will return: This is an error
