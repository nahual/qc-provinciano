function sorter(col, direction, converter) {
    if (direction == 'asc') {
        return function(a,b) {if (converter(a[col]) < converter(b[col])) return 1; else return -1}
    } else {
        return function(a,b){if (converter(b[col]) < converter(a[col])) return 1; else return -1}
    }
}

function to_num(input){
    return parseInt(input.replace(/\./g,''));
}

function sort_by(sort_data, converter) {
    var col = sort_data.attr('name');
    var order = sort_data.attr('order');
    if (!converter){
      converter = function(a){return a;};
    }
    var data = search_data();
    data = data.sort(sorter(col, order, converter));
    var new_order = (order == 'asc' ? 'desc' : 'asc');
    sort_data.attr('order',new_order);
    var link_text = (new_order == 'asc' ? '&uArr;' : '&dArr;');
    sort_data[0].innerHTML = link_text;
    load_data(data);
    return false;
}
