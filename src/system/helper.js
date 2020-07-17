Number.prototype.format = function(n, x, s, c, b=true) {
    var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\D' : '$') + ')',
        num = this.toFixed(Math.max(0, ~~n));

    return `${b ? 'R$ ' : ''}${(c ? num.replace('.', c) : num).replace(new RegExp(re, 'g'), '$&' + (s || ','))}`;
};