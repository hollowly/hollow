//继承 拖拽面向对象
function limitDrag(id)
{
    Drag.call(this,id);
}

for(var i in Drag.prototype)
{
    limitDrag.prototype[i] = Drag.prototype[i];
}

limitDrag.prototype.fnMove = function()
{
    var l = event.clientX - this.disX;
    var t = event.clientY - this.disY;

    if(l < 0)
    {
        l = 0;
    }
    else if(l > document.documentElement.clientWidth - this.odiv.offsetWidth)
    {
        l = document.documentElement.clientWidth - this.odiv.offsetWidth;
    }

    if(t < 0)
    {
        t = 0;
    }
    else if(t > document.documentElement.clientHeight - this.odiv.offsetHeight)
    {
        t = document.documentElement.clientHeight - this.odiv.offsetHeight;
    }
    
    this.odiv.style.left = l + 'px';
    this.odiv.style.top = t + 'px';
}