///declar database

let database;

const request = indexedDB.open("budget", 1);

request.onerror = function(action) {
console.log("Error: " + action.target.errorCode);
};

request.onsuccess = function(action) {
    database = action.target.result;};

request.onupgradeneeded = function (action) {
    const database = action.target.result;
    database.createObjectStore("pending", { autoIncrement: true});
};

//function to save

function saveNew(entry) {
const transation = database.transaction(["pending"],"readwrite");
const store = transaction.objectStore("pending");
store.add(entry);
}

//function to load
function loadData () {
    const transaction = database.transaction(["pending"], "readwrite");
    const store = transaction.objectStore("pending");
    const everything = store.getAll();
    everything.onsuccess = function (){
        if(everything.result.length > 0) {
            fetch("/api/transaction/bulk", {
                method: "POST",
                body: JSON.stringify(everything.result),
                headers: {Accept: "application/json, text/plain, */*", "Content-type":"application/json"}
            }).then(reply => reply.json()).then(() => {
                const transtion = database.transaction(["pending"], "readwrite");
                const store = transaction.objectStore("pending");
                store.clear();
            });
          }
        };
      };

      window.addEventListener("online", loadData);