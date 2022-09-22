type 내타입 = string | number;
type 멤버 = [number, boolean]; // 튜플
type 가지가지 = {
	[key: string]: string;
};

let 이름: string | number = 'choco';
let 배열: string[] | number[] = ['gom', 'ponyo'];
let 오브젝트: { name: string; age?: number } = { name: 'choco' };
let 초코: 멤버 = [123, true];

const 함수 = (x: number): number => {
	return x * 2;
};

class User {
	name: string;
	constructor(name: string) {
		this.name = 'choco';
	}
}

/* ************************************************************** */

let 이름2: string = 'choco';
let 나이2: number = 50;
let 결혼했니: boolean = false;
let 널: null = null;
let 정의안함: undefined = undefined;

let 회원들: string[] = ['yeom', 'park'];
let 회원정보: { member1: string; member2: string } = { member1: 'yeom', member2: 'park' };

// 타입스크립트 갓 배운 사람 특징) 온갖 곳에 다 타입지정해놓음 = 타입추론

let 타입지정자동으로해주나요 = true;
let 나는숫자배열이다 = [1, 2, 3];
let 나중에지정도가능;
나중에지정도가능 = 1;
나중에지정도가능 = [1, 2, 3]; // 왜 any 안막아주냐

// 문제1. 이름, 나이, 출생지역
let 내이름: string = '수경';
let 내나이: number = 25;
let 내출생지역: string = '안양';

// 문제2. 가장 좋아하는 곡과 가수이름을 object로
let 내18번: { song: string; singer: string } = {
	song: '운이좋았지',
	singer: '권진아',
};

// 문제3. 주어진 자료 타입지정
let project: { member: string[]; days: number; started: boolean } = {
	member: ['yeom', 'park'],
	days: 30,
	started: true,
};

/* ************************************************************** */

let 유니온타입: string | number = 123;
유니온타입 = '스트링가능';

let 유니온배열: (number | string)[] = [1, 2, 3]; // 숫자나 스트링을 포함한 배열
// let 이거안됨: number[] | string[] = [1, 2, 3]; // 이건 다른 의미임 = 숫자배열이거나 스트링배열
유니온배열 = ['가', '나', 1];
// 이거안됨 = ['가', '나', 1]; // 에러남

let 유니온오브젝트: { a: number | string } = { a: 123 };
유니온오브젝트 = { a: '가나다' };

// any = 타입실드 해제문법임 (일반 JS변수)
let 애니: any;
애니 = 123;
애니 = [];

// unknown = 애니랑 똑같지만 훨씬 안전
let 언노운: unknown;
언노운 = 123;
언노운 = {};

let 애니때문에실드죽음: string = 애니; // 타입이 지정된 다른 변수에 막 들어가버림
// let 언노운은실드못죽임: string = 언노운; // 못들어가고 에러남

// 타입스크립트의 엄격함 = 간단한 수학연산도 타입맞아야해서 언노운이랑은 연산못함
// 언노운 - 1; // 에러남
// 애니는 가능 ㅋㅋ
애니 - 1;

let 문제없음: string = '0';
문제없음 + 1;

let 문제있음: string | number;
// 문제있음 + 1; // 에러남

let 이러면문제없음: string | number = 0;
이러면문제없음 + 1; // 에러남

let 언노운은연산불가: unknown = 1;
// 언노운은연산불가 - 1; // 에러남

// 문제1. 다음 변수 4개 타입지정
let user: string = 'yeom';
let age: number | undefined = undefined;
let married: boolean = false;
let 나: (string | number | undefined | boolean)[] = [user, age, married];

// 문제2. 학교 타입지정
let 학교: { score: (number | boolean)[]; teacher: string; friend: string | string[] } = {
	score: [100, 97, 84],
	teacher: 'Sam',
	friend: 'Yoon',
};
학교.score[4] = false;
학교.friend = ['Hyun', 학교.teacher];

/* ************************************************************** */

function 나아기함수(x: number): number {
	return x * 2;
}

나아기함수(3);

function 나는보이드(x: number): void {
	console.log(x);
	// return 1; // 보이드는 반환값있으면 에러남 (실수로 뭔가를 리턴하는걸 막을 수 있음)
}

// 나는보이드(); // JS랑 다르게 파라미터없으면 에러남
나는보이드(2);

function 나는옵셔널(x?: number): void {
	console.log(x); // 파라미터없으면 undefined
}

나는옵셔널(); // 파라미터는 옵션

// 변수?:number === 변수:number|undefined

