function perulanganItem() {
    var kalimat = ['Saya', 'ingin', 'belajar', 'bersama'];

    kalimat.forEach(function (item, index) {
        console.log('Item : ' + item + ' Index ke ' + index);
    })

    return kalimat;
}
perulanganItem();