import React from 'react';
import styled from 'styled-components';

const Main = () => {
  const MainStyle = styled.div`
    margin: 30px 80px;
  `;

  const MainTitleStyle = styled.div`
    padding: 10px 0px;
    font-size: 25px;
    font-weight: 800;
    color: rgb(68, 66, 66);
  `;

  const MainBox1Style = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 10px;
    margin-top: 10px;
  `;

  const MainSubBoxStyle = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr;
    border: 1px solid rgb(202, 200, 200);
    border-radius: 5px;
    box-shadow: 0 0 5px 0 rgb(214, 214, 214);
  `;

  const MainBoxImage1 = styled.div`
    background-image: url('images/card1.jpg');
    background-size: 100% 100%;
    height: 70px;
  `;

  const MainBoxImage2 = styled.div`
    background-image: url('images/card2.jpg');
    background-size: 100% 100%;
    height: 70px;
  `;

  const MainBoxImage3 = styled.div`
    background-image: url('images/card3.jpg');
    background-size: 100% 100%;
    height: 70px;
  `;

  const MainBoxImage4 = styled.div`
    background-image: url('images/card4.jpg');
    background-size: 100% 100%;
    height: 70px;
  `;

  const MainBoxContentStyle = styled.div`
    display: grid;
    align-items: center;
    margin-left: 10px;
    font-weight: 700;
  `;

  const MainBox2Style = styled.div`
    background-image: url('images/ad1.jpg');
    height: 320px;
    border-radius: 20px;
    margin-top: 30px;
    background-size: 100% 100%;
  `;

  const MainBox3Style = styled.div`
    margin-top: 30px;
  `;

  const MainSubBox2Style = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto auto;
    grid-gap: 10px;
    margin-top: 10px;
  `;

  const MainBox2Image1 = styled.div`
    background-image: url('images/choo1.png');
    height: 240px;
    background-size: 100% 100%;
  `;

  const MainBox2Image2 = styled.div`
    background-image: url('images/choo2.png');
    height: 240px;
    background-size: 100% 100%;
  `;

  const MainBox2Image3 = styled.div`
    background-image: url('images/choo3.png');
    height: 240px;
    background-size: 100% 100%;
  `;

  const MainBox2Image4 = styled.div`
    background-image: url('images/choo4.png');
    height: 240px;
    background-size: 100% 100%;
  `;

  const MainBox2Image5 = styled.div`
    background-image: url('images/choo5.png');
    height: 240px;
    background-size: 100% 100%;
  `;

  const MainBox4Style = styled.div`
    margin-top: 40px;
  `;

  const MainBox4Image = styled.div`
    margin-top: 20px;
    background-image: url('images/ad2.png');
    height: 280px;
    background-size: 100% 100%;
  `;

  const MainBox5Style = styled.div`
    margin-top: 30px;
  `;

  const MainSubBox5style = styled.div`
    margin-top: 10px;
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-gap: 10px;
  `;

  const HomeBoxStyle = styled.div``;

  const HomeImage1 = styled.div`
    background-image: url('images/home1.png');
    height: 180px;
    background-size: 100% 100%;
  `;

  const HomeImage2 = styled.div`
    background-image: url('images/home2.png');
    height: 180px;
    background-size: 100% 100%;
  `;

  const HomeImage3 = styled.div`
    background-image: url('images/home3.png');
    height: 180px;
    background-size: 100% 100%;
  `;

  const HomeImage4 = styled.div`
    background-image: url('images/home4.png');
    height: 180px;
    background-size: 100% 100%;
  `;

  const HomeImage5 = styled.div`
    background-image: url('images/home5.png');
    height: 180px;
    background-size: 100% 100%;
  `;

  const HomeImage6 = styled.div`
    background-image: url('images/home6.png');
    height: 180px;
    background-size: 100% 100%;
  `;

  const HomeImage7 = styled.div`
    background-image: url('images/home7.png');
    height: 180px;
    background-size: 100% 100%;
  `;

  const HomeImage8 = styled.div`
    background-image: url('images/home8.png');
    height: 180px;
    background-size: 100% 100%;
  `;

  const HomeInfo1 = styled.div`
    margin: 5px 0 5px 0;
    font-size: 13px;
    color: gray;
  `;

  const HomeInfo2 = styled.div`
    font-size: 18px;
    font-weight: 600;
  `;

  const HomeInfo3 = styled.div``;

  const Info3Star = styled.span`
    color: rgb(30, 119, 115);
    font-size: 12px;
  `;

  const Info3Score = styled.span`
    font-size: 13px;
    margin: 0 5px 0 5px;
  `;
  const Info3Host = styled.span`
    font-size: 13px;
  `;

  return (
    <MainStyle>
      <MainTitleStyle>에어비앤비 둘러보기</MainTitleStyle>
      <MainBox1Style>
        <MainSubBoxStyle>
          <MainBoxImage1></MainBoxImage1>
          <MainBoxContentStyle>숙소 및 부티크 호텔</MainBoxContentStyle>
        </MainSubBoxStyle>
        <MainSubBoxStyle>
          <MainBoxImage2></MainBoxImage2>
          <MainBoxContentStyle>트립</MainBoxContentStyle>
        </MainSubBoxStyle>
        <MainSubBoxStyle>
          <MainBoxImage3></MainBoxImage3>
          <MainBoxContentStyle>어드벤처</MainBoxContentStyle>
        </MainSubBoxStyle>
        <MainSubBoxStyle>
          <MainBoxImage4></MainBoxImage4>
          <MainBoxContentStyle>레스토랑</MainBoxContentStyle>
        </MainSubBoxStyle>
      </MainBox1Style>

      <MainBox2Style></MainBox2Style>

      <MainBox3Style>
        <MainTitleStyle>추천 여행지</MainTitleStyle>
        <MainSubBox2Style>
          <MainBox2Image1></MainBox2Image1>
          <MainBox2Image2></MainBox2Image2>
          <MainBox2Image3></MainBox2Image3>
          <MainBox2Image4></MainBox2Image4>
          <MainBox2Image5></MainBox2Image5>
        </MainSubBox2Style>
      </MainBox3Style>

      <MainBox4Style>
        <MainTitleStyle>에어비앤비 플러스를 만나보세요!</MainTitleStyle>
        <div>퀄리티와 인테리어 디자인이 검증된 숙소 셀렉션</div>
        <MainBox4Image></MainBox4Image>
      </MainBox4Style>

      <MainBox5Style>
        <MainTitleStyle>전 세계 숙소</MainTitleStyle>
        <MainSubBox5style>
          <HomeBoxStyle>
            <HomeImage1></HomeImage1>
            <HomeInfo1>오두막 · BALIAN BEACH, BALI</HomeInfo1>
            <HomeInfo2>BALIAN TREEHOUSE w beautiful pool</HomeInfo2>
            <HomeInfo3>
              <Info3Star>★★★★★</Info3Star>
              <Info3Score>185</Info3Score>
              <Info3Host>슈퍼호스트</Info3Host>
            </HomeInfo3>
          </HomeBoxStyle>

          <HomeBoxStyle>
            <HomeImage2></HomeImage2>
            <HomeInfo1>키클라데스 주택 · 이아(OIA)</HomeInfo1>
            <HomeInfo2>Unique Architecture Cave House</HomeInfo2>
            <HomeInfo3>
              <Info3Star>★★★★★</Info3Star>
              <Info3Score>188</Info3Score>
              <Info3Host>슈퍼호스트</Info3Host>
            </HomeInfo3>
          </HomeBoxStyle>

          <HomeBoxStyle>
            <HomeImage3></HomeImage3>
            <HomeInfo1>성 · 트웬티나인 팜스(TWENTYNINE PALMS)</HomeInfo1>
            <HomeInfo2>Tile House</HomeInfo2>
            <HomeInfo3>
              <Info3Star>★★★★★</Info3Star>
              <Info3Score>367</Info3Score>
              <Info3Host>슈퍼호스트</Info3Host>
            </HomeInfo3>
          </HomeBoxStyle>

          <HomeBoxStyle>
            <HomeImage4></HomeImage4>
            <HomeInfo1>검증됨 · 케이프타운</HomeInfo1>
            <HomeInfo2>
              Modern, Chic Penthouse with Mountain, City & Sea Views
            </HomeInfo2>
            <HomeInfo3>
              <Info3Star>★★★★★</Info3Star>
              <Info3Score>177</Info3Score>
              <Info3Host>슈퍼호스트</Info3Host>
            </HomeInfo3>
          </HomeBoxStyle>

          <HomeBoxStyle>
            <HomeImage5></HomeImage5>
            <HomeInfo1>아파트 전체 · 마드리드(MADRID)</HomeInfo1>
            <HomeInfo2>솔광장에 위치한 개인 스튜디오</HomeInfo2>
            <HomeInfo3>
              <Info3Star>★★★★★</Info3Star>
              <Info3Score>459</Info3Score>
              <Info3Host>슈퍼호스트</Info3Host>
            </HomeInfo3>
          </HomeBoxStyle>

          <HomeBoxStyle>
            <HomeImage6></HomeImage6>
            <HomeInfo1>집 전체 · HUMAC</HomeInfo1>
            <HomeInfo2>Vacation house in etno-eco village Humac</HomeInfo2>
            <HomeInfo3>
              <Info3Star>★★★★★</Info3Star>
              <Info3Score>119</Info3Score>
              <Info3Host>슈퍼호스트</Info3Host>
            </HomeInfo3>
          </HomeBoxStyle>

          <HomeBoxStyle>
            <HomeImage7></HomeImage7>
            <HomeInfo1>개인실 · 마라케시</HomeInfo1>
            <HomeInfo2>The Cozy Palace</HomeInfo2>
            <HomeInfo3>
              <Info3Star>★★★★★</Info3Star>
              <Info3Score>559</Info3Score>
              <Info3Host>슈퍼호스트</Info3Host>
            </HomeInfo3>
          </HomeBoxStyle>

          <HomeBoxStyle>
            <HomeImage8></HomeImage8>
            <HomeInfo1>게스트용 별채 전체 · 로스앤젤레스</HomeInfo1>
            <HomeInfo2>Private Pool House with Amazing Views!</HomeInfo2>
            <HomeInfo3>
              <Info3Star>★★★★★</Info3Star>
              <Info3Score>170</Info3Score>
              <Info3Host>슈퍼호스트</Info3Host>
            </HomeInfo3>
          </HomeBoxStyle>
        </MainSubBox5style>
      </MainBox5Style>
    </MainStyle>
  );
};

export default Main;
