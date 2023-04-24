import { AxiosError } from "axios";
import { ListResponse, TVDetail } from "./../../types";
import { AxiosResponse } from "axios";
import { useQuery } from "react-query";
import { similarApi } from "../../apis/tvApi";

const useTvSimilar = (id: string) => {
  return useQuery<AxiosResponse<ListResponse<TVDetail>>, AxiosError>(
    ["similarTv", id],
    () => similarApi(id)
  );
};

export default useTvSimilar;
