/** @jsxImportSource @emotion/react */
import {
  CSSObject,
  ComponentSelector,
  SerializedStyles,
  css,
  ArrayInterpolation,
} from "@emotion/react";
import { motion } from "framer-motion";
import { useEffect, useState, ReactNode } from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import { ArrayCSSInterpolation } from "@emotion/css";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "/images/canon.jpg",
    "/images/monitor.jpg",
    "/images/tablet.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const cards = [
    {
      title: "마음에 안드시면",
      highlight: "100만원",
      img: "/images/cha.jpg",
      name: "IT 21 이승창",
      bgColor: "#f0f0f0",
      textColor: "#000",
    },
    {
      title: "제 이름을 걸고",
      highlight: "맹세합니다",
      img: "/images/sunjea.webp",
      name: "IT 21 이승창",
      bgColor: "#333",
      textColor: "#fff",
    },
    {
      title: "제 이름을 걸고",
      highlight: "맹세합니다",
      img: "/images/cha.jpg",
      name: "IT 21 이승창",
      bgColor: "#333",
      textColor: "#fff",
    },
    {
      title: "마음에 안드시면",
      highlight: "100만원",
      img: "/images/sunjea.webp",
      name: "IT 21 이승창",
      bgColor: "#f0f0f0",
      textColor: "#000",
    },
  ];

  return (
    <div css={containerStyle}>
      <Navbar>
        <Section>
          <motion.div
            css={boxStyle}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}>
            <h1 css={textStyle}>Personalized product service</h1>
          </motion.div>
        </Section>

        <InfoSection>
          <div css={textContainerStyle}>
            <h2 css={mainTextStyle}>
              나에게 어울리는 물건을 찾을 수 있는 공간,
              <span css={highlightTextStyle}> ISEUNGCHANG</span>
            </h2>
            <p css={descriptionStyle}>
              ISEUNGCHANG은 재학생들의 의견을 모아 분석하고, <br></br>이를
              바탕으로 고도화된 탐색 알고리즘을 사용하여 여러분에게 가장 필요한
              물건을 추천해드립니다.
            </p>
          </div>
          <div css={imageContainerStyle}>
            <img
              src="/images/data_science.jpg"
              alt="데이터 분석"
              css={imageStyle}
            />
          </div>
        </InfoSection>

        <CardSection>
          {cards.map((card, index) => (
            <motion.div
              css={cardStyle(card.bgColor)}
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}>
              <div css={cardContentStyle}>
                <h3 css={cardTitleStyle}>
                  {card.title}{" "}
                  <span css={highlightCardStyle}>{card.highlight}</span>
                </h3>
                <button css={buttonStyle(card.bgColor)}>
                  웹사이트 바로가기
                </button>
                <img src={card.img} alt={card.name} css={cardImageStyle} />
                <p css={cardNameStyle(card.textColor)}>{card.name}</p>
              </div>
            </motion.div>
          ))}
        </CardSection>

        <ProductPreviewSection>
          <h2 css={productTitleStyle}>상품 미리 보기</h2>
          <div css={whiteBoxStyle}>
            <div css={contentContainerStyle}>
              <div css={centerContainerStyle}>
                <div css={imageContainerStyle}>
                  <Image
                    src="/images/canon.jpg"
                    alt="Product 1"
                    css={productImageStyle}
                    width={150}
                    height={150}
                  />
                  <Image
                    src="/images/monitor.jpg"
                    alt="Product 2"
                    css={productImageStyle}
                    width={150}
                    height={150}
                  />
                  <Image
                    src="/images/tablet.jpg"
                    alt="Product 3"
                    css={productImageStyle}
                    width={150}
                    height={150}
                  />
                </div>
                <div css={moreProductsContainerStyle}>
                  <a href="https://example.com" css={moreProductsLinkStyle}>
                    상품 더 보기
                  </a>
                  <div css={arrowCircleStyle}>
                    <FaArrowRight css={arrowIconStyle} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ProductPreviewSection>
      </Navbar>
      <Footer />
    </div>
  );
};

export default Home;

const containerStyle = css`
  width: 100%;
  padding: 0;
  margin: 0;
`;

const commonSectionStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  height: 120vh;
`;

const Section: React.FC<{ children: ReactNode }> = ({ children }) => (
  <section css={[commonSectionStyle, sectionStyle]}>{children}</section>
);

const sectionStyle = css`
  background-color: #f7f7f7;
  margin: 40px 0;
`;

const InfoSection: React.FC<{ children: ReactNode }> = ({ children }) => (
  <section css={[commonSectionStyle, infoSectionStyle]}>{children}</section>
);

const infoSectionStyle = css`
  background-color: #1f1f1f;
  color: #fff;
`;

const CardSection: React.FC<{ children: ReactNode }> = ({ children }) => (
  <section css={[commonSectionStyle, cardSectionStyle]}>{children}</section>
);

const cardSectionStyle = css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  background-color: #07070a;
`;

const ProductPreviewSection: React.FC<{ children: ReactNode }> = ({
  children,
}) => (
  <section css={[commonSectionStyle, productPreviewSectionStyle]}>
    {children}
  </section>
);

const productPreviewSectionStyle = css`
  background-color: #e0e0e0;
  text-align: center;
  flex-direction: column;
`;

const boxStyle = css`
  background: linear-gradient(180deg, #404041, #1f1f1f);
  border: none;
  border-radius: 15px;
  padding: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  max-width: 800px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const textStyle = css`
  font-size: 2.5rem;
  color: #ff4500;
`;

const textContainerStyle = css`
  max-width: 800px;
  text-align: center;
  margin-bottom: 40px;
`;

const mainTextStyle = css`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: left;
`;

const highlightTextStyle = css`
  color: #ffd700;
`;

const descriptionStyle = css`
  font-size: 1.2rem;
  color: #aaa;
  text-align: left;
`;

const imageStyle = css`
  height: 20em;
  width: 30em;
  border-radius: 10px;
  object-fit: cover;
`;

const cardStyle = (
  bgColor:
    | string
    | number
    | boolean
    | ComponentSelector
    | SerializedStyles
    | CSSObject
    | ArrayCSSInterpolation
    | null
    | undefined
) => css`
  background-color: ${bgColor};
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${bgColor === "#f0f0f0" ? "#000" : "#fff"};
`;

const cardContentStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const cardTitleStyle = css`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px;
`;

const highlightCardStyle = css`
  color: #ff4500;
`;

const buttonStyle = (bgColor: string) => css`
  background-color: ${bgColor === "#f0f0f0" ? "#000" : "transparent"};
  color: ${bgColor === "#f0f0f0" ? "#fff" : "#000"};
  border: ${bgColor === "#f0f0f0" ? "none" : "1px solid #000"};
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 0.8rem;
  margin-bottom: 10px;
  display: block;

  &:hover {
    background-color: ${bgColor === "#f0f0f0" ? "#ddd" : "#000"};
    color: ${bgColor === "#f0f0f0" ? "#000" : "#fff"};
  }
`;

const cardImageStyle = css`
  width: 150px;
  height: 200px;
  border-radius: 10px;
  object-fit: cover;
  margin-bottom: 10px;
`;

const cardNameStyle = (
  textColor:
    | string
    | number
    | boolean
    | ComponentSelector
    | SerializedStyles
    | CSSObject
    | null
    | undefined
) => css`
  font-size: 1rem;
  color: ${textColor};
`;

const productTitleStyle = css`
  font-size: 3rem;
  margin-bottom: 1.2em;
  text-align: center;
`;

const whiteBoxStyle = css`
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  margin: 0 auto;
  height: 30em;
`;

const contentContainerStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const centerContainerStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2em;
`;

const imageContainerStyle = css`
  display: flex;
  align-items: center;
  gap: 2em;
`;

const productImageStyle = css`
  width: 150px;
  height: 150px;
  object-fit: cover;
`;

const moreProductsContainerStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const moreProductsLinkStyle = css`
  font-size: 1.5rem;
  color: #000;
  text-decoration: none;
  margin-bottom: 10px;
`;

const arrowCircleStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: 2px solid #000;
  border-radius: 50%;
`;

const arrowIconStyle = css`
  font-size: 1.5rem;
  color: #000;
`;
