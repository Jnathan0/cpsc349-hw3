(function (window) {
    'use strict';
    var App = window.App || {};

    class DataStore {
        constructor() {
            console.log('Running the Datastore constructor');
            this.data = {};
        }
        add(key, val) { this.data[key] = val; }
        get(key) { return this.data[key]; }
        getAll() { return this.data; }
        remove(key) { delete this.data[key]; }
    }




    App.DataStore = DataStore;
    window.App = App;
}) (window);