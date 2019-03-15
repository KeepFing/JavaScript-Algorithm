/*
 * @version: 1.0
 * @Description: 单链表
 * @Author: WangWen
 * @LastEditors: WangWen
 * @email: bear393048@163.com
 * @Date: 2019-03-15 12:18:21
 * @LastEditTime: 2019-03-15 15:16:13
 */

class Node{
    constructor(element){
        this.element = element
        this.next = null
    }
}
class LinkList{
    constructor(){
        this.length = 0
        this.head = null
    }
    //在链表尾添加元素
    append(element) {
		var node = new Node(element),
            current;
            console.log(node)

        if (this.head === null) {
            this.head = node;
        }else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.length++;
    }
    //在链表头部添加元素
    appendHead(element){
        let node = new Node(element),current
        if (!this.head) {
            this.head = node
        } else {
            current = this.head
            node.next = current
            this.head = node
        }
        this.length++
    }
    //在链表中插入元素
    insert(element,position){
        let node = new Node(element),current,index = 0,prev
        if (position < 0 || position > this.size()) {
            return 'error position'
        } else {
            if (position === 0) {
                this.appendHead(element)
            } else {
                current = this.head
                while (index < position) {
                    prev = current
                    current = current.next
                    index++
                }
                prev.next = node
                node.next = current
            }
            this.length++
        }
    }
    //从链表中移除具体的某一项
    removeAt(position){
        let index = 0,prev,current
        if (position < 0 || position > this.size()-1) {
            return 'error position'
        } else {
            current = this.head
            if (position === 0) {
                this.head = current.next
                return current.element
            }
            while (index < position) {
                prev = current
                current = current.next
                index++
            }
            prev.next = current.next
            this.length--
            return current.element
        }
    }
    //通过索引查找链表中的元素
    indexAt(position){
        let index = 0,prev,current
        if (position < 0 || position > this.size()-1) {
            return 'error position'
        } else {
            current = this.head
            if (position === 0) {
                return current.element
            }
            while (index < position) {
                prev = current
                current = current.next
                index++
            }
            return current.element
        }
    }
    //通过元素查找链表的索引
    indexOf(element){
        var current = this.head,
            index = 0;
        while (current) {
            if (current.element === element) {
                return index;
            }
            index++;
            current = current.next;
        }
        return -1;
    }
    //移除链表元素
    remove(element){
        return this.removeAt(this.indexOf(element))
    }
    //判断链表是否为空
    isEmpty(){
        return this.length === 0
    }
    //链表长度
    size(){
        return this.length
    }
    //展示链表
    show(){
        return this.head;
    }
}