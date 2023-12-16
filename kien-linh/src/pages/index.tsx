import { useCallback, useState } from "react";

import DefaultMeta from "@/components/DefaultMeta";
import HomePage from "@/layout/homePage";
import LanddingPage from "@/layout/landdingPage";
import { PAGE } from "@/config/constants";

export default function Home() {
  const [page, setPage] = useState<string>(PAGE[0]);

  const handleChangePage = useCallback(() => {
    page === PAGE[0] && setPage(PAGE[1]);
  }, []);

  return (
    <>
      <DefaultMeta />
      {page === PAGE[0] ? (
        <HomePage onChangePage={handleChangePage} />
      ) : (
        <LanddingPage />
      )}
    </>
  );
}
