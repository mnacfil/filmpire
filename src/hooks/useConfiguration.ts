import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getConfiguration } from "../services/tmdbApi";

const useConfiguration = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["configuration"],
    queryFn: getConfiguration,
    staleTime: 1000 * 60 * 60,
  });

  return {
    isLoading,
  };
};

export default useConfiguration;
