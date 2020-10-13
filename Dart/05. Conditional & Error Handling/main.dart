import 'dart:io';

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
}