function 왜에러일까(x: number | string): void {
	// console.log(x + 3); // 유니온타입은 연산불가
}

왜에러일까(2);

function 내로잉해주기(x: number | string): void {
	if (typeof x === 'number') console.log(x + 3);
}

내로잉해주기(2);

// 문제1. 이름을 파라미터로 입력하면 콘솔창에 `안녕하세요 ${이름}` 출력, 파라미터 없으면 '이름이 없습니다' 출력
function 문제1(name?: string): void {
	// undefined는 falsy임
	if (name) console.log(`안녕하세요 ${name}님!`);
	else console.log('이름이 없습니다.');
}

문제1('초코');

// 문제2. 함수에 숫자 또는 문자를 집어넣으면 자릿수를 세어 출력해주는 함수
function 문제2(x: number | string): number {
	if (typeof x === 'number') return (x + '').length;
	else return x.length;
	// return x.toString().length;
}

console.log(문제2(123));
console.log(문제2('다섯글자임'));

// 문제3. 결혼 가능 확률
function 문제3(월소득: number, 집보유여부: boolean, 매력점수: string): string | void {
	if (월소득 < 0) return '월소득이 왜 마이너스임';
	const 점수 = 월소득 * 1 + (집보유여부 ? 500 : 0) + (매력점수 === '상' ? 100 : 0);
	if (점수 >= 600) return '결혼가능';
}

console.log(문제3(700, false, '중'));
console.log(문제3(-100, false, '상'));

/* ************************************************************** */

function 유니온타입다룰땐내로잉(x: number | string) {
	if (typeof x === 'string') return x + '1';
	else return x + 1;
}

유니온타입다룰땐내로잉(123);

function 배열요소내로잉(x: number | string) {
	let array: number[] = [];
	if (typeof x === 'number') array[0] = x;
}

배열요소내로잉(123);

// 내로잉할때 if문 썼으면 끝까지 써야 안전
// else, else if 안쓰면 에러로 잡아줄 수도 있음

// 내로잉 판정 문법들
// typeof 변수
// 속성명 in 오브젝트자료
// 인스턴스 instanceof 부모

// 내로잉 귀찮으면 assertion = 타입 덮어쓰기

function 어설션(x: number | string) {
	let array: number[] = [];
	array[0] = x as number; // 왼쪽에 있는 변수를 number로 덮어써주세요
}

// 빠따 안맞기 위한 assertion 문법의 용도
// 1. narrowing 할 때 씁니다 (유니온 타입을 하나로 확정지을 때 씀)
// 2. 무슨 타입이 들어올지 100% 확실할 때 씁니다 (다른 타입이 들어와도 버그 캐치를 못함)
// 버그 추적을 못하므로 웬만하면 쓰지말고, 남이 짠 코드 수정하는데 왜 타입에러가 나는지 모르겠을 때 쓰셈 (디버깅용, 비상용)

// 옛날 as 문법
// <number>x
// 리액트의 jsx태그와 헷갈려서 요즘은 거의 as키워드를 사용

// Q. 근데 내함수('123') 이렇게 숫자말고 문자를 입력하면 어떻게 돼요?
// A. '1231' 이렇게 출력될거요. as는 그냥 주장만 하는거지 ***실제로 타입을 바꿔주는건 아니기 때문***입니다

// 문제1. 배열 내부 문자타입의 숫자를 숫자로 변환해주는 클리닝함수
function cleaning(dirty: (string | number)[]): number[] {
	let clean: number[] = [];
	dirty.map((v, i) => {
		clean.push(Number(v));
	});
	return clean;
}

console.log(cleaning(['1', 2, '3']));

// 문제2. 선생님 오브젝트자료를 집어넣으면 그 선생님이 가르치는 과목중 맨뒤 1개를 리턴해주는 함수
let 철수쌤 = { subject: 'math' };
let 영희쌤 = { subject: ['science', 'english'] };
let 민수쌤 = { subject: ['science', 'art', 'korean'] };

function 마지막과목(teacher: { subject: string | string[] }): string {
	if (typeof teacher.subject == 'string') return teacher.subject;
	else if (Array.isArray(teacher.subject)) return teacher.subject.slice(-1)[0];
	else return '업쪄'; // ***여기 else문 없으면 리턴값이 없을 수 있기 때문에 에러남***
}

console.log(마지막과목(철수쌤));
console.log(마지막과목(영희쌤));
console.log(마지막과목(민수쌤));

// 배열인지 확인할때는 typeof 못씀 (프리미티브 아니기때문)
// 대신 Array.isArray() 사용해야함

