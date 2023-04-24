import React from "react";
import styled from "@emotion/styled";
import Card from "../../../components/Card";
import useAiringTodayTv from "./useAiringTodayTv";
import Slider from "../../../components/Slider";

const Base = styled.div`
  margin-bottom: 62px;
`;

const Title = styled.h4`
  font-size: 22px;
  font-weight: 700;
  line-height: 30px;
  padding: 12px 0 14px;
`;

export default function AiringTodaySection() {
  const { data, isLoading } = useAiringTodayTv();

  const getYear = (release_date: string) => release_date.split("-")[0] || "";

  return (
    <Base>
      <Title>최근 개봉작</Title>
      {isLoading || !data ? (
        <div>...loading</div>
      ) : (
        <Slider>
          {data?.data?.results.map((tv) => (
            <Card
              key={tv.id}
              linkUrl={`/tv/${tv.id}`}
              title={tv.name}
              posterPath={`${process.env.REACT_APP_IMAGE_PREFIX}/${tv.poster_path}`}
              voteAverage={tv.vote_average}
              year={getYear(tv.first_air_date)}
            />
          ))}
        </Slider>
      )}
    </Base>
  );
}
