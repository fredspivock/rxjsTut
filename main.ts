import {Observable, Observer} from "rxjs";

let numbers = [1,2,3];

let source = Observable.create(observer => {
    for(let n of numbers) {
        observer.next(n);
    }

    observer.complete();
});

class MyObserver implements Observer<number>{

    next(value) {
        console.log(value);
    }

    error(e) {
        console.log(`error: ${e}`);
    }

    complete() {
     console.log("done!");
    }
}

source.subscribe(
    value => {
        console.log(value)
    },
    e => {
        console.log(e)
    },
    () => {
        console.log("done!")
    });