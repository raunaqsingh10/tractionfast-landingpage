import { cn } from "../../lib/utils";

export interface TestimonialAuthor {
  name: string;
  handle: string;
  avatar: string;
}

interface TestimonialCardProps {
  author: TestimonialAuthor;
  text: string;
  href?: string;
}

export function TestimonialCard({ author, text, href }: TestimonialCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group relative flex w-[350px] shrink-0 flex-col justify-between overflow-hidden rounded-xl bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg",
        "border border-gray-200",
        !href && "cursor-default"
      )}
    >
      <div className="mb-4">
        <p className="text-gray-700 leading-relaxed">{text}</p>
      </div>
      <div className="flex items-center gap-4">
        <img
          src={author.avatar}
          alt={author.name}
          className="h-12 w-12 rounded-full object-cover"
        />
        <div>
          <p className="font-medium text-gray-900">{author.name}</p>
          <p className="text-sm text-gray-500">{author.handle}</p>
        </div>
      </div>
    </a>
  );
}