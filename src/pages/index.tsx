/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { motion } from "framer-motion";
import { useEffect, useState, ReactNode } from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import Footer from "../components/Footer";
import { ArrayCSSInterpolation } from "@emotion/css";
import Link from "next/link";

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
            initial={{ opacity: 0, y: "3.125em" }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}>
            <div css={cardContentStyle}>
              <h3 css={cardTitleStyle}>
                {card.title}{" "}
                <span css={highlightCardStyle}>{card.highlight}</span>
              </h3>
              <button css={buttonStyle(card.bgColor)}>웹사이트 바로가기</button>
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
                <Link href="/main" css={moreProductsLinkStyle}>
                  상품 더 보기
                  <div css={arrowCircleStyle}>
                    <FaArrowRight css={arrowIconStyle} />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </ProductPreviewSection>

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
  padding: 2.5em;
  height: 120vh;
  @media (max-width: 48em) {
    flex-direction: column;
    padding: 1.25em;
    height: auto;
  }
`;

const Section: React.FC<{ children: ReactNode }> = ({ children }) => (
  <section css={[commonSectionStyle, sectionStyle]}>{children}</section>
);

const sectionStyle = css`
  background-color: #f7f7f7;
  margin: 2.5em 0;
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
  gap: 1.25em;
  background-color: #07070a;

  @media (max-width: 48em) {
    grid-template-columns: 1fr;
    gap: 0.625em;
  }
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
  border-radius: 0.9375em;
  padding: 4.26em;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  max-width: 50em;
  box-shadow: 0 0.25em 0.5em rgba(0, 0, 0, 0.2);

  @media (max-width: 48em) {
    padding: 2.5em;
    width: 60%;
  }
`;

const textStyle = css`
  font-size: 2.5em;
  color: #ff4500;

  @media (max-width: 48em) {
    font-size: 1.5em;
  }
`;

const textContainerStyle = css`
  max-width: 50em;
  text-align: center;
  margin-bottom: 2.5em;

  @media (max-width: 48em) {
    margin-bottom: 1.25em;
  }
`;

const mainTextStyle = css`
  font-size: 2.5em;
  font-weight: bold;
  margin-bottom: 1.25em;
  text-align: left;

  @media (max-width: 48em) {
    font-size: 1.5em;
    margin-bottom: 0.625em;
  }
`;

const highlightTextStyle = css`
  color: #ffd700;
`;

const descriptionStyle = css`
  font-size: 1.2em;
  color: #aaa;
  text-align: left;

  @media (max-width: 48em) {
    font-size: 1em;
  }
`;

const imageStyle = css`
  height: 20em;
  width: 30em;
  border-radius: 0.625em;
  object-fit: cover;

  @media (max-width: 48em) {
    height: 15em;
    width: 80%;
    margin: 0 auto;
  }
`;

const cardStyle = (
  bgColor: string | number | boolean | null | undefined
) => css`
  background-color: ${bgColor};
  border-radius: 0.625em;
  padding: 1.25em;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${bgColor === "#f0f0f0" ? "#000" : "#fff"};

  @media (max-width: 48em) {
    padding: 0.625em;
  }
`;

const cardContentStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const cardTitleStyle = css`
  font-size: 1.5em;
  font-weight: bold;
  text-align: center;
  margin-bottom: 0.625em;

  @media (max-width: 48em) {
    font-size: 1.2em;
  }
`;

const highlightCardStyle = css`
  color: #ff4500;
`;

const buttonStyle = (bgColor: string) => css`
  background-color: ${bgColor === "#f0f0f0" ? "#000" : "transparent"};
  color: ${bgColor === "#f0f0f0" ? "#fff" : "#000"};
  border: ${bgColor === "#f0f0f0" ? "none" : "1px solid #000"};
  border-radius: 0.3125em;
  padding: 0.3125em 0.625em;
  cursor: pointer;
  font-size: 0.8em;
  margin-bottom: 0.625em;
  display: block;

  &:hover {
    background-color: ${bgColor === "#f0f0f0" ? "#ddd" : "#000"};
    color: ${bgColor === "#f0f0f0" ? "#000" : "#fff"};
  }

  @media (max-width: 48em) {
    padding: 0.3125em 0.625em;
    font-size: 0.7em;
  }
`;

const cardImageStyle = css`
  width: 9.375em;
  height: 12.5em;
  border-radius: 0.625em;
  object-fit: cover;
  margin-bottom: 0.625em;

  @media (max-width: 48em) {
    width: 6.25em;
    height: 9.375em;
  }
`;

const cardNameStyle = (
  textColor: string | number | boolean | null | undefined
) => css`
  font-size: 1em;
  color: ${textColor};

  @media (max-width: 48em) {
    font-size: 0.8em;
  }
`;

const productTitleStyle = css`
  font-size: 3em;
  margin-bottom: 1.2em;
  text-align: center;

  @media (max-width: 48em) {
    font-size: 2em;
    margin-bottom: 0.8em;
  }
`;

const whiteBoxStyle = css`
  background-color: #fff;
  border-radius: 0.9375em;
  box-shadow: 0 0.25em 0.5em rgba(0, 0, 0, 0.2);
  padding: 2.5em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  margin: 0 auto;
  height: 30em;

  @media (max-width: 48em) {
    padding: 1.25em;
    height: auto;
    width: 75%;
  }
`;

const contentContainerStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media (max-width: 48em) {
    flex-direction: column;
  }
`;

const centerContainerStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2em;

  @media (max-width: 48em) {
    flex-direction: column;
    gap: 1em;
  }
`;

const imageContainerStyle = css`
  display: flex;
  align-items: center;
  gap: 2em;

  @media (max-width: 48em) {
    gap: 1em;
    flex-wrap: wrap;
  }
`;

const productImageStyle = css`
  width: 9.375em;
  height: 9.375em;
  object-fit: cover;

  @media (max-width: 48em) {
    width: 4.22em;
    height: 5.25em;
  }
`;

const moreProductsContainerStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const moreProductsLinkStyle = css`
  font-size: 1.5em;
  color: #000;
  text-decoration: none;
  margin-bottom: 0.625em;

  @media (max-width: 48em) {
    font-size: 1em;
  }
`;

const arrowCircleStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5em;
  height: 2.5em;
  border: 0.125em solid #000;
  border-radius: 50%;
`;

const arrowIconStyle = css`
  font-size: 1.5em;
  color: #000;
`;
