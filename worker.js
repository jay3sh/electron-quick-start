
const cvtrace = require('cvtrace');

console.log("[Worker] Started ...");
console.log("[Worker] Imported ", cvtrace);

process.on('message', msg => {
  if(msg.task === 'quit') {
    console.log('[Worker] Quitting');
  } else {
    console.log('[Worker] Doing task: ',msg.task);
  }
});
