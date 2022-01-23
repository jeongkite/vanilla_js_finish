const quotes = [
    {
        quote: "서로에게 모든 것을 줄 때 평등한 거래가 된다. 각자가 모든 것을 얻게 된다.",
        author: "로이스 맥마스터 부욜",
    },
    {
        quote: "사랑은 우리가 원해서 피우는 폭발하는 시가이다.",
        author: "린다 배리",
    },
    {
        quote: "얼마나 많이 주느냐보다 얼마나 많은 사랑을 담느냐가 중요하다.",
        author: "마더 테레사",
    },
    {
        quote: "사랑은 끝없는 용서의 행위이며, 습관으로 굳어지는 상냥한 표정이다.",
        author: "해브록 엘리스",
    },
    {
        quote: "행복한 삶의 비밀은 올바른 관계를 형성하고 그것에 올바른 가치를 매기는 것이다.",
        author: "노먼 토머스",
    },
    {
        quote: "출생과 죽음은 피할 수 없으므로 그 사이를 즐겨라.",
        author: "조지 산타야나",
    },
    {
        quote: "소년기란 홍역처럼 어릴 때 앓고 지나가야하는 것이다. 중년이 되어 소년기가 찾아오면 심각한 증상이 될 가능성이 높다.",
        author: "P. G. 우드하우스",
    },
    {
        quote: "인생은 집을 향한 여행이다.",
        author: "허먼 멜빌",
    },
    {
        quote: "극복할 장애와 성취할 목표가 없다면 우리는 인생에서 진정한 만족이나 행복을 찾을 수 없다.",
        author: "맥스웰 몰츠",
    },
    {
        quote: "결국 삶이란 여러분이 되고자 했던 완벽한 인격체로 거듭나는 것입니다.",
        author: "오프라 윈프리",
    },
    {
        quote: "언제나 현재에 집중할 수 있다면 행복할 것이다.",
        author: "파울로 코엘료",
    },
    {
        quote: "도전을 받아들여라. 그러면 승리의 쾌감을 맛볼 지도 모른다.",
        author: "조지 S. 패튼",
    },
    {
        quote: "웃음은 그 자체로 건강하다.",
        author: "도리스 레싱",
    },
    {
        quote: "세상 모든 일은 여러분이 무엇을 생각하느냐에 따라 일어납니다.",
        author: "오프라 윈프리",
    },
    {
        quote: "재능이 있거든 가능한 모든 방법으로 사용하라. 쌓아두지 마라. 구두쇠처럼 아껴 쓰지 마라. 파산하려는 백만장자처럼 아낌없이 써라.",
        author: "브랜단 프랜시스",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
