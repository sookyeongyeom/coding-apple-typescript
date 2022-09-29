"use strict";
let 이름 = 'choco';
let 배열 = ['gom', 'ponyo'];
let 오브젝트 = { name: 'choco' };
let 초코 = [123, true];
const 함수 = (x) => {
    return x * 2;
};
class User {
    constructor(name) {
        this.name = 'choco';
    }
}
let 이름2 = 'choco';
let 나이2 = 50;
let 결혼했니 = false;
let 널 = null;
let 정의안함 = undefined;
let 회원들 = ['yeom', 'park'];
let 회원정보 = { member1: 'yeom', member2: 'park' };
let 타입지정자동으로해주나요 = true;
let 나는숫자배열이다 = [1, 2, 3];
let 나중에지정도가능;
나중에지정도가능 = 1;
나중에지정도가능 = [1, 2, 3];
let 내이름 = '수경';
let 내나이 = 25;
let 내출생지역 = '안양';
let 내18번 = {
    song: '운이좋았지',
    singer: '권진아',
};
let project = {
    member: ['yeom', 'park'],
    days: 30,
    started: true,
};
let 유니온타입 = 123;
유니온타입 = '스트링가능';
let 유니온배열 = [1, 2, 3];
유니온배열 = ['가', '나', 1];
let 유니온오브젝트 = { a: 123 };
유니온오브젝트 = { a: '가나다' };
let 애니;
애니 = 123;
애니 = [];
let 언노운;
언노운 = 123;
언노운 = {};
let 애니때문에실드죽음 = 애니;
애니 - 1;
let 문제없음 = '0';
문제없음 + 1;
let 문제있음;
let 이러면문제없음 = 0;
이러면문제없음 + 1;
let 언노운은연산불가 = 1;
let user = 'yeom';
let age = undefined;
let married = false;
let 나 = [user, age, married];
let 학교 = {
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
        console.log(`안녕하세요 ${name}님!`);
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
    const 점수 = 월소득 * 1 + (집보유여부 ? 500 : 0) + (매력점수 === '상' ? 100 : 0);
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
    let array = [];
    if (typeof x === 'number')
        array[0] = x;
}
배열요소내로잉(123);
function 어설션(x) {
    let array = [];
    array[0] = x;
}
function cleaning(dirty) {
    let clean = [];
    dirty.map((v, i) => {
        clean.push(Number(v));
    });
    return clean;
}
console.log(cleaning(['1', 2, '3']));
let 철수쌤 = { subject: 'math' };
let 영희쌤 = { subject: ['science', 'english'] };
let 민수쌤 = { subject: ['science', 'art', 'korean'] };
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
let 동물 = 'kitten';
동물 = 123;
let 고양이 = { name: '정아', age: 4 };
const 출생지역 = { region: 'seoul' };
출생지역.region = 'busan';
const 단짝 = {
    name: '토심',
};
단짝.name = '토뭉';
const 베프 = {
    name: '토심',
};
let position = { x: 10, y: 20 };
let teen = { name: '정아', phone: 2222, email: 'jeongah@kitty.com', isTeen: true };
let 리터럴;
let 접니다;
접니다 = '초코';
접니다 = '곰';
function 리터럴파라미터(a) {
    return 1;
}
리터럴파라미터('hello');
function 가위바위보(x) {
    return ['가위'];
}
가위바위보('가위');
let 자료 = {
    name: 'choco',
};
자료.name;
function 내함수(a) { }
내함수('choco');
let 함수타입부착 = function (a) {
    return 1;
};
let 회원정보임 = {
    name: 'choco',
    plusOne(a) {
        return a;
    },
    changeName: () => { },
};
회원정보임.plusOne(1);
회원정보임.changeName();
function 메인함수(a) {
    a();
}
function 콜백함수() { }
메인함수(콜백함수);
let cutZero = (a) => {
    return a[0] === '0' ? a.slice(1) : a;
};
console.log(cutZero('012345'));
let removeDash = (a) => {
    return Number(a.replace(/-/g, ''));
};
console.log(removeDash('010-1111-2222'));
let mainFunc = (a, b, c) => {
    return c(b(a));
};
console.log(mainFunc('010-3333-5555', cutZero, removeDash));
let 제목 = document.querySelector('#title');
if (제목 != null)
    제목.innerHTML = '반가워요';
if (제목 instanceof Element)
    제목.innerHTML = '반가워요';
let 버튼 = document.querySelector('#button');
if (제목 === null || 제목 === void 0 ? void 0 : 제목.innerHTML)
    제목.innerHTML = '반가워요';
let 링크 = document.querySelector('.link');
if (링크 instanceof HTMLAnchorElement)
    링크.href = 'https://kakao.com';
let 버튼2 = document.querySelector('#button');
버튼2 === null || 버튼2 === void 0 ? void 0 : 버튼2.addEventListener('click', () => {
    console.log('hi!');
});
let 이미지 = document.getElementById('image');
버튼2 === null || 버튼2 === void 0 ? void 0 : 버튼2.addEventListener('click', () => {
    if (이미지 instanceof HTMLImageElement)
        이미지.src = 'https://src.hidoc.co.kr/image/lib/2022/5/4/1651651323632_0.jpg';
});
let 링크들 = document.getElementsByClassName('link');
Array.from(링크들).map((v, i) => {
    if (v instanceof HTMLAnchorElement)
        v.href = 'https://github.com';
});
let 링크들2 = document.querySelectorAll('.link');
링크들2.forEach((v) => {
    if (v instanceof HTMLAnchorElement)
        v.href = 'https://learnus.org';
});
class Hero {
    constructor(구멍) {
        this.q = 구멍;
        this.w = 'snowball';
    }
}
let 누누 = new Hero('consume');
console.log(누누);
let 어레이 = [4, 2, 1];
let 어레이2 = new Array(4, 2, 1);
class PersonClass {
    constructor(name) {
        this.name = name;
    }
    함수(a) {
        console.log(`안녕 ${a}!`);
    }
}
let 사람1 = new PersonClass('choco');
let 사람2 = new PersonClass('gom');
console.log(사람1.name);
console.log(사람2.name);
사람1.함수('정아');
class Car {
    constructor(model, price) {
        this.model = model;
        this.price = price;
    }
    tax() {
        return this.price / 10;
    }
}
let car1 = new Car('소나타', 3000);
console.log(car1);
console.log(car1.tax());
class Word {
    constructor(...rest) {
        const numParam = [];
        const strParam = [];
        rest.forEach((v) => {
            if (typeof v === 'number')
                numParam.push(v);
            else
                strParam.push(v);
        });
        this.num = [...numParam];
        this.str = [...strParam];
    }
}
let 오브제 = new Word('choco', 25, 26, 'gom', 'ponyo', 22);
console.log(오브제.num);
console.log(오브제.str);
let 네모 = { color: 'pink', width: 100 };
let 학생 = { name: 'choco' };
let 선생 = { name: 'gom', age: 26 };
let 상품 = { brand: 'Samsung', serialNumber: 1360, model: ['TV', 'phone'] };
let 장바구니 = [
    { product: '청소기', price: 7000 },
    { product: '삼다수', price: 800 },
];
let functions = {
    plus: (a, b) => a + b,
    minus: (a, b) => a - b,
};
