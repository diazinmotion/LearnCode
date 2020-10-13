import 'dart:math';

main(List<String> args) {
    // we will demonstrate the basic use of functions here
    helloWorld();
    print('Your lucky number for today is ${luckyNumber(10)}');
    print('Age DB ${dataAge(3)}');

    studentInfo('John Doe');
    studentInfo('Jane Doe', false, 18);

    carSpecs('SL500 AMG', manufacture: 'Mercedes Benz', type: 'Coupe');
    carSpecs('911', manufacture: 'Porsche', type: 'Sportcar', engineCapacity: 6000);

    // closure or anonymous
    var greet = (name) => print('Hi, $name');
    greet('Foo Bar');

    var magicalNumber = (){
        return 2 + 11;
    };
    print(magicalNumber());
}

// void / non returning function
void helloWorld(){
    print('Hello from Function!');
}

// type returning func
num luckyNumber(int maxNum){
    Random r = new Random();
    final result = r.nextInt(maxNum);

    return result;
}

// another returning func (for list type)
List<int> dataAge(int dataCount){
    List<int> result = [];

    for(var i = 0; i < dataCount; i++) {
        result.add(((i == 0) ? 3 : i) * 10);
    }

    return result;
}

// func parameter (to make it optional you can use square bracket)
// we can also set default value for the params, here we make name param as required
void studentInfo(var name, [bool isMale = true, int age]){
    print("==============\nStudent Information");
    print('Name: $name');
    print('Gender: ${(isMale) ? 'Male' : 'Female'}');
    if(age != null){
        print('Age: $age years old');
    }
}

// func parameter using named paramater, so we can assign which paramater we want
void carSpecs(var series, {int engineCapacity, String manufacture, var type = 'Sedan'}){
    print("==============\nCar Information");
    print(((manufacture) ?? null) + " $series");
    print("Engine Capacity: ${engineCapacity ?? 'N/A'}");
    print("Type: $type");
}