/* ************************************************************** */

// type-alias = 타입별칭 (영어대문자로 시작)
type Animal = string | number | undefined;
let 동물: Animal = 'kitten';
동물 = 123;

// 오브젝트 타입
type AnimalObj = { name: string; age: number };
let 고양이: AnimalObj = { name: '정아', age: 4 };

// const 잠시 설명
// const로 선언한 오브젝트의 자료변경은 가능하다
// const는 재할당을 금지해주는 키워드이지, 안에 있는 자료의 수정을 막는 키워드는 아니기 때문임
const 출생지역 = { region: 'seoul' };
출생지역.region = 'busan';

// 타입스크립트로는 오브젝트 자료수정도 막을 수 있음
const 단짝 = {
	name: '토심',
};
단짝.name = '토뭉';

type BestFriend = {
	readonly name: string; // 읽기전용 = 실수로 수정하면 에러남
	age?: number; // 오브젝트 속성안에도 ? 사용가능 (number | undefined)
};
const 베프: BestFriend = {
	name: '토심',
};
// 베프.name = '토뭉'; // 에러남

// ***타입스크립트 에러는 에디터 & 터미널에서만 존재함***
// 실제 변환된 자바스크립트 파일은 에러없음

// 정의한 타입은 일반 타입처럼 다른 타압의 정의에 사용가능하다
type Name = string;
type Age = number;
type Person = Name | Age;

type PositionX = { x: number };
type PositionY = { y: number };
type Position = PositionX & PositionY; // & 기호로 오브젝트 속성 합쳐줄 수 있음 = extend
let position: Position = { x: 10, y: 20 };

// ***같은 이름의 type 재정의 불가능***

// 문제1. 오브젝트 타입을 정의한 type-alias 두개를 &로 합칠 때 중복된 속성이 있으면 어떻게 될까?
// 예상. 나중걸로 적용될 듯
type A = { name: string; phone: string };
type B = { phone: number; address: string };
type C = A & B;
// 결과. 둘 다 에러남 = never 타입이 되어버림 ㄷㄷ
// let c: C = { name: '모찌', phone: '1111', address: '자이' };
// let c2: C = { name: '모찌', phone: 1111, address: '자이' };

// 문제2. 주어진 조건을 만족하는 타입 만들기
type Condition = {
	color?: string;
	size: number;
	readonly position: number[];
};

// 문제3. 주어진 조건을 만족하는 타입 만들기
type Info = {
	name: string;
	phone: number;
	email: string;
};

// 문제4. 주어진 조건을 만족하는 타입 만들기
type Teen = { isTeen: boolean };
type Info2 = Info & Teen;
let teen: Info2 = { name: '정아', phone: 2222, email: 'jeongah@kitty.com', isTeen: true };

/* ************************************************************** */

// Literal types = 더 엄격한 타입 지정 (사전에 정의한 값만 들어오게)
// 장점1. 변수에 뭐가 들어올지 더 엄격하게 관리가능
// 장점2. 자동완성 힌트 굿

let 리터럴: 123; // 이렇게!
// 리터럴 = 111; // 에러남

let 접니다: '초코' | '곰';
접니다 = '초코';
접니다 = '곰';
// 접니다 = '포뇨'; // 에러남

function 리터럴파라미터(a: 'hello'): 1 | 0 {
	return 1;
}
리터럴파라미터('hello');

// 연습문제1. 리터럴 파라미터 함수 만들기
// 조건1) 가위, 바위, 보 중 1개 입력가능
// 조건2) 가위, 바위, 보만 들어올 수 있는 array를 리턴해야함
function 가위바위보(x: '가위' | '바위' | '보'): ('가위' | '바위' | '보')[] {
	return ['가위'];
}
가위바위보('가위');

// Literal type은 const변수 업글버전임

// 파라미터로 리터럴타입 객체의 value를 넘겼을 때 타입이 primitive가 되는 문제
// 해결하려면 아래처럼 as const 키워드로 오브젝트를 아예 잠가주는게 편함
let 자료 = {
	name: 'choco',
} as const; // 오브젝트 value값을 그대로 타입으로 지정해줌 + 오브젝트 속성에 모두 readonly붙여줌
자료.name; // 'choco'

// choco라는 자료만 들어올 수 있습니다 (X)
// choco라는 타입만 들어올 수 있습니다 (O)
function 내함수(a: 'choco') {}
내함수('choco');
// 내함수(자료.name); // as const 안붙여주면 타입이 string이라서 에러남 ㄷ
