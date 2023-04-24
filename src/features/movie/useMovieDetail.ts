import { AxiosError } from "axios";
import { AxiosResponse } from "axios";
import { useQuery } from "react-query";
import { detailApi } from "../../apis/movieApi";
import { MovieDetail } from "../../types";

const useMovieDetail = (query: string) => {
  const queryFn = () => detailApi(query);

  return useQuery<AxiosResponse<MovieDetail>, AxiosError>(
    ["movieDetail", query],
    queryFn
  );
};

export default useMovieDetail;
