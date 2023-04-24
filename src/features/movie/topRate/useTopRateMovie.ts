import { useQuery } from "react-query";
import { topRatedApi } from "../../../apis/movieApi";
import { AxiosError, AxiosResponse } from "axios";
import { MovieDetail, ListResponse } from "../../../types";

const useTopRateMovie = () => {
  return useQuery<AxiosResponse<ListResponse<MovieDetail>>, AxiosError>(
    "topRateMoive",
    topRatedApi
  );
};

export default useTopRateMovie;
