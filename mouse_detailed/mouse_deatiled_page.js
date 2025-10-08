

function mouse_1() {

    let data = {
        "products": [
            {
                "name": "Mouse",
                "description": "A stylish smartwatch with heart rate monitor.",
                "color": "black",
                "price": "$50",
                "image": "images/images.jpg",

                "first_mouse_carosel_first_image": "../images/mouse/mouse_1.1.jpg",
                "first_mouse_carosel_second_image": "../images/mouse/mouse_1.2.jpg",
                "first_mouse_carosel_third_image": "../images/mouse/mouse_1.3.jpg",
                "first_mouse_carosel_fourth_image": "../images/mouse/mouse_1.4.jpg",

                "first_mouse_carosel_first_image_": "../images/mouse/mouse_1.1.jpg",
                "first_mouse_carosel_second_image_": "../images/mouse/mouse_1.2.jpg",
                "first_mouse_carosel_third_image_": "../images/mouse/mouse_1.3.jpg",
                "first_mouse_carosel_fourth_image_": "../images/mouse/mouse_1.4.jpg",


                "Model": "FG12, FG12S",
                "Type": "Wireless",
                "Connection": "2.4G Hz",
                "Operating Range": "10-15m",
                "Ergonomic Design": "Symmetric",
                "Sensor": "Optical",
                "Resolution": "1200 DPI",
                "Report Rate": "125Hz",
                "Buttons No": "3",
                "Receiver": "Nano USB Receiver",
                "Battery": "1AA Alkaline Battery",
                "Size": "108(L) x 64(W) x 35(H) mm",
                "Net Weight": "83 g (w/ battery)",
                "System Requirements": "Windows 10/11",

                "first_mouse_Qunatity": "2",
                "first_mouse_orignal_price": "$1099",
                "first_mouse_cut_price": "1299",


            },

        ],
    };

    let firstProduct = data.products[0];

    document.getElementById("first_mouse_name").innerText = firstProduct.name;
    document.getElementById("first_mouse_des").innerText = firstProduct.description;
    document.getElementById("first_mouse_color").innerText = firstProduct.color;
    document.getElementById("Model").innerText = firstProduct.Model;
    document.getElementById("Type").innerText = firstProduct.Type;
    document.getElementById("Connection").innerText = firstProduct.Connection;
    document.getElementById("Operating Range").innerText = firstProduct["Operating Range"];
    document.getElementById("Ergonomic Design").innerText = firstProduct["Ergonomic Design"];
    document.getElementById("Sensor").innerText = firstProduct.Sensor;
    document.getElementById("Resolution").innerText = firstProduct.Resolution;
    document.getElementById("Report Rate").innerText = firstProduct["Report Rate"];
    document.getElementById("Buttons No").innerText = firstProduct["Buttons No"];
    document.getElementById("Receiver").innerText = firstProduct.Receiver;
    document.getElementById("Battery").innerText = firstProduct.Battery;
    document.getElementById("Size").innerText = firstProduct.Size;
    document.getElementById("Net Weight").innerText = firstProduct["Net Weight"];
    document.getElementById("System Requirements").innerText = firstProduct["System Requirements"];

    document.getElementById("first_mouse_carosel_first_image").src = firstProduct.first_mouse_carosel_first_image;
    document.getElementById("first_mouse_carosel_second_image").src = firstProduct.first_mouse_carosel_second_image;
    document.getElementById("first_mouse_carosel_third_image").src = firstProduct.first_mouse_carosel_third_image;
    document.getElementById("first_mouse_carosel_fourth_image").src = firstProduct.first_mouse_carosel_fourth_image;

    document.getElementById("first_mouse_carosel_first_image_").src = firstProduct.first_mouse_carosel_first_image_;
    document.getElementById("first_mouse_carosel_second_image_").src = firstProduct.first_mouse_carosel_second_image_;
    document.getElementById("first_mouse_carosel_third_image_").src = firstProduct.first_mouse_carosel_third_image_;
    document.getElementById("first_mouse_carosel_fourth_image_").src = firstProduct.first_mouse_carosel_fourth_image_;

    document.getElementById("first_mouse_Qunatity").innerText = firstProduct.first_mouse_Qunatity;
    document.getElementById("first_mouse_orignal_price").innerText = firstProduct.first_mouse_orignal_price;
    document.getElementById("first_mouse_cut_price").innerText = firstProduct.first_mouse_cut_price;



}

// second item





