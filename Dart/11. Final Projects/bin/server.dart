// here we're trying to build a simple HTTP server, to demonstrate dart outside flutter
// tutorial from: https://dart.dev/tutorials/server/httpserver

import 'dart:io';

Future main() async {
    var server = await HttpServer.bind(
        InternetAddress.loopbackIPv4, 
        5000
    );

    print('Listening to localhost:5000');

    await for(HttpRequest req in server){
        req.response.write('Hello World from Dart');
        await req.response.close();
    }
}