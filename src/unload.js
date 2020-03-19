const pendingOps = new Set();

window.addEventListener('unload', (event) => {
  if (pendingOps.size) {
    event.returnValue = 'There is pending work. Sure you want to leave?';
  }
});

function addToPendingWork(promise) {
  pendingOps.add(promise);
  const cleanup = () => pendingOps.delete(promise);
  promise.then(cleanup).catch(cleanup);
}