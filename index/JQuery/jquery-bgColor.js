(function ($)
{
    $.fn.bgColor = function(yanse)
    {
        this.css('backgroundColor',yanse);

        //返回调用这个方法的jQuery本身
        return this;
    }

}(jQuery));