"use client";

import { useEffect } from "react";

export function AutoUpdate() {
  useEffect(() => {
    // Intervalo de verificação (ex: a cada 60 segundos)
    const CHECK_INTERVAL = 60 * 1000;

    const checkVersion = async () => {
      try {
        // Adiciona timestamp para evitar cache do próprio navegador na requisição
        const res = await fetch(`/version.json?t=${Date.now()}`, {
          cache: "no-store",
        });

        if (!res.ok) return;

        const data = await res.json();
        const serverVersion = data.version;

        // Pega a versão salva no navegador
        const localVersion = localStorage.getItem("app_version");

        // Se não tiver versão local, salva a atual e não faz nada (primeiro acesso)
        if (!localVersion) {
          localStorage.setItem("app_version", serverVersion);
          return;
        }

        // Se as versões forem diferentes, temos uma atualização!
        if (serverVersion !== localVersion) {
          console.log("🔄 Nova versão detectada! Atualizando...");

          // 1. Atualiza a versão no storage
          localStorage.setItem("app_version", serverVersion);

          // 2. Limpa caches específicos se necessário (opcional)
          if ("caches" in window) {
            // Limpa Cache Storage (Service Workers) se houver
            const keys = await caches.keys();
            await Promise.all(keys.map((key) => caches.delete(key)));
          }

          // 3. Força o recarregamento da página vindo do servidor (ignora cache do browser)
          window.location.reload();
        }
      } catch (error) {
        console.error("Erro ao verificar versão:", error);
      }
    };

    // Verifica imediatamente ao montar
    checkVersion();

    // Configura o intervalo
    const intervalId = setInterval(checkVersion, CHECK_INTERVAL);

    // Limpa o intervalo se o componente desmontar
    return () => clearInterval(intervalId);
  }, []);

  // Esse componente não renderiza nada visualmente
  return null;
}
