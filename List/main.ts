import {ArrayList} from "./ArrayList";

interface  Post {
    title: string
}

let arrayList = new ArrayList<Post>();
arrayList.add({title: 'Hung1'});
arrayList.add({title: 'Hung2'});
arrayList.add({title: 'Hung69'});

console.log(arrayList.container);
