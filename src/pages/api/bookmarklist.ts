// pages/api/posts.ts
import { url } from 'inspector';
import type { NextApiRequest, NextApiResponse } from 'next';

const posts = [
    {
        id: 1,
        name: "MacBook Pro 16인치",
        description: "고성능이 필요한 프로그래머에게 추천하는 최고의 노트북입니다. 빠른 속도와 고해상도 디스플레이가 특징입니다.",
        url: "https://www.apple.com/macbook-pro-16/",
      },
      {
        id: 2,
        name: "Dell XPS 13",
        description: "휴대성을 중요시하는 사용자에게 추천하는 울트라북입니다. 얇고 가벼운 디자인과 강력한 성능을 자랑합니다.",
      url: "https://www.dell.com/ko-kr/shop/%EB%85%B8%ED%8A%B8%EB%B6%81-%EC%9A%B8%ED%8A%B8%EB%9D%BC%EB%B6%81/xps-13/spd/xps-13-9310-laptop"
    },
      {
        id: 3,
        name: "HP Spectre x360",
        description: "2-in-1 디자인을 갖춘 노트북으로, 터치스크린과 태블릿 모드를 지원하여 다양한 작업에 유용합니다.",
url: "https://www8.hp.com/kr/ko/laptops/spectre-x360-13t-aw200.html"      
    },
      {
        id: 4,
        name: "Lenovo ThinkPad X1 Carbon",
        description: "비즈니스 사용자를 위한 견고하고 신뢰할 수 있는 노트북입니다. 긴 배터리 수명과 뛰어난 키보드로 유명합니다.",
    url: "https://www.lenovo.com/kr/ko/laptops/thinkpad/x-series/ThinkPad-X1-Carbon-Gen-9/p/22TP2TXX19Y" },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(posts);
}
