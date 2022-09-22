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

let 유니온배열: (number | string)[] = [1, 2, 3];
let 이렇게도됨: number[] | string[] = [1, 2, 3];
유니온배열 = ['가', '나', '다'];
이렇게도됨 = ['가', '나', '다'];

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
