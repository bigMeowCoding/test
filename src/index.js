import BScroll from '@better-scroll/core'
import eq from 'lodash/eq'
import {from, Subject} from 'rxjs';
import {sum} from "./sum";

let wrapper = document.querySelector('.wrapper')
let scroll = new BScroll(wrapper)

console.log(eq(1,2),eq('s','s'))

const subject = new Subject();

subject.subscribe({
    next: (v) => console.log(`observerA: ${v}`)
});
subject.subscribe({
    next: (v) => console.log(`observerB: ${v}`)
});

const observable = from([1, 2, 3]);

observable.subscribe(subject);
console.log(sum(1,2))