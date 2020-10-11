//拖拽 面向对象
function Drag(id)
    {
        var _this = this;
        
        this.disX = 0;
        this.disY = 0;

        this.odiv = document.getElementById(id);
        this.odiv.onmousedown = function()
        {
            _this.fnDown();
            return false;
        }
    }

    Drag.prototype.fnDown = function()
    {
        var _this = this;

        this.disX = event.clientX - this.odiv.offsetLeft;
        this.disY = event.clientY - this.odiv.offsetTop;

        document.onmousemove = function()
        {
            _this.fnMove();
        }
        document.onmouseup = function()
        {
            _this.fnUp();
        }
    }

    Drag.prototype.fnMove = function()
    {
        this.odiv.style.left = event.clientX - this.disX + 'px';
        this.odiv.style.top = event.clientY - this.disY + 'px';
    }

    Drag.prototype.fnUp = function()
    {
        document.onmousemove = null;
        document.onmouseup = null;
    }