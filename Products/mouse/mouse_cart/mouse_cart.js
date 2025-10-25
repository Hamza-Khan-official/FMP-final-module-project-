var firebaseConfig = {
    apiKey: "AIzaSyDJRsEfO3b1Sd2EYpGqwYu-Qk5Xxju1BlE",
    authDomain: "product-db-50ac7.firebaseapp.com",
    databaseURL: "https://product-db-50ac7-default-rtdb.firebaseio.com",
    projectId: "product-db-50ac7",
    storageBucket: "product-db-50ac7.firebasestorage.app",
    messagingSenderId: "628823687355",
    appId: "1:628823687355:web:b39bed5fdc64df68c1699e",
    measurementId: "G-8T0N4G4GLF"
};

// Initialize Firebase
var app = firebase.initializeApp(firebaseConfig);
var fb_db = firebase.database();

console.log(fb_db);


firebase
    .database()
    .ref("products")
    .on("child_added", function (data) {
        var product = data.val();  // Object mil gaya

        var create_tr = document.createElement("tr");

        // Image column
        var td_img = document.createElement("td");
        var img = document.createElement("img");
        img.src = product.pro_img;
        img.width = 100;  // Size set karo
        td_img.appendChild(img);

        // Name column
        var td_name = document.createElement("td");
        td_name.innerText = product.pro_name;

        // Color column
        var td_color = document.createElement("td");
        td_color.innerText = product.pro_color;

        // ID column
        var td_id = document.createElement("td");
        td_id.innerText = product.id;

        // price
        var td_price = document.createElement("td");
        td_price.innerText = product.pro_price;

        // Quantity
        var td_quantity = document.createElement("td");
        td_quantity.innerText = product.pro_quantity;

        // Append all columns to row
        create_tr.appendChild(td_img);
        create_tr.appendChild(td_name);
        create_tr.appendChild(td_color);
        create_tr.appendChild(td_id);
        create_tr.appendChild(td_price);
        create_tr.appendChild(td_quantity);

        // Append row to table
        document.getElementById("cart_table").appendChild(create_tr);
    });
