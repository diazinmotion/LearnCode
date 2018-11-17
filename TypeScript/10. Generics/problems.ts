console.log("This is an exercise on Chapter Generics");

/*
    Create a generic Map (an Object like an Array, but instead with Key-Value Pairs). The key will always be a string.

    Let's keep it simple and only add the following methods to the Map:

    setItem(key: string, item: T) // should create a new key-value pair

    getItem(key: string) // should retrieve the value of the provided key
    clear() // should remove all key-value pairs
    printMap() // should output key-value pairs
    The map should be usable like shown below:

    const numberMap = new MyMap<number>();
    numberMap.setItem('apples', 5);
    numberMap.setItem('bananas', 10);
    numberMap.printMap();

    const stringMap = new MyMap<string>();
    stringMap.setItem('name', "Max");
    stringMap.setItem('age', "27");
    stringMap.printMap();
*/
class MyMap<T>{
    private mapItem: {[key: string]: T} = {};
    
    setItem(key: string, item: T){
        this.mapItem[key] = item;
    }

    clear(){
        this.mapItem = {};
    }

    getItem(key: string){
        return this.mapItem[key];
    }

    printMap(){
        for(let key in this.mapItem){
            console.log(key, this.mapItem[key]);
        }
    }
}

const numberMap = new MyMap<number>();
numberMap.setItem('apples', 5);
numberMap.setItem('bananas', 10);
numberMap.printMap();

const stringMap = new MyMap<string>();
stringMap.setItem('name', "Max");
stringMap.setItem('age', "27");
stringMap.printMap();