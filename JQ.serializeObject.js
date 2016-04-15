$.fn.serializeObject = function()
{
    var o = {}, name, kname;
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    $.each(o, function(k,v) {
        var kio = k.indexOf("[");
        if (kio > -1){
            name = k.substr(0,kio);
            if (typeof o[name] == 'undefined') o[name] = {};
            kname = k.split(name+'[').join('').split(']').join('').split(',').join('');
            o[name][kname]=v; 
            delete o[k];
        }
    });
    return o;
};
