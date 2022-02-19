$(document).ready(function () {
    let name_list = []
    let price_list = []

    $('.product__title').each(function () {
        name_list.push($(this).text());
    });
    $('.product__price-new').each(function() {
        price_list.push($(this).text());
    })

    function Item(name, price) {
        this.name = name;
        this.price = price;
    }

    let items = []

    for (let i = 0; i <  name_list.length; i++) {
        items.push(new Item(name_list[i], price_list[i]))
        console.log(items[i].name + "-"  + items[i].price)
    }
})
