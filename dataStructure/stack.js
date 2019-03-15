/*
 * @version: 1.0
 * @Description: 栈
 * @Author: WangWen
 * @LastEditors: WangWen
 * @email: bear393048@163.com
 * @Date: 2019-03-15 11:54:01
 * @LastEditTime: 2019-03-15 15:12:26
 */
class Stack{
    constructor(){
        this.items = []
    }
    //入栈
    push(element){
        this.items.push(element)
    }
    //出栈
    pop(){
        return this.items.pop()
    }
    //获取栈顶元素
    getTop(){
        return this.items[this.size()-1]
    }
    //获取栈的长度
    size(){
        return this.items.length
    }
    //判断栈是否为空
    isEmpty(){
        return this.size() === 0
    }
    //清空栈
    clear(){
        this.items = []
    }
    //获取栈
    getItems(){
        return this.items
    }
}