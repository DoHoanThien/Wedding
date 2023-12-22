import { useCallback, useState } from "react";
import HomePage from "@/layout/homePage";
import LanddingPage from "@/layout/landdingPage";
import { PAGE } from "@/config/constants";

export default function Home() {
  const [page, setPage] = useState<string>(PAGE[0]);

  const handleChangePage = useCallback(() => {
    page === PAGE[0] && setPage(PAGE[1]);
    window.scrollTo(0, 0);
  }, [page]);

  return page === PAGE[0] ? (
    <HomePage onChangePage={handleChangePage} />
  ) : (
    <LanddingPage />
  );
}
