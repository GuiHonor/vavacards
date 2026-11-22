# Protocolo do Tripper Pod (RE_DISP)

Resumo do que projetos públicos já documentaram. Nada aqui foi confirmado ainda na
nossa moto; cada item deve ser marcado como confirmado quando testarmos.

Fontes: [OpenTripper](https://github.com/OSolerHugo/opentripper) (MIT, feito numa Hunter 350),
[WazeTripper](https://github.com/jnsdias/wazetripper) (Apache-2.0, Meteor 350),
[Cruizer](https://github.com/nxs-neo/Cruizer) (GPL-3.0).

## Enlace

- Nome anunciado: `RE_DISP`, somente BLE, módulo NXP (OUI `00:60:37`).
- Serviço `01FF0100-BA5E-F4EE-5CA1-EB1E5E4B1CE0`, característica `01FF0101-...` (write sem resposta, sem notify).
- Papel duplo: o celular conecta como cliente e também precisa hospedar um servidor GATT
  com o mesmo serviço; o pod escreve as respostas nele. Sem isso o pod derruba a conexão em 1-2 s.
  Web Bluetooth não serve; precisa de app Android nativo (ou Linux com BlueZ).
- Anuncia por ~30 s depois de ligar a ignição.
- Pareamento por PIN de 6 dígitos mostrado no display.

## Pacote

20 bytes: 18 de payload + CRC-16/CCITT-FALSE (poly 0x1021, init 0xFFFF) big-endian nos bytes 18-19.

| Opcode | Função |
|---|---|
| `03` | Ping; enviar a cada 1,5-2 s. O pod desconecta após ~5 s sem dados |
| `21 01` / `21 00` | Handshake: dispositivo novo (mostra PIN) / já conhecido |
| `20` + 6 ASCII | Envio do PIN |
| `10 11` | Tela de navegação (reenviar a cada ~1,5 s) |
| `40 05` | Aviso de chamada |
| `50` | Relógio (hora, minuto) |

Navegação `10 11`: `[2]` ícone grande, `[3-4]` distância uint16 BE, `[5]` unidade (1 = m, 2 = km x10),
`[6]` intensidade/modo noite, `[7]` ícone pequeno da próxima manobra (FF = nenhum),
`[8-9]` distância secundária (FFFF = nenhuma), `[10]` 0x41, `[11-13]` linha inferior
(distância total, tempo restante ou hora de chegada).

Intervalo entre escritas: 50-60 ms.

## Perguntas em aberto

1. Nossa moto anuncia `RE_DISP`? Ou a Hunter nova usa outro hardware?
2. Existe algum comando para enviar pixels/bitmap? As fontes dizem que não: o display
   usa uma tabela fixa de glifos na flash, endereçada por 1 byte.
3. O que são os ícones nas faixas não testadas (`0B-13`, `23-2A`, `32-3B`, `45-FE`)?
4. O app oficial tem caminho de atualização de firmware (OTA)? Se tiver, é assinado?
