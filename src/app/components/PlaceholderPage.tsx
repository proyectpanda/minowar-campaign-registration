import { PageLayout } from "./PageLayout";

export function PlaceholderPage({ title, body }: { title: string; body: string }) {
  return (
    <PageLayout>
      <div className="min-h-[calc(100vh-3.5rem)] lg:min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <h1
          className="uppercase text-[80px] sm:text-[120px] leading-none font-semibold text-[#0d0d0e]"
          style={{ fontFamily: '"Barlow Condensed", sans-serif' }}
        >
          {title}
        </h1>
        <p
          className="mt-6 max-w-xl text-[#6e757c] text-lg"
          style={{ fontFamily: '"Roboto Condensed", sans-serif' }}
        >
          {body}
        </p>
      </div>
    </PageLayout>
  );
}
