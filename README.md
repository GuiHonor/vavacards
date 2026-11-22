# Tripper Map

Engenharia reversa do Tripper da Royal Enfield Hunter 350 (2026/27), com o objetivo de
mostrar mais do que setas e metragem no display.

Projeto pessoal, não oficial, sem vínculo com a Royal Enfield. Use por sua conta e risco
e nunca mexa no celular com a moto em movimento.

## Estado

- `tripper/packet.py`: montagem e validação dos pacotes BLE de 20 bytes (CRC conferido
  contra um pacote real publicado).
- `docs/PROTOCOLO.md`: o que já se sabe do protocolo e o que falta descobrir.
- Ainda não testado na moto.

## Testes

    python3 -m unittest discover -s tests

## Material de engenharia reversa

APKs, código decompilado e capturas Bluetooth ficam fora do git (ver `.gitignore`):
o app é proprietário e as capturas contêm PIN, MAC e localização.
Coloque as capturas em `captures/`.
