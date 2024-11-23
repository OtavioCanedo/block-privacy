"use client";

import { Card } from "@/components/card";
import {
  AlertCircle,
  Bell,
  Blocks,
  Building,
  ClipboardCheck,
  Clock,
  Database,
  Eye,
  File,
} from "lucide-react";
import { ChartOverview } from "@/components/chart";
import { Template } from "@/components/template";
import { DataAccess } from "@/components/dataAccess";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const data = [
    {
      title: "Total de Acessos",
      icon: <Eye className="h-4 w-4" />,
      description: "Acessos nos últimos 90 dias",
      content: <p className="text-base sm:text-lg font-bold">50 acessos</p>,
    },
    {
      title: "Último Acesso",
      icon: <Clock className="h-4 w-4" />,
      description: "Último acesso registrado",
      content: (
        <p className="text-base sm:text-lg font-bold">25/11/2024 17:30</p>
      ),
    },
    {
      title: "Solicitações de Acesso",
      icon: <File className="h-4 w-4" />,
      description: "Solicitações nos últimos 30 dias",
      content: (
        <p className="text-base sm:text-lg font-bold">20 solicitações</p>
      ),
    },
    {
      title: "Fontes de Acesso",
      icon: <Building className="h-4 w-4" />,
      description: "Aplicações com acesso nos últimos 30 dias",
      content: (
        <ul className="list-disc list-inside text-sm">
          <li className="text-base sm:text-lg font-bold">Amazon</li>
          <li className="text-base sm:text-lg font-bold">Correios</li>
        </ul>
      ),
    },
    {
      title: "Tipos de Dados Acessados",
      icon: <Database className="h-4 w-4" />,
      description: "Diferent tipos de dados acessados nos últimos 7 dias",
      content: (
        <div className="flex flex-wrap gap-2">
          <span className="bg-blue-100 text-blue-800 text-base font-semibold mr-2 px-3 py-2 rounded-full">
            Nome
          </span>
          <span className="bg-green-100 text-green-800 text-base font-semibold mr-2 px-3 py-2 rounded-full">
            Email
          </span>
          <span className="bg-yellow-100 text-yellow-800 text-base font-semibold mr-2 px-3 py-2 rounded-full">
            Endereço
          </span>
        </div>
      ),
    },
    {
      title: "Registros de Acessos",
      icon: <ClipboardCheck className="h-4 w-4" />,
      description: "Registros detalhados de acessos na blockchain",
      content: (
        <div>
          <p className="text-base sm:text-lg font-bold">Total: 120 registros</p>
          <ul className="list-disc list-inside text-sm">
            <li className="text-base sm:text-lg font-bold">
              ID: 9451 | 21/11/2024 14:32 | Consulta de Dados
            </li>
            <li className="text-base sm:text-lg font-bold">
              ID: 1484 | 20/11/2024 10:15 | Compra Online
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Notificações Enviadas",
      icon: <Bell className="h-4 w-4" />,
      description: "Alertas sobre uso de dados enviados aos usuários",
      content: (
        <p className="text-base sm:text-lg font-bold">
          30 notificações enviadas
        </p>
      ),
    },
  ];
  const router = useRouter();

  return (
    <Template title="Gerenciador de Dados Descentralizados">
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {data.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </section>

      <section className="mt-4 flex flex-col md:flex-row gap-4">
        <ChartOverview />
        <DataAccess />
      </section>
    </Template>
  );
}

