"use strict";
var 이름 = 'choco';
var 배열 = ['gom', 'ponyo'];
var 오브젝트 = { name: 'choco' };
var 초코 = [123, true];
var 함수 = function (x) {
    return x * 2;
};
var User = (function () {
    function User(name) {
        this.name = 'choco';
    }
    return User;
}());
var 이름2 = 'choco';
var 나이2 = 50;
var 결혼했니 = false;
var 널 = null;
var 정의안함 = undefined;
var 회원들 = ['yeom', 'park'];
var 회원정보 = { member1: 'yeom', member2: 'park' };
var 타입지정자동으로해주나요 = true;
var 나는숫자배열이다 = [1, 2, 3];
var 나중에지정도가능;
나중에지정도가능 = 1;
나중에지정도가능 = [1, 2, 3];
var 내이름 = '수경';
var 내나이 = 25;
var 내출생지역 = '안양';
var 내18번 = {
    song: '운이좋았지',
    singer: '권진아',
};
var project = {
    member: ['yeom', 'park'],
    days: 30,
    started: true,
};
var 유니온타입 = 123;
유니온타입 = '스트링가능';
var 유니온배열 = [1, 2, 3];
유니온배열 = ['가', '나', 1];
var 유니온오브젝트 = { a: 123 };
유니온오브젝트 = { a: '가나다' };
var 애니;
애니 = 123;
애니 = [];
var 언노운;
언노운 = 123;
언노운 = {};
var 애니때문에실드죽음 = 애니;
애니 - 1;
var 문제없음 = '0';
문제없음 + 1;
var 문제있음;
var 이러면문제없음 = 0;
이러면문제없음 + 1;
var 언노운은연산불가 = 1;
var user = 'yeom';
var age = undefined;
var married = false;
var 나 = [user, age, married];
var 학교 = {
    score: [100, 97, 84],
    teacher: 'Sam',
    friend: 'Yoon',
};
학교.score[4] = false;
학교.friend = ['Hyun', 학교.teacher];
function 나아기함수(x) {
    return x * 2;
}
나아기함수(3);
function 나는보이드(x) {
    console.log(x);
}
나는보이드(2);
function 나는옵셔널(x) {
    console.log(x);
}
나는옵셔널();
function 왜에러일까(x) {
}
왜에러일까(2);
function 내로잉해주기(x) {
    if (typeof x === 'number')
        console.log(x + 3);
}
내로잉해주기(2);
function 문제1(name) {
    if (name)
        console.log("\uC548\uB155\uD558\uC138\uC694 ".concat(name, "\uB2D8!"));
    else
        console.log('이름이 없습니다.');
}
문제1('초코');
function 문제2(x) {
    if (typeof x === 'number')
        return (x + '').length;
    else
        return x.length;
}
console.log(문제2(123));
console.log(문제2('다섯글자임'));
function 문제3(월소득, 집보유여부, 매력점수) {
    if (월소득 < 0)
        return '월소득이 왜 마이너스임';
    var 점수 = 월소득 * 1 + (집보유여부 ? 500 : 0) + (매력점수 === '상' ? 100 : 0);
    if (점수 >= 600)
        return '결혼가능';
}
console.log(문제3(700, false, '중'));
console.log(문제3(-100, false, '상'));
function 유니온타입다룰땐내로잉(x) {
    if (typeof x === 'string')
        return x + '1';
    else
        return x + 1;
}
유니온타입다룰땐내로잉(123);
function 배열요소내로잉(x) {
    var array = [];
    if (typeof x === 'number')
        array[0] = x;
}
배열요소내로잉(123);
function 어설션(x) {
    var array = [];
    array[0] = x;
}
function cleaning(dirty) {
    var clean = [];
    dirty.map(function (v, i) {
        clean.push(Number(v));
    });
    return clean;
}
console.log(cleaning(['1', 2, '3']));
var 철수쌤 = { subject: 'math' };
var 영희쌤 = { subject: ['science', 'english'] };
var 민수쌤 = { subject: ['science', 'art', 'korean'] };
function 마지막과목(teacher) {
    if (typeof teacher.subject == 'string')
        return teacher.subject;
    else if (Array.isArray(teacher.subject))
        return teacher.subject.slice(-1)[0];
    else
        return '업쪄';
}
console.log(마지막과목(철수쌤));
console.log(마지막과목(영희쌤));
console.log(마지막과목(민수쌤));
var 동물 = 'kitten';
동물 = 123;
var 고양이 = { name: '정아', age: 4 };
var 출생지역 = { region: 'seoul' };
출생지역.region = 'busan';
var 단짝 = {
    name: '토심',
};
단짝.name = '토뭉';
var 베프 = {
    name: '토심',
};
var position = { x: 10, y: 20 };
var teen = { name: '정아', phone: 2222, email: 'jeongah@kitty.com', isTeen: true };
