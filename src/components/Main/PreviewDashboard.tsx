"use client";
import Link from "next/link";

const PreviewDashboard = () => {
  return (
    <>
      <main className="relative my-20">

        <section className="overflow-hidden bg-white dark:bg-transparent">
          <div className="relative mx-auto max-w-5xl px-6 py-28 lg:py-24">
            <div className="relative z-10 mx-auto max-w-2xl text-center">
              <h1 className="text-title text-balance text-4xl font-semibold md:text-5xl lg:text-6xl">
                Modern Software testing reimagined
              </h1>
              <p className="text-body mx-auto mt-8 max-w-2xl text-xl">
                Officiis laudantium excepturi ducimus rerum dignissimos, and
                tempora nam vitae, excepturi ducimus iste provident dolores.
              </p>
              <Link
                href=""
                className="btn variant-neutral sz-md mx-auto mt-8 w-fit"
              >
                <span className="btn-label">Start Building</span>
              </Link>
            </div>
          </div>
          <div className="mx-auto -mt-16 max-w-7xl">
            <div className="-mr-16 pl-16 [perspective:1000px] lg:-mr-56 lg:pl-56">
              <div className="[transform:rotateX(20deg);]">
                <div className="relative [transform:skewX(.36rad);] lg:h-[44rem]">
                  <div className="absolute -inset-16 z-[1] bg-gradient-to-b from-white via-transparent to-white sm:-inset-32 dark:from-neutral-950 dark:via-transparent dark:to-neutral-950"></div>
                  <div className="absolute -inset-16 z-[1] bg-gradient-to-r from-white via-transparent to-white sm:-inset-32 dark:from-neutral-950 dark:via-transparent dark:to-neutral-950"></div>
                  <div
                    data-shade="glassy"
                    className="absolute -inset-16 bg-[linear-gradient(to_right,var(--ui-border-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--ui-border-color)_1px,transparent_1px)] bg-[size:24px_24px] [--ui-border-color:theme(colors.gray.400)] sm:-inset-32 dark:[--ui-border-color:theme(colors.white/0.2)]"
                  ></div>
                  <div className="absolute inset-0 z-[11] bg-gradient-to-l from-white dark:from-neutral-950"></div>
                  <div className="absolute inset-0 z-[2] h-full w-full items-center px-5 py-24 [--layer-color:theme(colors.white)] [background:radial-gradient(125%_125%_at_50%_10%,transparent_40%,var(--layer-color)_100%)] dark:[--layer-color:theme(colors.gray.950)]"></div>
                  <div className="absolute inset-0 z-[2] h-full w-full items-center px-5 py-24 [--layer-color:theme(colors.white)] [background:radial-gradient(125%_125%_at_50%_10%,transparent_40%,var(--layer-color)_100%)] dark:[--layer-color:theme(colors.gray.950)]"></div>

                  <img
                    className="rounded-card relative z-[1] border dark:hidden"
                    src="https://ui.tailus.io/images/showcase/card.png"
                    alt="tailus ui hero section"
                    width=""
                    height=""
                  />
                  <img
                    className="rounded-card relative z-[1] hidden border dark:block"
                    src="https://ui.tailus.io/images/showcase/card-layout-dark.webp"
                    alt="tailus ui hero section"
                    width=""
                    height=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
export default PreviewDashboard;