function mouse_2(){

    let data_ = {
        "products": [
            {
                "name": "Mouse_3",
                "description": "Mouse 3 Stylish.",
                "color": "black",
                "price": "$50",

                "first_mouse_carosel_first_image": "../images/mouse/mouse_1.1.jpg",
                "first_mouse_carosel_second_image": "../images/mouse/mouse_1.2.jpg",
                "first_mouse_carosel_third_image": "../images/mouse/mouse_1.3.jpg",
                "first_mouse_carosel_fourth_image": "../images/mouse/mouse_1.4.jpg",

                "first_mouse_carosel_first_image_": "../images/mouse/mouse_1.1.jpg",
                "first_mouse_carosel_second_image_": "../images/mouse/mouse_1.2.jpg",
                "first_mouse_carosel_third_image_": "../images/mouse/mouse_1.3.jpg",
                "first_mouse_carosel_fourth_image_": "../images/mouse/mouse_1.4.jpg",


                "Model": "FG12, FG12S",
                "Type": "Wireless",
                "Connection": "2.4G Hz",
                "Operating Range": "10-15m",
                "Ergonomic Design": "Symmetric",
                "Sensor": "Optical",
                "Resolution": "1200 DPI",
                "Report Rate": "125Hz",
                "Buttons No": "3",
                "Receiver": "Nano USB Receiver",
                "Battery": "1AA Alkaline Battery",
                "Size": "108(L) x 64(W) x 35(H) mm",
                "Net Weight": "83 g (w/ battery)",
                "System Requirements": "Windows 10/11",

                "first_mouse_Qunatity": "2",
                "first_mouse_orignal_price": "$1099",
                "first_mouse_cut_price": "1299",


            },

        ],
    };

    let second_Product = data_.products[0];

    document.getElementById("first_mouse_name").innerText = second_Product.name;
    document.getElementById("first_mouse_des").innerText = second_Product.description;
    document.getElementById("first_mouse_color").innerText = second_Product.color;
    document.getElementById("Model").innerText = second_Product.Model;
    document.getElementById("Type").innerText = second_Product.Type;
    document.getElementById("Connection").innerText = second_Product.Connection;
    document.getElementById("Operating Range").innerText = second_Product["Operating Range"];
    document.getElementById("Ergonomic Design").innerText = second_Product["Ergonomic Design"];
    document.getElementById("Sensor").innerText = second_Product.Sensor;
    document.getElementById("Resolution").innerText = second_Product.Resolution;
    document.getElementById("Report Rate").innerText = second_Product["Report Rate"];
    document.getElementById("Buttons No").innerText = second_Product["Buttons No"];
    document.getElementById("Receiver").innerText = second_Product.Receiver;
    document.getElementById("Battery").innerText = second_Product.Battery;
    document.getElementById("Size").innerText = second_Product.Size;
    document.getElementById("Net Weight").innerText = second_Product["Net Weight"];
    document.getElementById("System Requirements").innerText = second_Product["System Requirements"];

    document.getElementById("first_mouse_carosel_first_image").src = second_Product.first_mouse_carosel_first_image;
    document.getElementById("first_mouse_carosel_second_image").src = second_Product.first_mouse_carosel_second_image;
    document.getElementById("first_mouse_carosel_third_image").src = second_Product.first_mouse_carosel_third_image;
    document.getElementById("first_mouse_carosel_fourth_image").src = second_Product.first_mouse_carosel_fourth_image;

    document.getElementById("first_mouse_carosel_first_image_").src = second_Product.first_mouse_carosel_first_image_;
    document.getElementById("first_mouse_carosel_second_image_").src = second_Product.first_mouse_carosel_second_image_;
    document.getElementById("first_mouse_carosel_third_image_").src = second_Product.first_mouse_carosel_third_image_;
    document.getElementById("first_mouse_carosel_fourth_image_").src = second_Product.first_mouse_carosel_fourth_image_;

    document.getElementById("first_mouse_Qunatity").innerText = second_Product.first_mouse_Qunatity;
    document.getElementById("first_mouse_orignal_price").innerText = second_Product.first_mouse_orignal_price;
    document.getElementById("first_mouse_cut_price").innerText = second_Product.first_mouse_cut_price;
}

// product_3


