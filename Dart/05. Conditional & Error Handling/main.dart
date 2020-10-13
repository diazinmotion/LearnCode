import 'dart:io';
import 'dart:math';

class SimpleError implements Exception {
    String error() => 'This is a simple Error.';
}

main(List<String> args) {
    // this example will show how to use conditional and error handling
    
    var isDomesticRoute = false;
    var seatCapacity    = 168;
    var aircraftType    = 'CRJ';
    var engineCount     = 2;
    var aircraftAge     = 6.25;
    var aircraftMfc     = 'Bombardier';
    Map availableType   = {
        'CRJ':['CRJ-1000'], 
        'A330':['A330-200', 'A330-300', 'A330-900 Neo'], 
        '737':['737-800', '737 Max 8'], 
        '777':['777-200', '777-300ER']
    };

    stdout.write('Aircraft Size: ${(seatCapacity >= 250) ? 'Wide Body' : 'Narrow Body'}\n');

    // simple if/else
    stdout.write('International Route: ');
    if(isDomesticRoute){
        print('Yes');
    }else{
        print('No');
    }

    // shorthand for simple if/else
    stdout.write('Need Special Maintenance: ${(aircraftAge <= 7.5) ? 'No' : 'Yes'}\n');

    // multiple if
    stdout.write('Manufacture Origin: ');
    if(aircraftMfc == 'Boeing'){
        print('US');
    }else if(aircraftMfc == 'Airbus'){
        print('France');
    }else{
        print('Other');
    }

    // switch case conditional
    stdout.write('Engine Type: ');
    switch (engineCount) {
        case 1:
            print('Single Turbofan');
            break;
        case 2:
            print('Double Turbofan');
            break;
        case 4:
            print('Quad Turbofan');
            break;
        default:
            print('Propellers');
            break;
    }

    // use function inside if else
    stdout.write('Aircraft Variation: ');
    if(aircraftType.isNotEmpty && availableType.containsKey(aircraftType)){
        print(availableType[aircraftType]);
    }else{
        print('Not Available');
    }

    classErrorException();
    // errorHandling();
}

void errorHandling(){
    // this example will show how to use conditional and error handling
    print('========================================\nThis is Error Handling Section');
    try {
        Random r = new Random();
        num hasilNumber         = 0;
        
        stdout.write('Try entering numeric value [0-9], or character [a-z A-Z] to test the error\n');
        stdout.write('Enter a number: ');
        final randomNumber      = r.nextInt(100);
        final int userNumber    = int.parse(stdin.readLineSync());
        
        hasilNumber = randomNumber ~/ userNumber;
        print('Magic Number $randomNumber, and the result is $hasilNumber');
    } on IntegerDivisionByZeroException {
        // this is for specific error (exception) zero division
        print('ERROR: Cannot divided by zero.');
    } on FormatException{
        // this is invalid data type exception
        print('ERROR: Invalid value, please use numberic value.');
    }catch (e){
        // this is for system generated error
        print('ERROR: $e');
    }finally{
        print('Done.');
    }
}

void classErrorException(){
    try {
        // this is closure (anonymous function)
        var f = (age) => {
            if(age < 10){
                throw new SimpleError()
            }else{
                print('Amazing!')
            }
        };

        f(14);
        f(8);
    } catch (e) {
        print(e.error());
    }
}