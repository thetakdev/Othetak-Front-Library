import { useCallback, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const useSearchSession = (initialParams: Record<string, any>) => {
  const router = useRouter();
  const pathname = usePathname();
  const [query, setQuery] = useState<Record<string, any>>(() => {
    try {
      const storedQueries = sessionStorage.getItem("queries");
      if (storedQueries) {
        const parsedQueries = JSON.parse(storedQueries);
        return parsedQueries[pathname] || initialParams;
      }
    } catch (error) {
      console.error("Failed to load queries from sessionStorage", error);
    }
    return initialParams;
  });

  const saveQueryToSessionStorage = (updatedQuery: Record<string, any>) => {
    try {
      const storedQueries = sessionStorage.getItem("queries");
      const parsedQueries = storedQueries ? JSON.parse(storedQueries) : {};
      parsedQueries[pathname] = updatedQuery;
      sessionStorage.setItem("queries", JSON.stringify(parsedQueries));
    } catch (error) {
      console.error("Failed to save queries to sessionStorage", error);
    }
  };

  const resetPageSession = (pageKey: string) => {
    try {
      const queriesJSON = sessionStorage.getItem("queries");
      if (queriesJSON) {
        const queries = JSON.parse(queriesJSON);
        delete queries[pageKey];
        const updatedQueriesJSON = JSON.stringify(queries);
        sessionStorage.setItem("queries", updatedQueriesJSON);
      }
    } catch (e) {
      console.log("e", e);
    }
  };

  const updateQuery = useCallback(
    (newQuery: Record<string, any>) => {
      setQuery(newQuery);
      saveQueryToSessionStorage(newQuery);
    },
    [pathname, router]
  );

  const resetQueryToInitial = useCallback(() => {
    setQuery(initialParams);
    saveQueryToSessionStorage(initialParams);
  }, [initialParams, pathname, router]);

  return { query, updateQuery, resetQueryToInitial, resetPageSession };
};

export default useSearchSession;
