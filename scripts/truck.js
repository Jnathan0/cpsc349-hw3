(function (window) {
    'use strict';
    var App = window.App || {};

    class Truck {
        constructor(truckId, db) {
            console.log('Running the Truck constructor');
            this.truckId = truckId;
            this.db = db;
        }

        createOrder = function (order) { 
            console.log('Adding order for ' + order.emailAddress);
            this.db.add(order.emailAddress, order);
        };

        removeOrder = function (order) {
            console.log('Removing order for' + order.emailAddress);
            this.db.remove(order.emailAddress);
        };

        deliverOrder = function (customerId){
            console.log('Deliver order for ' + customerId);
            this.db.remove(customerId);
        };

        printOrders = function () {
            var customerIdArray = Object.keys(this.db.getAll());

            console.log('Truck #' + this.truckId + ' has pending orders:');
            customerIdArray.forEach(function (id) {
                console.log(this.db.get(id));
            }.bind(this));
        };

    }




    App.Truck = Truck;
    window.App = App;
}) (window);