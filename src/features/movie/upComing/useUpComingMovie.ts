import { useQuery } from "react-query";
import { upcomingApi } from "../../../apis/movieApi";
import { AxiosError, AxiosResponse } from "axios";
import { MovieDetail, ListResponse } from "../../../types";

const useTopRateMovie = () => {
  return useQuery<AxiosResponse<ListResponse<MovieDetail>>, AxiosError>(
    "upComingMoive",
    upcomingApi
  );
};

export default useTopRateMovie;
