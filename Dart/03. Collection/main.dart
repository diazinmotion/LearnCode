
import 'dart:math';

void main() {
    // this is an example of list, set, map in dart, basically it's just like an array

    // LIST //
    // you can assign a dynamic one
    var capitalCity = ['Jakarta', 'Syndey', 'Beijing', 'Tokyo'];
    print(capitalCity);

    // or using excplicit data type 
    // <String> mean, the item element have to be string
    List<String> countryMember = ['Indonesia', 'Australia', 'China', 'Japan'];

    // we can add other member as follows
    countryMember.add('France');
    countryMember.add('Russia');

    // list can be added multiple items
    countryMember.addAll(['Brazil', 'England']);

    // added at specific index and replace if item exist
    countryMember.insert(0, 'United States');

    // if want to delete specific value
    countryMember.remove('Brazil');

    // or specific index
    countryMember.removeAt(1);
    print(countryMember);

    // SET //
    // set is like a list but it removes duplicate member, so you will get an unique list
    Set employeeOfTheMonth = new Set.from(['Andy', 'James', 'Marco', 'Ryan', 'James', 'James']);
    employeeOfTheMonth.addAll(['Justin', 'Amanda', 'Amanda']);
    employeeOfTheMonth.remove('Andy');
    print(employeeOfTheMonth);

    // MAP //
    // map is like an object in javascript, it's a key, value list
    Map countryCapital = {
        'Indonesia':'Jakarta',
        'Japan':'Tokyo',
        'Moscow':'Russia',
        'London':'England'
    };
    print(countryCapital);

    // get specific item
    print(countryCapital['Indonesia'] + ' ' + countryCapital['Japan']);

    // we can also defined the datatype for key and value
    Map<String, num> studentHeight = {
        'David':190,
        'Eugene':177,
        'Rick':181,
        'Morty':165
    };
    studentHeight.addAll({
        'Mark': 168,
        'Peter': 170
    });

    // remove specific key
    studentHeight.removeWhere((key, value) => key == 'Peter');
    print(studentHeight);
    print(studentHeight.length);

    // iterable
    Random r = new Random();
    Iterable<int> a = Iterable.generate(2, (i) => r.nextInt(100));
    print(a);
}