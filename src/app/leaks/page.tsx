"use client";

import { Template } from "@/components/template";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ChevronRight, TriangleAlert } from "lucide-react";
import { useState } from "react";

export default function Leaks() {
  const dataLeaks = [
    {
      date: "Janeiro 2024",
      leaks: "Nome, CPF e telefone",
      description:
        "Esses dados foram encontrados em um fórum da dark web, onde estão sendo vendidos para fraudes bancárias e clonagem de identidade. A exposição desses dados pode permitir ataques de phishing e acesso não autorizado a contas bancárias.",
    },
    {
      date: "Junho 2024",
      leaks: "Nome, e-mail e endereço",
      description:
        "Vazados de um sistema de e-commerce, esses dados estão circulando em mercados da deep web, sendo usados para campanhas de e-mail maliciosas e envio de produtos não solicitados. As vítimas podem ser alvo de fraudes ou ataques de engenharia social.",
    },
    {
      date: "Setembro 2024",
      leaks: "Nome, telefone e RG",
      description:
        "Esses dados foram vazados após um ataque a um aplicativo de mensagens, e agora estão disponíveis em sites da dark web. Podem ser usados para criar perfis falsos ou realizar golpes, como o roubo de identidade ou a falsificação de documentos.",
    },
  ];
  const faqs = [
    {
      question: "O que é Dark Web?",
      answer: `A internet é composta basicamente por três níveis: surface web, deep web e dark web.

Surface web ou rede de superfície é a parte da internet em que geralmente navegamos, visitando sites e conteúdos, como notícias, sites de lojas, etc. São conteúdos de fácil acesso, que você encontra jogando em buscadores como o Google.

Deep web ou rede profunda é a parte que fica tudo aquilo que precisa de alguma permissão especial para ser acessado. Você tem acesso a deep web sem nem perceber quando acessa seu e-mail, por exemplo. As mensagens no WhatsApp também fazem parte da deep web. Na deep web é onde a maioria dos dados de cadastrados estão armazenados.

Dark web ou rede obscura são páginas que não são encontradas por buscadores tradicionais, como o Google. Também não é possível acessar a Dark Web com um navegador comum, como Chrome, Firefox, Internet Explorer, etc. São necessários programas específicos e os endereços dos sites são bem complicados, geralmente uma combinação de números e caracteres.

Quando você faz uma busca pela internet na surface web, o seu computador se comunica com um servidor, que manda a resposta daquilo que você está buscando e isso deixa “pegadas”, sendo fácil de rastrear pelas autoridades caso seja necessário.

Já na Dark Web, a comunicação é como se fosse um labirinto de informações, o que dificulta o rastreamento dos usuários. Por não ser um lugar controlável, os criminosos se aproveitam dessa privacidade para comercializar dados pessoais roubados.`,
    },
    {
      question: "Como criminosos podem conseguir meus dados pessoais?",
      answer: `Os criminosos conseguem esses dados de diversas formas. As duas mais comuns são ataque hacker a diferentes bases de cadastro, como redes sociais, plataformas de filmes e séries, sites de compra e etc., e ataque virtuais, como phishing.`,
    },
    {
      question: "O que é phishing?",
      answer: `Phishing é uma ameaça virtual que visa roubar dados pessoais (senhas, dados financeiros, bancários, número de cartão de crédito) de forma ilícita. Essa forma de fraude tem crescido ultimamente, por meio de SMS, e-mail, ligações telefônicas, aplicativos como WhatsApp, Telegram, Facebook, Instagram e sites projetados especificamente para roubar dados pessoais.

O autor do phishing se passa por uma pessoa ou empresa confiável enviando mensagens enganosas. Ao clicar no link da mensagem, a pessoa pode ter seus dados roubados. Em outros casos, o fraudador envia boletos falsos ou até mesmo solicita pagamentos via Pix para receber pagamentos.

O termo vem do inglês "fishing", que remete ao ato de pescar. As mensagens são as "iscas" e os dados pessoais os "peixes" a serem fisgados nesse ataque virtual.`,
    },
  ];

  const [isOpen, setIsOpen] = useState(-1);
  const [isOpenFaq, setIsOpenFaq] = useState(-1);

  return (
    <Template title="Vazamento de Dados">
      <div className="flex items-center justify-center w-full mb-20">
        <div className="w-[800px] flex flex-col gap-y-4">
          <Alert variant="destructive" className="bg-orange-50 border-0">
            <TriangleAlert className="h-5 w-5" />
            <AlertTitle className="font-bold text-black">
              {dataLeaks.length} vazamento(s) detectado(s)
            </AlertTitle>
            <AlertDescription className="text-black/75">
              Atualizado em {new Date().toLocaleDateString("pt-BR")} às{" "}
              {new Date().toLocaleTimeString("pt-BR")}
            </AlertDescription>
          </Alert>
          <p className="text-sm text-justify text-black/80">
            A deep e dark web são locais conhecidos por abrigar dados pessoais
            vazados de diversas fontes, podendo ser usados para fraudes e
            roubos. É fundamental manter seus dados pessoais em sigilo e estar
            atento a qualquer comportamento suspeito. Proteja suas informações!
          </p>

          {dataLeaks.map((item, index) => (
            <div key={index}>
              <h1 className="font-bold text-2xl mb-2">{item.date}</h1>
              <Alert
                className="cursor-pointer"
                onClick={() => setIsOpen(isOpen === index ? -1 : index)}
              >
                <AlertTitle className="flex font-normal text-sm">
                  <ChevronRight
                    className={`h-5 w-5 mr-1 transition-transform duration-300  ${
                      isOpen === index ? "rotate-90" : ""
                    }`}
                  />
                  Dados vazados
                </AlertTitle>
                <AlertDescription className="font-semibold ml-6">
                  {item.leaks}
                </AlertDescription>
              </Alert>
              {isOpen === index && (
                <div className="mt-2 text-sm text-black/75">
                  <p className="text-sm text-justify text-black/60 mx-6">
                    {item.description}
                  </p>
                </div>
              )}
            </div>
          ))}

          <p className="text-lg font-bold">Perguntas frequentes</p>
          {faqs.map((faq, index) => (
            <div key={index}>
              <Alert
                className="cursor-pointer"
                onClick={() => setIsOpenFaq(isOpenFaq === index ? -1 : index)}
              >
                <AlertTitle className="flex font-semibold">
                  <ChevronRight
                    className={`h-5 w-5 mr-1 transition-transform duration-300  ${
                      isOpenFaq === index ? "rotate-90" : ""
                    }`}
                  />
                  {faq.question}
                </AlertTitle>
              </Alert>
              {isOpenFaq === index && (
                <div className="mt-2 text-sm">
                  <p className="text-sm text-justify text-black/60 mx-5">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Template>
  );
}
