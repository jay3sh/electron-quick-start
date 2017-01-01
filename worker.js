

console.log("[Worker] Started ...");

process.on('message', msg => {
  if(msg.task === 'quit') {
    console.log('[Worker] Quitting');
  } else {
    console.log('[Worker] Doing task: ',msg.task);
  }
});
