import React from "react";
import styled from "@emotion/styled";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LatestTvSection from "../features/tv/latest";
import AiringTodaySection from "../features/tv/airingToday";
import OnTheAirTvSection from "../features/tv/onTheAir";
import PopularTvSection from "../features/tv/popular";
import TopRateTvSection from "../features/tv/topRate";

const Main = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Container = styled.div`
  margin-top: 62px;
  padding: 24px 0;
  box-sizing: border-box;
`;

export default function TvPage() {
  return (
    <div>
      <Header />
      <Main>
        <Container>
          <LatestTvSection />
          <AiringTodaySection />
          <OnTheAirTvSection />
          <PopularTvSection />
          <TopRateTvSection />
        </Container>
      </Main>
      <Footer />
    </div>
  );
}
