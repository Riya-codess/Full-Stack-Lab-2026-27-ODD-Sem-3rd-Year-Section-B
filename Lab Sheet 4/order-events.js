const EventEmitter = require("events").EventEmitter;

const orderEmitter = new EventEmitter();

orderEmitter.on("orderPlaced", (order) => {
    console.log("\n========== ORDER RECEIPT ==========");
    console.log("Order ID:", order.id);
    console.log("Item:", order.item);
    console.log("Amount: ₹" + order.amount);
    console.log("==================================");
});

// Emit event for 3 different orders
orderEmitter.emit("orderPlaced", {
    id: 101,
    item: "Wireless Headphones",
    amount: 1999
});

orderEmitter.emit("orderPlaced", {
    id: 102,
    item: "Smart Watch",
    amount: 2499
});

orderEmitter.emit("orderPlaced", {
    id: 103,
    item: "Backpack",
    amount: 999
});