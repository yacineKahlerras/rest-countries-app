import MainLayout from "@/layout/MainLayout";
import "@/index.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}
