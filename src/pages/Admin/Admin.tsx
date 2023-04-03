import React, { useEffect } from "react";
import { getResults } from "../../store/admin-actions";
import { useAppDispatch } from "../../store/app/hooks";
import ResultsList from "./ResultsList";

const Admin = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getResults())
  }, [dispatch])

  return (
    <div className="w-full">
      <ResultsList />
    </div>
  );
};

export default Admin;
