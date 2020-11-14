(function($)
{
    //给$的原型添加方法.
    //arrTableHead:表头数组
    //arrTableBdoy:表格总体数组
    $.fn.table = function(arrTableHead,arrTableBdoy)
    {
        var list = [];
        //生成表头
        list.push('<table>');
        list.push('<thead>');
        list.push('<tr>');
        for(let i = 0;i < arrTableHead.length;i++)
        {
            list.push('<th>');
            list.push(arrTableHead[i]);
            list.push('</th>');
        }
        list.push('</tr>');
        list.push('</thead>');

        //生成主体部分
        list.push('<tbody>');
        for(let i = 0;i < arrTableBdoy.length;i++)
        {
            list.push('<tr>');
            //生成一个序号td
            list.push('<td>'+(i+1)+'</td>')
            //遍历attrTableBody这个数组的一个个元素
            for(let key in arrTableBdoy[i])
            {
                list.push('<td>');
                list.push(arrTableBdoy[i][key]);
                list.push('</td>');
            }
            list.push('</tr>');
        }
        list.push('</tbody>');

        list.push('</table>');
        

        this.html(list.join(''));
    }

}(window.jQuery))