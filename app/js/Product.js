var request = new XMLHttpRequest();
request.open('GET', '/data/products.json', true);
request.send(null);

request.onloadend=function () {
    var data = JSON.parse(request.responseText);
    var parentClass="products__list";
    console.log(data);
    if(document.URL.indexOf('index3.html') == -1){
        data.length = 6;
    }
    data.forEach(function (curValue, index, array) {
       var tmp = createTemplate(curValue);
       createHTMLElement(parentClass,tmp);
    });
    console.log(createTemplate(data[0]));
}

function createTemplate(data) {
    var template="" +
        "<div class=\"products__item\">\n" +
        "<a href=\"javascript:;\" class=\"products__img\">\n" +
        "    <img src={#imgLink}>\n" +
        "</a>\n" +
        "<div class=\"products__desc\">\n" +
        "    <div class=\"products__title\">\n" +
        "        <a href=\"javascript:;\">{#title}</a>\n" +
        "    </div>\n" +
        "   <div class=\"products__text\">{#description}\n" +
        "   </div>\n" +
        "        <div class=\"products__producer\">" +
        "           <span>Производитель:</span> {#producer}\n" +
        "        </div>\n" +
        "        <div class=\"products__more\">\n" +
        "            <a href=\"javascript:;\" class=\"button-more\">Отправить заявку</a>\n" +
        "        </div>\n" +
        "    </div>\n" +
        "</div>";
    template = template.replace('{#imgLink}', data.imgLink);
    template = template.replace('{#title}', data.title);
    template = template.replace('{#description}', data.description);
    template = template.replace('{#producer}', data.producer);
    return template;
}

function createHTMLElement(parentClass, data) {
    var parent = document.getElementsByClassName(parentClass)[0];
    var child = document.createElement('div');
    child.innerHTML = data;
    var insert = child.childNodes[0];
    // console.log(insert);
    parent.insertBefore(insert, parent.childNodes[parent.childNodes.length]);
}

var form = $('#shop');
form.title = '';
$('.products__list').on('click', function (e) {
    var product=$(e.target).closest('.products__item');
    var productText = product.find('.products__text').text();
    var productImgLink = product.find('.products__img img')[0].src;
    var productTitle = product.find('.products__title').text();
    var productProducer = product.find('.products__producer').html();
    console.log(form.find('.products__img img').first(),productImgLink);
    form.find('.products__text').text(productText);
    form.find('.products__title').text(productTitle);
    form.find('.products__producer').html(productProducer);
    form.find('.products__img img')[0].src = productImgLink;
    form.modal();
});

$('#input-submit2').on('click', function () {
    $('#send-question').modal();
})