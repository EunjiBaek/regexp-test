let str = `
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7-35c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
http://localhost:1234
동해물과_백두산이 마르고 닳도록
`

// the를 찾아서 배열을 만들어준다
// g -> gi 소문자 대문자 상관없이 찾아준다 생성자 방식
// const regexp = new RegExp('the', 'gi')

// 리터럴 방식
// const regexp = /the/gi
// console.log(str.match(regexp))

const regexp = /the/gi
// console.log(regexp.test(str)) // true or false

// 다시 원본데이트로 
// str = str.replace(regexp, 'AAA')
// console.log(str)

// \ -> 이스케이프 문자란 백슬래시 기호를 통해 본래의 기능에서 벗어나 상태가 바뀌는 문자를 말합니다.
// $

const h = `  the hello  world  !

`;


console.log(
    h.replace(/\s/g, '')
)





