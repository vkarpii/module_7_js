const testingModule = require('./../js/js_practical_task');

test('return a date that comes in a predetermined number of seconds after 01.06.2020 00:00:002020',() => {
    expect(testingModule.secondsToDate(0)).toEqual(new Date(2020,6,1,0,0,0.00202));
    expect(testingModule.secondsToDate(86400)).toEqual(new Date(2020,6,2,0,0,0));
    expect(testingModule.secondsToDate(31536000)).toEqual(new Date(2021,6,1,0,0,0));
    expect(testingModule.secondsToDate(-86400)).toEqual(new Date(2020,5,30,0,0,0));
});

test('returns a base 2 (binary) representation of a base 10 (decimal) string number',() => {
    expect(testingModule.toBase2Converter(5)).toEqual('101');
    expect(testingModule.toBase2Converter(10)).toEqual('1010');
    expect(testingModule.toBase2Converter(-501)).toEqual('11111111111111111111111000001011');
});

test('takes two strings as arguments and returns the number of times the first string is found in the text',() => {
    var text = "test it";
    expect(testingModule.substringOccurrencesCounter("a",text)).toEqual(0);
    expect(testingModule.substringOccurrencesCounter("t",text)).toEqual(3);
    expect(testingModule.substringOccurrencesCounter("t",text)).toEqual(3);
    expect(testingModule.substringOccurrencesCounter(null,text)).toEqual(0);
});

test('returns a string in which each character is repeated once',() => {
    expect(testingModule.repeatingLitters("Hello")).toEqual("HHeelloo");
    expect(testingModule.repeatingLitters("Hello world")).toEqual("HHeello  wworrldd");
});

test('a function redundant that takes in a string str and returns a function that returns str',() => {
    const f1 = testingModule.redundant("apple");
    expect(f1()).toEqual("apple");
});

test('a function that multiplies two matricies (n x n each)',() => {
    var m1 = [[1,2],[3,4]];
    var m2 = [[5,6],[7,8]];
    var result = [[19,22],[43,50]];
    expect(testingModule.matrixMultiplication(m1,m2)).toEqual(result);
});

test('Tower Hanoi', () => {
    expect(testingModule.towerHanoi(3)).toBe(7);
    expect(testingModule.towerHanoi(4)).toBe(15);
});

test('a gather function that accepts a string argument and returns another function',() => {
    expect(testingModule.gather("a","b","c")(0,1,2)).toEqual("abc");
    expect(testingModule.gather("a","b","c")(1,2,0)).toEqual("bca");
});