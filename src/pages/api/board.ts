import type { NextApiRequest, NextApiResponse } from 'next';

const boardItems = [
  { id: 1, image: "https://via.placeholder.com/150?text=Laptop+1", title: "MacBook Pro의 노트북", content: "성능과 디자인 모두 우수한 노트북입니다.", author: "홍길동", date: "2023-06-29" },
  { id: 2, image: "https://via.placeholder.com/150?text=Laptop+2", title: "Dell XPS 13 추천", content: "가벼운 무게와 강력한 성능을 자랑합니다.", author: "김철수", date: "2023-06-30" },
  { id: 3, image: "https://via.placeholder.com/150?text=Laptop+3", title: "HP Spectre x360 사용기", content: "변환 가능한 디자인으로 다양한 용도로 사용 가능합니다.", author: "박영희", date: "2023-07-01" },
  { id: 4, image: "https://via.placeholder.com/150?text=Laptop+4", title: "Asus ROG 노트북", content: "게임 성능이 뛰어난 게이밍 노트북입니다.", author: "이민수", date: "2023-07-02" },
  { id: 5, image: "https://via.placeholder.com/150?text=Laptop+5", title: "LG 그램 리뷰", content: "가벼운 무게와 긴 배터리 수명이 장점입니다.", author: "정다정", date: "2023-07-03" },
  { id: 6, image: "https://via.placeholder.com/150?text=Laptop+6", title: "Lenovo ThinkPad X1 Carbon", content: "튼튼한 내구성과 편안한 키보드가 매력적입니다.", author: "최기철", date: "2023-07-04" },
  { id: 7, image: "https://via.placeholder.com/150?text=Laptop+7", title: "Microsoft Surface Laptop 4", content: "터치스크린과 뛰어난 디스플레이를 제공합니다.", author: "강은주", date: "2023-07-05" },
  { id: 8, image: "https://via.placeholder.com/150?text=Laptop+8", title: "Razer Blade 15", content: "고사양 게임을 위한 최고의 선택입니다.", author: "조형진", date: "2023-07-06" },
  { id: 9, image: "https://via.placeholder.com/150?text=Laptop+9", title: "Acer Swift 3", content: "합리적인 가격에 뛰어난 성능을 자랑합니다.", author: "박진우", date: "2023-07-07" },
  { id: 10, image: "https://via.placeholder.com/150?text=Laptop+10", title: "Samsung Galaxy Book Pro", content: "얇고 가벼운 디자인이 매력적입니다.", author: "윤수정", date: "2023-07-08" },
  { id: 11, image: "https://via.placeholder.com/150?text=Laptop+11", title: "Google Pixelbook Go", content: "크롬 OS의 빠른 성능을 제공합니다.", author: "이정환", date: "2023-07-09" },
  { id: 12, image: "https://via.placeholder.com/150?text=Laptop+12", title: "Alienware m15 R4", content: "강력한 게이밍 성능을 자랑합니다.", author: "김상혁", date: "2023-07-10" },
  { id: 13, image: "https://via.placeholder.com/150?text=Laptop+13", title: "Huawei MateBook X Pro", content: "세련된 디자인과 성능을 모두 갖춘 노트북입니다.", author: "장민호", date: "2023-07-11" },
  { id: 14, image: "https://via.placeholder.com/150?text=Laptop+14", title: "MSI GS66 Stealth", content: "게이머를 위한 최고 성능의 노트북입니다.", author: "윤지후", date: "2023-07-12" },
  { id: 15, image: "https://via.placeholder.com/150?text=Laptop+15", title: "Apple MacBook Air M1", content: "새로운 M1 칩셋으로 놀라운 성능을 자랑합니다.", author: "한수민", date: "2023-07-13" },
  { id: 16, image: "https://via.placeholder.com/150?text=Laptop+16", title: "Asus ZenBook 14", content: "얇고 가벼운 디자인이 돋보입니다.", author: "노경진", date: "2023-07-14" },
  { id: 17, image: "https://via.placeholder.com/150?text=Laptop+17", title: "HP Envy x360", content: "2-in-1 노트북으로 다양한 용도로 활용 가능합니다.", author: "최정훈", date: "2023-07-15" },
  { id: 18, image: "https://via.placeholder.com/150?text=Laptop+18", title: "Acer Predator Helios 300", content: "고성능 게이밍 노트북입니다.", author: "이소라", date: "2023-07-16" },
  { id: 19, image: "https://via.placeholder.com/150?text=Laptop+19", title: "Dell Inspiron 15", content: "합리적인 가격에 좋은 성능을 제공합니다.", author: "백승호", date: "2023-07-17" },
  { id: 20, image: "https://via.placeholder.com/150?text=Laptop+20", title: "Lenovo Yoga 7i", content: "2-in-1 노트북으로 사용이 편리합니다.", author: "김나연", date: "2023-07-18" },
  { id: 21, image: "https://via.placeholder.com/150?text=Laptop+21", title: "Microsoft Surface Book 3", content: "강력한 성능과 탈착식 디스플레이가 특징입니다.", author: "박상준", date: "2023-07-19" },
  { id: 22, image: "https://via.placeholder.com/150?text=Laptop+22", title: "Razer Blade Stealth 13", content: "휴대성이 뛰어난 게이밍 노트북입니다.", author: "조윤서", date: "2023-07-20" },
  { id: 23, image: "https://via.placeholder.com/150?text=Laptop+23", title: "LG 울트라 PC", content: "뛰어난 배터리 성능을 자랑합니다.", author: "이동혁", date: "2023-07-21" },
  { id: 24, image: "https://via.placeholder.com/150?text=Laptop+24", title: "Samsung Notebook 9 Pro", content: "프리미엄 디자인과 성능을 제공합니다.", author: "김채원", date: "2023-07-22" },
  { id: 25, image: "https://via.placeholder.com/150?text=Laptop+25", title: "Google Pixelbook", content: "크롬 OS의 빠르고 간편한 사용성을 제공합니다.", author: "박시우", date: "2023-07-23" },
  { id: 26, image: "https://via.placeholder.com/150?text=Laptop+26", title: "Asus VivoBook S15", content: "합리적인 가격에 다양한 기능을 제공합니다.", author: "정승연", date: "2023-07-24" },
  { id: 27, image: "https://via.placeholder.com/150?text=Laptop+27", title: "HP Pavilion 15", content: "강력한 성능과 세련된 디자인이 특징입니다.", author: "문지후", date: "2023-07-25" },
  { id: 28, image: "https://via.placeholder.com/150?text=Laptop+28", title: "Dell G5 15", content: "게이밍에 최적화된 노트북입니다.", author: "이승민", date: "2023-07-26" },
  { id: 29, image: "https://via.placeholder.com/150?text=Laptop+29", title: "Lenovo Legion 5", content: "고사양 게임을 위한 뛰어난 성능을 자랑합니다.", author: "김서윤", date: "2023-07-27" },
  { id: 30, image: "https://via.placeholder.com/150?text=Laptop+30", title: "Apple MacBook Pro 16", content: "크고 선명한 디스플레이를 제공합니다.", author: "박지훈", date: "2023-07-28" }
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(boardItems);
}
