import { CircleDollarSign } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Card } from "../card";

export function Sales() {
  return (
    <Card
      className="flex-1"
      title="Últimos clientes"
      icon={<CircleDollarSign className="h-4 w-4" />}
      description="Novos clientes em 24h"
      content={
        <article className="flex items-center gap-2 border-b py-2">
          <Avatar className="h-8 w-8">
            <AvatarImage src="https://blog.ebaconline.com.br/blog/wp-content/uploads/2023/11/image6-1.png" />
            <AvatarFallback>DV</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm sm:text-base font-semibold">AAAAAAAAA</p>
            <span className="text-xs sm:text-sm text-gray-500">
              email@email.com
            </span>
          </div>
        </article>
      }
    />
  );
}
