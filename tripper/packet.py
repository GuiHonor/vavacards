"""Pacotes BLE do Tripper Pod (RE_DISP).

Todo pacote tem 20 bytes: 18 de payload + CRC-16/CCITT-FALSE big-endian.
Layout baseado nas notas publicas do OpenTripper e do WazeTripper; ver docs/PROTOCOLO.md.
"""

SERVICE_UUID = "01ff0100-ba5e-f4ee-5ca1-eb1e5e4b1ce0"
CHAR_UUID = "01ff0101-ba5e-f4ee-5ca1-eb1e5e4b1ce0"

UNIT_M = 1
UNIT_KM_X10 = 2


def crc16(data: bytes) -> int:
    crc = 0xFFFF
    for byte in data:
        crc ^= byte << 8
        for _ in range(8):
            crc = ((crc << 1) ^ 0x1021 if crc & 0x8000 else crc << 1) & 0xFFFF
    return crc


def build(payload: bytes) -> bytes:
    if len(payload) > 18:
        raise ValueError("payload maior que 18 bytes")
    body = payload.ljust(18, b"\x00")
    return body + crc16(body).to_bytes(2, "big")


def is_valid(packet: bytes) -> bool:
    return len(packet) == 20 and crc16(packet[:18]) == int.from_bytes(packet[18:], "big")


def ping() -> bytes:
    return build(b"\x03")


def pin(digits: str) -> bytes:
    if len(digits) != 6 or not digits.isdigit():
        raise ValueError("PIN deve ter 6 digitos")
    return build(b"\x20" + digits.encode())


def nav(icon: int, distance: int, unit: int = UNIT_M, intensity: int = 0,
        next_icon: int = 0xFF, bottom: bytes = b"\x00\x00\x00") -> bytes:
    payload = bytes([0x10, 0x11, icon]) + distance.to_bytes(2, "big") + bytes(
        [unit, intensity, next_icon, 0xFF, 0xFF, 0x41]) + bottom[:3].ljust(3, b"\x00")
    return build(payload)
