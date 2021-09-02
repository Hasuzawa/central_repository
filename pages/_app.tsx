import '~/styles/globals.css'
import "tailwindcss/tailwind.css";

import type { AppProps } from 'next/app'

import { useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [count, setCount] = useState<number>(0);
  return <Component {...pageProps} count={count} setCount={setCount}/>;
}

export default MyApp
