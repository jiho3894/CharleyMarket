import { useState } from "react";

interface UseMutationState {
  loading: boolean;
  data?: object;
  error?: object;
}

type UseMutaionResult = [(data: any) => void, UseMutationState];

export default function useMutation(url: string): UseMutaionResult {
  const [state, setState] = useState<UseMutationState>({
    loading: false,
    data: undefined,
    error: undefined,
  });
  function mutaion(data: any) {
    setState((prev) => ({ ...prev, loading: true }));
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json().catch(() => {}))
      .then((data) => setState((prev) => ({ ...prev, data })))
      .catch((error) => setState((prev) => ({ ...prev, error })))
      .finally(() => setState((prev) => ({ ...prev, loading: false })));
  }
  return [mutaion, { ...state }];
}