function Mouse_3(){

    let data_3 = {
        "products": [
            {
                "name": "Mouse_5",
                "description": "Mouse 5 Stylish.",
                "color": "black",
                "price": "$50",

                "first_mouse_carosel_first_image": "../images/mouse/mouse_1.1.jpg",
                "first_mouse_carosel_second_image": "../images/mouse/mouse_1.2.jpg",
                "first_mouse_carosel_third_image": "../images/mouse/mouse_1.3.jpg",
                "first_mouse_carosel_fourth_image": "../images/mouse/mouse_1.4.jpg",

                "first_mouse_carosel_first_image_": "../images/mouse/mouse_1.1.jpg",
                "first_mouse_carosel_second_image_": "../images/mouse/mouse_1.2.jpg",
                "first_mouse_carosel_third_image_": "../images/mouse/mouse_1.3.jpg",
                "first_mouse_carosel_fourth_image_": "../images/mouse/mouse_1.4.jpg",


                "Model": "FG12, FG12S",
                "Type": "Wireless",
                "Connection": "2.4G Hz",
                "Operating Range": "10-15m",
                "Ergonomic Design": "Symmetric",
                "Sensor": "Optical",
                "Resolution": "1200 DPI",
                "Report Rate": "125Hz",
                "Buttons No": "3",
                "Receiver": "Nano USB Receiver",
                "Battery": "1AA Alkaline Battery",
                "Size": "108(L) x 64(W) x 35(H) mm",
                "Net Weight": "83 g (w/ battery)",
                "System Requirements": "Windows 10/11",

                "first_mouse_Qunatity": "2",
                "first_mouse_orignal_price": "$1099",
                "first_mouse_cut_price": "1299",


            },

        ],
    };

    let third_Product = data_3.products[0];

    document.getElementById("first_mouse_name").innerText = third_Product.name;
    document.getElementById("first_mouse_des").innerText = third_Product.description;
    document.getElementById("first_mouse_color").innerText = third_Product.color;
    document.getElementById("Model").innerText = third_Product.Model;
    document.getElementById("Type").innerText = third_Product.Type;
    document.getElementById("Connection").innerText = third_Product.Connection;
    document.getElementById("Operating Range").innerText = third_Product["Operating Range"];
    document.getElementById("Ergonomic Design").innerText = third_Product["Ergonomic Design"];
    document.getElementById("Sensor").innerText = third_Product.Sensor;
    document.getElementById("Resolution").innerText = third_Product.Resolution;
    document.getElementById("Report Rate").innerText = third_Product["Report Rate"];
    document.getElementById("Buttons No").innerText = third_Product["Buttons No"];
    document.getElementById("Receiver").innerText = third_Product.Receiver;
    document.getElementById("Battery").innerText = third_Product.Battery;
    document.getElementById("Size").innerText = third_Product.Size;
    document.getElementById("Net Weight").innerText = third_Product["Net Weight"];
    document.getElementById("System Requirements").innerText = third_Product["System Requirements"];

    document.getElementById("first_mouse_carosel_first_image").src = third_Product.first_mouse_carosel_first_image;
    document.getElementById("first_mouse_carosel_second_image").src = third_Product.first_mouse_carosel_second_image;
    document.getElementById("first_mouse_carosel_third_image").src = third_Product.first_mouse_carosel_third_image;
    document.getElementById("first_mouse_carosel_fourth_image").src = third_Product.first_mouse_carosel_fourth_image;

    document.getElementById("first_mouse_carosel_first_image_").src = third_Product.first_mouse_carosel_first_image_;
    document.getElementById("first_mouse_carosel_second_image_").src = third_Product.first_mouse_carosel_second_image_;
    document.getElementById("first_mouse_carosel_third_image_").src = third_Product.first_mouse_carosel_third_image_;
    document.getElementById("first_mouse_carosel_fourth_image_").src = third_Product.first_mouse_carosel_fourth_image_;

    document.getElementById("first_mouse_Qunatity").innerText = third_Product.first_mouse_Qunatity;
    document.getElementById("first_mouse_orignal_price").innerText = third_Product.first_mouse_orignal_price;
    document.getElementById("first_mouse_cut_price").innerText = third_Product.first_mouse_cut_price;
}



// Page load hone pe automatically function call hoga
window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('product');
    
    if(productId === 'mouse_1') {
        mouse_1();

    } else if(productId === 'mouse_2') {
        mouse_2();
        
    }else if(productId === 'mouse_3'){
        Mouse_3();

    }
};





function tech_spechs_detail_open() {
    console.log("Button clicked");
    var tech_spechs = document.getElementById('tech_spechs_detail_');
    tech_spechs.classList.toggle('d-none');
}
