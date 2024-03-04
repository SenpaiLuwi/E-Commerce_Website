const product = [
    {
        id: 0,
        image: 'https://i.imgur.com/1opNd3b.png',
        title: 'Adidas x BAPE Undefeated (Black)',
        price: 117.00,
    },
    {
        id: 1,
        image: 'https://i.imgur.com/mE5dPav.png ',
        title: 'BAPE x Kanye West',
        price: 6070.00,
    },
    {
        id: 2,
        image: 'https://i.imgur.com/tlbLjyx.png',
        title: 'Nike Air Force 1 Low 07 Off-White MoMA',
        price: 9416.00,
    },
    {
        id: 3,
        image: 'https://i.imgur.com/NqCMBTG.png',
        title: 'Jordan 1 Retro High Off-White Chicago',
        price: 6052.00,
    },
    {
        id: 4,
        image: 'https://i.imgur.com/llBSNpo.png',
        title: 'Nike Travis Scott SB Dunk Low',
        price: 850.00,
    },
    {
        id: 5,
        image: 'https://imgur.com/LMk49Se.png',
        title: 'Nike Air Force 1 Low x Stussy (Fossil)',
        price: 276.00,
    }
];

const categories = [...new Set(product.map((item) => item))];
let i = 0;

document.getElementById('root').innerHTML = categories.map((item) => {
    var { id, image, title, price } = item;
    return (
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
            <div class='bottom'>
                <p>${title}</p>
                <h2>$ ${price}.00</h2>` +
                "<button onclick='addtocart(" + id + ")'>Add to cart</button>" +
                `</div>
        </div>`
    );
}).join('');

var cart = [];

function addtocart(a) {
    cart.push({ ...product[a] });
    displaycart();
}

function delElement(a) {
    cart.splice(a, 1);
    displaycart();
}

function displaycart() {
    let j = 0, total = 0;
    document.getElementById("count").innerHTML = cart.length;
    if (cart.length == 0) {
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ " + 0 + ".00";
    } else {
        document.getElementById("cartItem").innerHTML = cart.map((items) => {
            var { image, title, price } = items;
            total = total + price;
            document.getElementById("total").innerHTML = "$ " + total.toFixed(2) + ".00";
            return (
                `<div class='cart-item'>
                    <div class='row-img'>
                        <img class='rowimg' src=${image}>
                    </div>
                    <p style='font-size:12px;'>${title}</p>
                    <h2 style='font-size: 15px;'>$ ${price}.00</h2>` +
                    "<i class='fa-solid fa-trash' onclick='delElement(" + (j++) + ")'></i></div>"
            );
        }).join('');
    }
}
