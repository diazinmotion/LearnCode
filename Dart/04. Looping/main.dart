
void main(List<String> args) {

    var index       = 1;
    var sampleArray = [10,20,30];
    List<String> musicGenre = ['Jazz', 'Pop', 'Indie', 'Folk'];

    // loop is a standar c style in dart
    for (var i = 0; i < sampleArray.length; i++) {
        if(sampleArray[i] == 20){
            continue;
        }
        
        print('Hello World $i = ${ sampleArray[i] }');
    }

    // we can use jquery foreach too
    // here we are using arrow anonymous function (ES6 style)
    sampleArray.asMap().forEach((k, v) => print("$k, $v"));

    // while loop
    while(index < 3){
        print('While Loop $index');
        index++;
    }

    // do while loop
    int n = 1;
    do{
        print('Good Morning');
        n++;
    }while(n < 3);

    // list map exmple
    musicGenre = musicGenre.map((e){
        return 'Genre: $e';
    }).toList();

    print(musicGenre);

    for (var item in musicGenre) {
        print(item);
    }
}
