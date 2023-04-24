import styled from "@emotion/styled";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LatestMovieSection from "../features/movie/latest";
import NowPlayingSection from "../features/movie/nowPlaying";
import PopularSection from "../features/movie/popular";
import TopRateSection from "../features/movie/topRate";
import UpComingSection from "../features/movie/upComing";

const Main = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Container = styled.div`
  margin-top: 62px;
  padding: 24px 0;
  box-sizing: border-box;
`;

export default function MainPage() {
  return (
    <div>
      <Header />
      <Main>
        <Container>
          <LatestMovieSection />
          <NowPlayingSection />
          <PopularSection />
          <TopRateSection />
          <UpComingSection />
        </Container>
      </Main>
      <Footer />
    </div>
  );
}
