void main(List<String> args) async {
    // in this example we will demonstarate how to utilize promise (async)
    // this will add little delay to program and will be showing last
    simpleFuture();

    fakeFetchingData('sample_file_test.docx')
        .then((d){
            if(d['status']){
                print('Status: ${d['msg']}');
            }
        })
        .catchError((e){
            print('ERROR: $e');
        }).whenComplete(() => print('Done.'));

    // for this we probably better using try catch for error handling
    try {
        var secondFetch = await fakeFetchingData('sample_file.txt');
        print('Second fetch is ${(secondFetch['status']) ? 'Success':'Failed'}');
    } catch (e) {
        print('ERROR: $e');
    } finally {
        print('Done.');
    }
}

void simpleFuture() async{
    await Future((){
        print('Future done.');
    });

    // this is will be executed after future status is completed.
    print('Hello World');
}

Future<Map> fakeFetchingData(String fileName){
    return Future.delayed(Duration(seconds: 2), (){
        var spaceAvailable = false;
        if(spaceAvailable){
            return {
                'status':true,
                'msg': '$fileName is downloaded.'
            };
        }else{
            throw 'Space is not available.';
        }
    });
}