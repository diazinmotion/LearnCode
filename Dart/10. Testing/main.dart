import 'package:test/test.dart';
import 'package:random_string/random_string.dart';
import 'package:faker/faker.dart';

main(List<String> args) {
    // this example will demonstrate how to use package
    // here we will use pub.dev for dart (https://pub.dev/packages/test)

    // this is only to show that using packages are lot easier
    Faker faker = new Faker();

    print(randomAlphaNumeric(10));

    for(int i=0; i < 3; i++){
        print(faker.person.name());
    }
    
    // testing number 1
    test('testing split()', (){
        var sample = 'Pikachu, Bulbasaur, Meowth';
        expect(sample.split(', '), equals(['Pikachu','Bulbasaur', 'Meowth']));
    });

    test('testing trim()', (){
        var sample = ' fooBar ';
        expect(sample.trim(), equals('fooBar'));
    });

    // we can also group testcase
    group('String', (){
        // test 01 inside group
        test('Upper Case', (){
            var sample = 'hello world';
            expect(sample.toUpperCase(), equals('HELLO WORLD'));
        });

        // test 01 inside group
        test('Lower Case', (){
            var sample = 'FOOBAR';
            expect(sample.toLowerCase(), equals('foobar'));
        });
    });

    group('Any of the kind', (){
        test('Exception handling', (){
            expect(() => int.parse('A'), throwsFormatException);
        });

        // we also can using future for testing
        test('Future testing', () async {
            var value = await Future.value(5);
            expect(value, equals(5));
        });

        test('Future testing 2', () async {
            expect(Future.value(3), completion(equals(3)));
        }, skip: 'Too long for today');
    });
}