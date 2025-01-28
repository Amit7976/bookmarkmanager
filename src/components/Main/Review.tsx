import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";

const reviews = [
  {
    name: "Rajesh",
    username: "@rajesh",
    body: "This bookmark manager is a lifesaver! Managing bookmarks has never been this easy.",
    img: "https://avatar.vercel.sh/rajesh",
  },
  {
    name: "Anjali",
    username: "@anjali",
    body: "Finally, I can find my bookmarks easily. The search and filter options are very helpful.",
    img: "https://avatar.vercel.sh/anjali",
  },
  {
    name: "Vikram",
    username: "@vikram",
    body: "Bookmark analytics blew my mind! I had no idea how many dead links I had.",
    img: "https://avatar.vercel.sh/vikram",
  },
  {
    name: "Nidhi",
    username: "@nidhi",
    body: "This app has revolutionized the way I manage my bookmarks. Love it!",
    img: "https://avatar.vercel.sh/nidhi",
  },
  {
    name: "Rahul",
    username: "@rahul",
    body: "I can finally organize my bookmarks efficiently. Thank you!",
    img: "https://avatar.vercel.sh/rahul",
  },
  {
    name: "Divya",
    username: "@divya",
    body: "The preview feature is excellent. It saves so much time!",
    img: "https://avatar.vercel.sh/divya",
  },
  {
    name: "Harsh",
    username: "@harsh",
    body: "Sharing bookmarks with my friends has never been easier. Great app!",
    img: "https://avatar.vercel.sh/harsh",
  },
  {
    name: "Shruti",
    username: "@shruti",
    body: "The ability to create folders and tags is a game-changer. I love this app.",
    img: "https://avatar.vercel.sh/shruti",
  },
  {
    name: "Vivek",
    username: "@vivek",
    body: "The app is super intuitive and makes managing bookmarks a joy.",
    img: "https://avatar.vercel.sh/vivek",
  },
  {
    name: "Karan",
    username: "@karan",
    body: "I can’t recommend this app enough. It’s a must-have for everyone.",
    img: "https://avatar.vercel.sh/karan",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
    img,
    name,
    username,
    body,
}: {
    img: string;
    name: string;
    username: string;
    body: string;
}) => {
    return (
        <figure
            className={cn(
                "relative w-80 cursor-pointer overflow-hidden rounded-xl border p-4",
                // light styles
                "border-gray-950/[.1] bg-gray-950/[.04] hover:bg-gray-950/[.05]",
                // dark styles
                "dark:border-gray-50/[.1] dark:bg-gray-300/[.10] dark:hover:bg-gray-50/[.15]",
            )}
        >
            <div className="flex flex-row items-center gap-2">
                <img className="rounded-full" width="40" height="40" alt="" src={img} />
                <div className="flex flex-col">
                    <figcaption className="text-base font-medium dark:text-white">
                        {name}
                    </figcaption>
                    <p className="text-sm font-medium dark:text-white/40">user.{username}</p>
                </div>
            </div>
            <blockquote className="mt-3 text-base text-gray-400 line-clamp-2">{body}</blockquote>
        </figure>
    );
};




export function Review() {
    return (
        <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg md:shadow-xl">
            <Marquee pauseOnHover className="[--duration:20s]">
                {firstRow.map((review) => (
                    <ReviewCard key={review.username} {...review} />
                ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:20s]">
                {secondRow.map((review) => (
                    <ReviewCard key={review.username} {...review} />
                ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
        </div>
    );
}
