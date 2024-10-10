import {
  Card as CardShadCn,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../ui/card";

interface CardProps {
  className?: string;
  title: string;
  icon?: React.ReactNode;
  description?: string;
  content: React.ReactNode;
}

export function Card({
  className,
  title,
  icon,
  description,
  content,
}: CardProps) {
  return (
    <CardShadCn className={className}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
            {title}
          </CardTitle>
          {icon && icon}
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>{content}</CardContent>
    </CardShadCn>
  );
}
