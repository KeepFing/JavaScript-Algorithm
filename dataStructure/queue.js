/*
 * @version: 1.0
 * @Description: 队列
 * @Author: WangWen
 * @LastEditors: WangWen
 * @email: bear393048@163.com
 * @Date: 2019-03-15 12:08:10
 * @LastEditTime: 2019-03-15 15:14:36
 */
class Queue{
    constructor(){
        this.queue = []
    }

    //入列
    enqueue(element){
        this.queue.push(element)
    }
    //出列
    dequeue(){
        return this.queue.shift()
    }
    //获取队列长度
    size(){
        return this.queue.length
    }
    //获取队列头
    front(){
        return this.queue[0]
    }
    //获取队列尾
    getBottom(){
        return this.queue[this.size()-1]
    }
    //判断队列是否为空
    isEmpty(){
        return this.size() === 0
    }
    //清空队列
    clear(){
        return this.queue = []
    }
    //获取队列
    show(){
        return this.queue
    }
}