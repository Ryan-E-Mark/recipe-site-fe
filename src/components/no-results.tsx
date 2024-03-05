import { FC } from "react";

interface NoResultsProps {
  searchTerm: string;
}

export const NoResults: FC<NoResultsProps> = ({ searchTerm }) => {
  return (
    <h2 className="text-xl">
      No results found for <span className="font-bold">{searchTerm}</span>. Try
      searching a different term.
    </h2>
  );
};
